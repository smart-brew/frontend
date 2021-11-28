import React from 'react';

import RecipeType from '../../types/RecipeData/RecipeType';
import Ingredients from './ingredients/Ingredients';

interface Props {
  recipe: RecipeType | null;
  size: 'w-2/3' | 'w-1/3' | 'w-full';
}

// TODO: tento recipe preview sa moze pouzit aj na OverviewPage, kde je vidno cely recept, a tento isty tam moze byt, len size bude ten mensi
const RecipePreview: React.FC<Props> = ({ recipe, size }) => {
  return (
    <div className={`recipe-choosing h-full ${size}`}>
      {recipe ? (
        <div className="flex flex-col h-4/6">
          <span className="text-center text-2xl font-bold">{recipe?.name}</span>

          <Ingredients ingredients={recipe.Ingredients} />

          {/* TODO: tuto pridat vsetko co sa bude tykat krokov receptu - Peto */}
        </div>
      ) : (
        <span>Please select a recipe</span>
      )}
    </div>
  );
};

export default RecipePreview;
