import React from 'react';
import IngredientType, {
  IngredientsT,
} from '../../../types/RecipeData/IngredientType';
import { IngredientSection } from './IngredientSection';

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
    <div className="flex text-lg flex-col overflow-auto shadow rounded-3xl px-12 py-5 m-8 mx-16 divide-y section">
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
