/* eslint-disable camelcase */

import React, { useState } from 'react';

import { useLocation, useHistory } from 'react-router-dom';

import InstructionPopup from '../components/RecipeBuilding/InstructionPopup/InstructionPopup';
import InstructionTemplateType from '../types/FunctionData/InstructionTemplateType';
import InstructionForBackendType from '../types/RecipeData/InstructionForBackendType';
import RecipeBlock from '../components/RecipeBuilding/RecipeBlock';
import RecipeBlockType from '../types/RecipeData/RecipeBlockType';
import EditableInstructionTemplateType from '../components/RecipeBuilding/InstructionComponents/EditableInstructionTemplateType';
import AddBlockButton from '../components/RecipeBuilding/AddBlockButton';
import { IngredientsFormProps } from './RecipeIngredientsPage';
import { templates } from '../components/RecipeBuilding/instructionTemplates';
import { createRecipe } from '../api/recipe';

const RecipeInstructionsPage: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const { ingredients, recipeName } = location.state as IngredientsFormProps;

  const emptyInstr: EditableInstructionTemplateType = {
    id: -1,
    blockId: -1,
    blockName: '',
    codeName: 'EMPTY',
    name: 'Empty instruction',
    category: 'EMPTY',
    units: null,
    inputType: 'string',
    description: 'This instruction is a placeholder.',
    param: null,
    device: null,
    ordering: -1,
  };

  const [addedInstructions, setAddedInstructions] = useState(
    Array<EditableInstructionTemplateType>(emptyInstr)
  );

  const [addedBlocks, setAddedBlocks] = useState(Array<RecipeBlockType>());

  const popupRef = React.useRef<HTMLDivElement>(null);

  const updateAddedInstructions = (): void => {
    let instrCounter = 0;
    const newAddedInstructions: Array<EditableInstructionTemplateType> = [];
    // iterate over blocks and assign ordering to the instructions
    addedBlocks.forEach((block) => {
      block.instructions.forEach((instruction) => {
        instruction.ordering = instrCounter;
        newAddedInstructions.push(instruction);
        instrCounter += 1;
      });
    });

    console.log(newAddedInstructions);
    setAddedInstructions(newAddedInstructions);
  };

  const handleAddInstructionToBlock = (
    instr: EditableInstructionTemplateType,
    index: number,
    blockId: number
  ): void => {
    const newBlocks: Array<RecipeBlockType> = [...addedBlocks];
    newBlocks
      .find((block) => block.blockId === blockId)
      ?.instructions.splice(index, 0, instr);

    setAddedBlocks(newBlocks);
    updateAddedInstructions();

    // let editableInstr: EditableInstructionTemplateType = {
    //   ...emptyInstr,
    // };
    // editableInstr = Object.assign(editableInstr, instr);
    // editableInstr.blockId = index;
    // setAddedInstructions(addedInstructions.splice(index, 0, editableInstr));
  };

  const handleInstrSelection = (instr: InstructionTemplateType): undefined => {
    const popupNode = popupRef?.current;
    const dataOriginal = popupNode?.getAttribute('data-original');
    if (dataOriginal) {
      const [index, blockId, blockName] = dataOriginal.split('_');
      console.log(instr.devices);
      const newInstruction: EditableInstructionTemplateType = {
        ...instr,
        param: null,
        device:
          instr.devices !== null && instr.devices.length !== 0
            ? instr.devices[0].device
            : null,
        ordering: -1,
        blockId: parseInt(blockId, 10),
        blockName,
      };

      handleAddInstructionToBlock(
        newInstruction,
        parseInt(index, 10),
        parseInt(blockId, 10)
      );

      // const newAddedInstructions = [...addedInstructions];
      // newAddedInstructions.splice(parseInt(index, 10), 0, newInstruction);
      // setAddedInstructions(newAddedInstructions);
    }

    popupNode?.classList.remove('modal-bg-active');
    return undefined;
  };

  const handleEditInstruction = (
    instr: EditableInstructionTemplateType,
    index: number,
    blockId: number
  ): void => {
    const newBlocks: Array<RecipeBlockType> = [...addedBlocks];
    newBlocks
      .find((block) => block.blockId === blockId)
      ?.instructions.splice(index, 1, instr);

    setAddedBlocks(newBlocks);
    updateAddedInstructions();
  };

  const returnInstructionsForBackend = (): Array<InstructionForBackendType> => {
    const mappedInstructions = new Array<InstructionForBackendType>();
    addedInstructions.forEach((instruction) => {
      const newInstruction: InstructionForBackendType = {
        templateId: instruction.id,
        blockId: instruction.blockId,
        blockName: instruction.blockName,
        param: instruction.param,
        device: instruction.device,
        ordering: instruction.ordering,
      };
      mappedInstructions.push(newInstruction);
    });

    return mappedInstructions;
  };

  const handleAddBlock = (index: number): void => {
    console.log(addedBlocks);
    console.log(index);
    const newAddedBlocks = [...addedBlocks];
    newAddedBlocks.splice(index, 0, {
      blockId: index,
      blockName: '',
      instructions: new Array<EditableInstructionTemplateType>(),
    });
    console.log(newAddedBlocks);
    setAddedBlocks(newAddedBlocks);
  };

  const handleChangeBlockName = (index: number, name: string): void => {
    const newAddedBlocks = [...addedBlocks];
    newAddedBlocks[index].blockName = name;
    newAddedBlocks[index].instructions.forEach((instruction) => {
      instruction.blockName = name;
    });

    setAddedBlocks(newAddedBlocks);
  };

  const handleBlockDelete = (blockId: number): void => {
    const newAddedBlocks = addedBlocks.filter(
      (block) => block.blockId !== blockId
    );
    let blockCounter = 0;
    newAddedBlocks.forEach((block) => {
      block.blockId = blockCounter;
      block.instructions.forEach((instruction) => {
        instruction.blockId = blockCounter;
      });
      blockCounter += 1;
    });

    setAddedBlocks(newAddedBlocks);
  };

  const handleInstructionDelete = (index: number, blockId: number): void => {
    const newAddedBlocks = [...addedBlocks];
    newAddedBlocks
      .find((block) => block.blockId === blockId)
      ?.instructions.splice(index, 1);

    setAddedBlocks(newAddedBlocks);
    updateAddedInstructions();
  };

  const handleAddInstructionButtonClicked = (
    index: number,
    blockId: number,
    blockName: string
  ): void => {
    const instructionPopupNode = popupRef?.current;
    instructionPopupNode?.setAttribute(
      'data-original',
      `${index.toString()}_${blockId.toString()}_${blockName}`
    );
    instructionPopupNode?.classList.add('modal-bg-active');
  };

  const saveRecipe = async (): Promise<void> => {
    const instructions = returnInstructionsForBackend();
    console.log({ instructions, ingredients, recipeName });

    await createRecipe({
      name: recipeName,
      description: '',
      locked: false,
      Ingredients: ingredients,
      Instructions: instructions,
    }).then((res) => {
      console.log({ res });
      // TODO pridat kontorolu ci OK
      history.push('/recipe');
    });
  };

  return (
    <div className="flex flex-col space-y-5 justify-center">
      {addedBlocks.map((block, index) => (
        <div>
          <RecipeBlock
            key={block.blockName}
            blockName={block.blockName}
            blockId={index}
            instructions={block.instructions}
            handleAddButtonClick={handleAddInstructionButtonClicked}
            onNameChange={handleChangeBlockName}
            onInstructionEdit={handleEditInstruction}
            onBlockDelete={handleBlockDelete}
            onInstructionDelete={handleInstructionDelete}
          />
        </div>
      ))}
      <AddBlockButton
        buttonIndex={addedBlocks.length}
        onBlockAdd={handleAddBlock}
      />
      {/* <span>{selectedInstr.name}</span>
      <EditableInstruction
        instruction={selectedInstr}
        blockId={-1}
        onDelete={() => {
          return true;
        }}
      /> */}
      {/*      {addedInstructions.map((instr, index) => {
        return (
          <div>
            <EditableInstruction
              instruction={instr}
              blockId={0}
              onDelete={() => {
                return true;
              }}
            />
            <AddInstructionButton index={index} />
          </div>
        );
      })} */}
      {/* <button
        className="select-button w-1/5"
        type="button"
        onClick={(e) => {
          const instructionPopupNode = popupRef?.current;
          instructionPopupNode?.classList.add('modal-bg-active');
        }}
      >
        Select instruction
      </button> */}
      <button
        type="button"
        className="select-button"
        onClick={() => saveRecipe()}
      >
        Save recipe
      </button>
      <div className="modal-bg" ref={popupRef}>
        <InstructionPopup
          functions={templates}
          callback={handleInstrSelection}
        />
      </div>
    </div>
  );
};

export default RecipeInstructionsPage;
