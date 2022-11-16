import React, { useState } from 'react';

import { useLocation, useHistory } from 'react-router-dom';

import InstructionPopup from '../components/popup/instruction/InstructionPopup';
import InstructionForBackendType from '../types/RecipeData/InstructionForBackendType';
import RecipeBlock from '../components/recipe/instructions/RecipeBlock';
import RecipeBlockType from '../types/RecipeData/RecipeBlockType';
import EditableInstructionTemplateType from '../components/recipe/instructions/single-instruction/EditableInstructionTemplateType';
import AddBlockButton from '../components/recipe/instructions/AddBlockButton';
import { IngredientsFormProps } from './RecipeIngredientsPage';
import { createRecipe, editRecipe } from '../api/recipe';
import SplitPage from '../components/shared/SplitPage';
import InstructionTemplate from '../types/FunctionData/InstructionTemplate';

import IngredientType from '../types/RecipeData/IngredientType';
import CreateInstructionsSidebar from '../components/sidebar/CreateInstructionsSidebar';
import IngredientForBackendType from '../types/RecipeData/IngredientForBackendType';
import { usePopup } from '../contexts/popupContext';

export interface RecipeDataProps {
  sendIngredients: IngredientType[];
  sendRecipeName: string | '';
  sendBlocks: RecipeBlockType[] | null;
  sendRecipeId: number;
  sendLockedState: boolean;
}

const RecipeInstructionsPage: React.FC = () => {
  const history = useHistory();
  const location = useLocation();

  const {
    ingredients,
    recipeName,
    addBlocks,
    sendRecipeId,
    sendLockedState,
    savedRecipesInfo,
  } = location.state as IngredientsFormProps;

  const [addedBlocks, setAddedBlocks] = useState(addBlocks);
  const [instructionError, setInstructionError] = useState(false);

  const popupRef = React.useRef<HTMLDivElement>(null);
  const popup = usePopup();

  const toIngredients = (): void => {
    const data: RecipeDataProps = {
      sendIngredients: ingredients,
      sendRecipeName: recipeName,
      sendBlocks: addedBlocks,
      sendRecipeId,
      sendLockedState,
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
    if (dataOriginal) {
      const [index, blockId, blockName] = dataOriginal.split('$');

      const newInstruction: EditableInstructionTemplateType = {
        ...instr,
        templateId: instr.id,
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
    blockId: number,
    error: boolean
  ): void => {
    if (error) {
      setInstructionError(true);
    } else {
      setInstructionError(false);
    }
    const newBlocks: Array<RecipeBlockType> = [...addedBlocks];
    newBlocks
      .find((block) => block.blockId === blockId)
      ?.instructions.splice(index, 1, instr);

    setAddedBlocks(newBlocks);
    updateAddedInstructions();
  };

  const returnInstructionsFromBlocks =
    (): Array<EditableInstructionTemplateType> => {
      const allInstructions = addedBlocks.map((block) => {
        return block.instructions;
      });
      return allInstructions.flat();
    };

  const returnInstructionsForBackend = (): Array<InstructionForBackendType> => {
    const allInstructions = returnInstructionsFromBlocks();
    const mappedInstructions: InstructionForBackendType[] = allInstructions.map(
      (instruction) => {
        const newInstruction: InstructionForBackendType = {
          templateId: instruction.templateId,
          blockName: instruction.blockName,
          param: instruction.param,
          optionCodeName: instruction.optionCodeName,
          ordering: instruction.ordering,
        };
        return newInstruction;
      }
    );

    return mappedInstructions;
  };

  const returnIngredientForBackend = (): Array<IngredientForBackendType> => {
    const allIngredients = ingredients;
    const mappedInstructions: IngredientForBackendType[] = allIngredients.map(
      (ingredient) => {
        const newIngredient: IngredientForBackendType = {
          name: ingredient.name,
          amount: ingredient.amount,
          type: ingredient.type,
          units: ingredient.units,
        };
        return newIngredient;
      }
    );

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
    const emptyInstr: boolean =
      addedBlocks.find((block) => block.instructions.length === 0) !==
      undefined;
    const emptyName: boolean =
      addedBlocks.find((block) => block.blockName === '') !== undefined;
    return emptyInstr || emptyName;
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

  const checkBlockPresence = (): boolean => {
    // returns true if no blocks defined
    if (addedBlocks.length === 0) {
      return true;
    }
    return false;
  };

  const checkIngredientPresence = (): boolean => {
    // returns true if no ingredients defined
    if (ingredients.length === 0) {
      return true;
    }
    return false;
  };

  const checkRecipeMakingConditions = (): boolean => {
    if (instructionError) {
      popup?.open({
        title: 'Values in instruction not correct',
        description:
          'Instruction values are not in the right form. Please check the warnings of the page.',
        buttonText: 'Close',
        popupType: 'info',
        onConfirm: () => console.log('notification'),
      });
      return false;
    }
    if (checkBlockPresence()) {
      popup?.open({
        title: 'No recipe stage added',
        description:
          'Recipe has to consist of at least one stage of instructions',
        buttonText: 'Close',
        popupType: 'info',
        onConfirm: () => console.log('notification'),
      });
      return false;
    }
    if (checkIngredientPresence()) {
      popup?.open({
        title: 'No ingrediet added',
        description: 'Recipe has to consist of at least one ingredient',
        buttonText: 'Close',
        popupType: 'info',
        onConfirm: () => console.log('notification'),
      });
      return false;
    }

    return true;
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
      `${index.toString()}$${blockId.toString()}$${blockName}`
    );
    instructionPopupNode?.classList.add('modal-bg-active');
  };

  const handleInstrPopupCancel = (): void => {
    const instructionPopupNode = popupRef?.current;
    instructionPopupNode?.classList.remove('modal-bg-active');
  };

  const saveRecipe = async (state: string): Promise<void> => {
    const instructions = returnInstructionsForBackend();
    const ingr = returnIngredientForBackend();
    let newRecipeName = recipeName;
    if (state === 'edit') {
      if (savedRecipesInfo.find((recipe) => recipe.name === recipeName)) {
        newRecipeName = `${recipeName}_copy`;
      }
    }
    await createRecipe({
      name: newRecipeName,
      description: '',
      locked: state === 'edit' ? false : sendLockedState,
      Ingredients: ingr,
      Instructions: instructions,
    }).then((res) => {
      console.log({ res });

      if (res?.id) history.push('/recipe');
      else {
        console.log('Error creating recipe');
      }
    });
  };

  const editTheRecipe = async (): Promise<void> => {
    const instructions = returnInstructionsForBackend();
    const ingr = returnIngredientForBackend();

    await editRecipe(
      {
        name: recipeName,
        description: '',
        locked: sendLockedState,
        Ingredients: ingr,
        Instructions: instructions,
      },
      sendRecipeId
    ).then((res) => {
      console.log({ res });

      if (res?.id) history.push('/recipe');
      else {
        console.log('Error editing recipe');
      }
    });
  };

  return (
    <>
      <SplitPage
        back={{
          text: 'Recipes',
          to: '/recipe',
        }}
      >
        <div className="flex flex-col space-y-5 justify-center py-4 pt-16">
          {addedBlocks.map((block, index) => (
            <div
              // eslint-disable-next-line react/no-array-index-key
              key={block.blockName + index}
              className="flex justify-center items-center block-item "
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
        </div>

        <CreateInstructionsSidebar
          saveRecipe={saveRecipe}
          editRecipe={editTheRecipe}
          recipeId={sendRecipeId}
          recipeLocked={sendLockedState}
          checkBlockNameDoublesBoolean={checkBlockNameDoublesBoolean}
          checkEmptyBoxes={checkEmptyBoxes}
          checkRecipeMakingConditions={checkRecipeMakingConditions}
          toIngredients={toIngredients}
          ingredients={ingredients}
          recipeName={recipeName}
        />
      </SplitPage>

      <div className="modal-bg" ref={popupRef} style={{ margin: 0 }}>
        <InstructionPopup
          callback={handleInstrSelection}
          hideCallback={handleInstrPopupCancel}
        />
      </div>
    </>
  );
};

export default RecipeInstructionsPage;
