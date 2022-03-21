import { RecipeDataProps } from '../../pages/RecipeInstructionsPage';
import InstructionTemplate from '../../types/FunctionData/InstructionTemplate';
import RecipeBlockType from '../../types/RecipeData/RecipeBlockType';
import RecipeType from '../../types/RecipeData/RecipeType';
import EditableInstructionTemplateType from '../recipe/instructions/single-instruction/EditableInstructionTemplateType';

const returnTemplate = (
  templates: InstructionTemplate[],
  codeName: string
): InstructionTemplate | undefined => {
  const template = templates.find((templ) => templ.codeName === codeName);
  if (template) {
    return template;
  }
  return undefined;
};

export const returnEditFormat = (
  data: RecipeType,
  templates: InstructionTemplate[]
): RecipeDataProps | null => {
  const recipeBlocks: RecipeBlockType[] = [];

  const newInstructions = data.Instructions.reduce(
    (result: EditableInstructionTemplateType[], instruction) => {
      const {
        blockId,
        blockName,
        category,
        codeName,
        optionCodeName,
        ordering,
        param,
        templateId,
      } = instruction;

      const template = returnTemplate(templates, codeName);
      if (template) {
        const { description, inputType, options, units, name } = template;
        result.push({
          blockId,
          blockName,
          category,
          codeName,
          templateId,
          optionCodeName,
          ordering,
          param,
          description,
          inputType,
          options,
          units,
          name,
        });
      }
      return result;
    },
    []
  );
  if (newInstructions.length === data.Instructions.length) {
    // only if all the templates have been loaded
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
    let newBlockId = 0; // blocks have to start from the number 0
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
  }
  return null;
};
