import InstructionTemplateType from '../FunctionData/InstructionTemplateType';
import EditableInstructionTemplateType from '../../components/RecipeBuilding/InstructionComponents/EditableInstructionTemplateType';

type RecipeBlockType = {
  instructions: Array<EditableInstructionTemplateType>;
  blockId: number;
  blockName: string;
};

export default RecipeBlockType;
