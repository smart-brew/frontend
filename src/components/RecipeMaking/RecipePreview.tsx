import React from 'react';

import RecipeType from '../../types/RecipeData/RecipeType';
import Ingredients from './ingredients/Ingredients';

interface Props {
  recipe: RecipeType | null;
}

// TODO: tento recipe preview sa moze pouzit aj na OverviewPage, kde je vidno cely recept, a tento isty tam moze byt, len size bude ten mensi
const RecipePreview: React.FC<Props> = ({ recipe }) => {
  return recipe ? (
    <div className="flex flex-col">
      <span className="text-center text-2xl font-bold pt-8">
        {recipe?.name}
      </span>

      <Ingredients ingredients={recipe.Ingredients} />

      {/* TODO: tuto pridat vsetko co sa bude tykat krokov receptu - Peto */}
    </div>
  ) : (
    <span>Please select a recipe</span>
  );
};

export default RecipePreview;
