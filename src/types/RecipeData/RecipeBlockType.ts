import EditableInstructionTemplateType from '../../components/recipe/instructions/single-instruction/EditableInstructionTemplateType';

type RecipeBlockType = {
  instructions: Array<EditableInstructionTemplateType>;
  blockId: number;
  blockName: string;
};

export default RecipeBlockType;
