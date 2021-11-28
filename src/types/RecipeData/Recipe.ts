import IngredientType from './IngredientType';
import InstructionForBackendType from './InstructionForBackendType';

export interface RecipeApiUpload {
  name: string;
  description: string;
  locked: boolean;
  Ingredients: IngredientType[];
  Instructions: InstructionForBackendType[];
}
