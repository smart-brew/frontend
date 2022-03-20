import { RecipeDataProps } from '../../pages/RecipeInstructionsPage';
import InstructionTemplate from '../../types/FunctionData/InstructionTemplate';
import RecipeBlockType from '../../types/RecipeData/RecipeBlockType';
import RecipeType from '../../types/RecipeData/RecipeType';
import EditableInstructionTemplateType from '../recipe/instructions/single-instruction/EditableInstructionTemplateType';

const returnTemplate = (
  templates: InstructionTemplate[],
  codeName: string
): InstructionTemplate => {
  const template = templates.find((templ) => templ.codeName === codeName);
  if (template) {
    return template;
  }
  return templates[0]; // rather show an error
};

export const returnEditFormat = (
  data: RecipeType,
  templates: InstructionTemplate[]
): RecipeDataProps => {
  const recipeBlocks: RecipeBlockType[] = [];

  const newInstructions = data.Instructions.map((instruction) => {
    const {
      blockId,
      blockName,
      category,
      codeName,
      id,
      optionCodeName,
      ordering,
      param,
      templateId,
    } = instruction;

    const template = returnTemplate(templates, codeName);
    const { description, inputType, options, units, name } = template;
    return {
      blockId,
      blockName,
      category,
      codeName,
      id,
      optionCodeName,
      ordering,
      templateId,
      param,
      description,
      inputType,
      options,
      units,
      name,
    };
  });

  const newInstructionsSorted = newInstructions.sort((a, b) =>
    a.ordering > b.ordering ? 1 : -1
  );

  const uniqueBlockIds: number[] = Array.from(
    new Set(
      newInstructionsSorted.map(
        (item: EditableInstructionTemplateType) => item.blockId
      )
    )
  );
  let newBlockId = 0;
  uniqueBlockIds.forEach((element) => {
    const instructionsInBlock = newInstructionsSorted.filter(
      (ins) => ins.blockId === element
    );
    const newB = {
      blockId: newBlockId,
      blockName: instructionsInBlock[0].blockName,
      instructions: instructionsInBlock,
    };
    recipeBlocks.push(newB);
    newBlockId += 1;
  });

  const newData: RecipeDataProps = {
    sendBlocks: recipeBlocks,
    sendIngredients: data.Ingredients,
    sendRecipeName: data.name,
    sendRecipeId: data.id,
    sendLockedState: data.locked,
  };

  return newData;
};
