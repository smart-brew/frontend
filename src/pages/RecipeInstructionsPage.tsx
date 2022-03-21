import React, { useState } from 'react';

import { useLocation, useHistory } from 'react-router-dom';

import InstructionPopup from '../components/popup/instruction/InstructionPopup';
import InstructionForBackendType from '../types/RecipeData/InstructionForBackendType';
import RecipeBlock from '../components/recipe/instructions/RecipeBlock';
import RecipeBlockType from '../types/RecipeData/RecipeBlockType';
import EditableInstructionTemplateType from '../components/recipe/instructions/single-instruction/EditableInstructionTemplateType';
import AddBlockButton from '../components/recipe/instructions/AddBlockButton';
import { IngredientsFormProps } from './RecipeIngredientsPage';
import { createRecipe } from '../api/recipe';
import SplitPage from '../components/shared/SplitPage';
import { InstructionsContext } from '../contexts/instructionsContext';
import InstructionTemplate from '../types/FunctionData/InstructionTemplate';

import IngredientType from '../types/RecipeData/IngredientType';
import CreateInstructionsSidebar from '../components/sidebar/CreateInstructionsSidebar';

export interface RecipeDataProps {
  sendIngredients: IngredientType[];
  sendRecipeName: string | '';
  sendBlocks: RecipeBlockType[] | null;
}

const RecipeInstructionsPage: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const { ingredients, recipeName, addBlocks } =
    location.state as IngredientsFormProps;

  const templates = React.useContext(InstructionsContext);

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
    optionCodeName: null,
    options: [],
    ordering: -1,
  };

  const [addedInstructions, setAddedInstructions] = useState(
    Array<EditableInstructionTemplateType>(emptyInstr)
  );

  const [addedBlocks, setAddedBlocks] = useState(addBlocks);

  const popupRef = React.useRef<HTMLDivElement>(null);

  const toIngredients = (): void => {
    const data: RecipeDataProps = {
      sendIngredients: ingredients,
      sendRecipeName: recipeName,
      sendBlocks: addedBlocks,
    };

    history.push('/recipe/ingredients', data);
  };

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
  };

  const handleInstrSelection = (instr: InstructionTemplate): undefined => {
    const popupNode = popupRef?.current;
    const dataOriginal = popupNode?.getAttribute('data-original');
    console.log(dataOriginal);
    if (dataOriginal) {
      const [index, blockId, blockName] = dataOriginal.split('_');

      const newInstruction: EditableInstructionTemplateType = {
        ...instr,
        param: null,
        optionCodeName:
          instr.options !== null && instr.options.length !== 0
            ? instr.options[0].codeName
            : null,
        options: instr.options,
        ordering: -1,
        blockId: parseInt(blockId, 10),
        blockName,
      };

      console.log(newInstruction.blockId);

      handleAddInstructionToBlock(
        newInstruction,
        parseInt(index, 10),
        parseInt(blockId, 10)
      );
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
    const mappedInstructions: InstructionForBackendType[] =
      addedInstructions.map((instruction) => {
        const newInstruction: InstructionForBackendType = {
          templateId: instruction.id,
          blockId: instruction.blockId,
          blockName: instruction.blockName,
          param: instruction.param,
          optionCodeName: instruction.optionCodeName,
          ordering: instruction.ordering,
        };
        console.log(newInstruction);
        return newInstruction;
      });

    return mappedInstructions;
  };

  const handleAddBlock = (index: number): void => {
    const newAddedBlocks = [...addedBlocks];
    newAddedBlocks.splice(index, 0, {
      blockId: index,
      blockName: '',
      instructions: new Array<EditableInstructionTemplateType>(),
    });
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

  const checkEmptyBoxes = (): boolean => {
    return addedBlocks.find((block) => block.blockName === '') !== undefined; // returns true if there are empty boxes
  };

  const checkBlockNameDoubles = (): number[] => {
    const unique = addedBlocks.filter(
      (
        (set) => (f: RecipeBlockType) =>
          !set.has(f.blockName) && set.add(f.blockName)
      )(new Set())
    );

    return unique.map((a) => a.blockId); // returns array of blockIds of blocks with unique names
  };

  const checkBlockNameDoublesBoolean = (): boolean => {
    return checkBlockNameDoubles().length !== addedBlocks.length; // returns true if there are doubles
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

  const handleInstrPopupCancel = (): void => {
    const instructionPopupNode = popupRef?.current;
    instructionPopupNode?.classList.remove('modal-bg-active');
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

      if (res.id) history.push('/recipe');
      else {
        console.log('Error creating recipe');
      }
    });
  };

  return (
    <SplitPage>
      <div className="flex flex-col space-y-5 justify-center py-4">
        {addedBlocks.map((block, index) => (
          <div
            // eslint-disable-next-line react/no-array-index-key
            key={block.blockName + index}
            className="flex justify-center items-center"
          >
            <RecipeBlock
              blockName={block.blockName}
              blockId={index}
              instructions={block.instructions}
              checkBlockNameDoubles={checkBlockNameDoubles}
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
        <div className="modal-bg" ref={popupRef} style={{ margin: 0 }}>
          <InstructionPopup
            templates={templates?.data || []}
            callback={handleInstrSelection}
            hideCallback={handleInstrPopupCancel}
          />
        </div>
      </div>

      <CreateInstructionsSidebar
        saveRecipe={saveRecipe}
        checkEmptyBoxes={checkEmptyBoxes}
        checkBlockNameDoublesBoolean={checkBlockNameDoublesBoolean}
        toIngredients={toIngredients}
        ingredients={ingredients}
        recipeName={recipeName}
      />
    </SplitPage>
  );
};

export default RecipeInstructionsPage;