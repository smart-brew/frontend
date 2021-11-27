import React from 'react';
import IngredientType from '../../../types/RecipeData/IngredientType';
import { IngredientSection } from './IngredientSection';

interface IngredientsT {
  [key: string]: IngredientType[];
}

interface Props {
  ingredients: IngredientType[] | null;
}

const Ingredients: React.FC<Props> = ({ ingredients }) => {
  const ingredientsParsed: IngredientsT =
    ingredients?.reduce((r, a) => {
      r[a.type] = r[a.type] || [];
      r[a.type].push(a);
      return r;
    }, Object.create(null)) || {};

  return (
    <div className="flex flex-col overflow-auto shadow rounded-3xl px-8 m-8 mt-10 h-full">
      {ingredients ? (
        Object.keys(ingredientsParsed)?.map((category) => (
          <IngredientSection
            key={category}
            sectionName={category}
            ingredients={ingredientsParsed[category]}
            showUnloader={false}
          />
        ))
      ) : (
        <span>No ingredients found</span>
      )}
    </div>
  );
};

export default Ingredients;
