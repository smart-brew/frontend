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
  createdAt?: Date | null;
  updatedAt?: Date | null;
  deletedAt?: Date | null;
  Ingredients: Array<IngredientType>;
  Instructions: Array<InstructionType>;
};

export default RecipeType;
