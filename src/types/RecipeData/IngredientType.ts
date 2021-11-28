/* eslint-disable camelcase */

type IngredientType = {
  id: number;
  recipe_id: number;
  name: string;
  amount: number;
  type: string;
  units: string;
};

export interface IngredientsT {
  [key: string]: IngredientType[];
}

export default IngredientType;
