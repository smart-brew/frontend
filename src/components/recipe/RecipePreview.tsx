import React from 'react';

import RecipeType from '../../types/RecipeData/RecipeType';
import Instructions from '../instruction/Instructions';
import Ingredients from './ingredients/Ingredients';
import { useDataContext } from '../../contexts/dataContext';

interface Props {
  recipe: RecipeType | null;
}

const RecipePreview: React.FC<Props> = ({ recipe }) => {
  const systemStatus = useDataContext();

  return recipe ? (
    <div className="flex flex-col">
      <span className="text-center text-2xl font-bold pt-8 pb-8">
        {recipe?.name}
      </span>

      {systemStatus?.brewStatus !== 'IN_PROGRESS' && (
        <Ingredients ingredients={recipe.Ingredients} />
      )}

      <Instructions instructions={recipe.Instructions} />
    </div>
  ) : (
    <span>Please select a recipe</span>
  );
};

export default RecipePreview;
