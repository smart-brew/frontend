import InstructionTemplateType from '../FunctionData/InstructionTemplateType';

type RecipeBlockType = {
  instructions: Array<InstructionTemplateType>;
  blockId: number;
  blockName: string;
};

export default RecipeBlockType;
