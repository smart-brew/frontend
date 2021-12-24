type IngredientType = {
  id: number;
  recipeId: number;
  name: string;
  amount: number;
  type: string;
  units: string;
};

export interface IngredientsT {
  [key: string]: IngredientType[];
}

export default IngredientType;
