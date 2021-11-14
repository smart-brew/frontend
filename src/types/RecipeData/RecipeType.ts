import IngredientType from './IngredientType';
import InstructionType from './InstructionType';

type RecipeType = {
  id: number;
  name: string;
  description: string;
  locked: boolean;
  created_at: Date;
  updated_at: Date;
  Ingredients: Array<IngredientType>;
  Instructions: Array<InstructionType>;
};

export default RecipeType;
