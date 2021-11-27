import IngredientType from './IngredientType';
import InstructionType from './InstructionType';

export interface RecipeSimple {
  id: number;
  name: string;
  description: string;
  locked: boolean;
}

type RecipeType = {
  id: number;
  name: string;
  description: string;
  locked: boolean;
  created_at: Date | null;
  updated_at: Date | null;
  Ingredients: Array<IngredientType> | null;
  Instructions: Array<InstructionType> | null;
};

export default RecipeType;
