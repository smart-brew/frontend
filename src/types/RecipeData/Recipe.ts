import IngredientForBackendType from './IngredientForBackendType';
import InstructionForBackendType from './InstructionForBackendType';

export interface RecipeApiUpload {
  name: string;
  description: string;
  locked: boolean;
  Ingredients: IngredientForBackendType[];
  Instructions: InstructionForBackendType[];
}
