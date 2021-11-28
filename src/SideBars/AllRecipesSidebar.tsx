import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import RecipeList from '../components/RecipeMaking/RecipeList';

import Button from '../components/shared/Button';
import { RecipeSimple } from '../types/RecipeData/RecipeType';

interface Props {
  setRecipeId: (recipeId: number) => void;
  recipeId: number;
  recipes: RecipeSimple[];
}

const AllRecipesSidebar: React.FC<Props> = ({
  setRecipeId,
  recipeId,
  recipes,
}) => {
  const history = useHistory();

  const loadRecipe = (): void => {
    history.push('/', {
      rId: recipeId,
    });
  };

  return (
    <div className="h-full pt-10 pr-10">
      <div className="context h-4/6">
        <div className="text-center text-2xl font-bold pb-8">Recipes</div>

        <RecipeList
          recipes={recipes}
          callback={setRecipeId}
          current={recipeId}
        />
      </div>
      {/* Buttons Edit, Start Brewing, Make a new recipe */}
      <div className="buttons text-center flex flex-col">
        <Button title="Edit" />
        <Link to="/recipe/ingredients">
          <Button title="Make a new recipe" />
        </Link>
        <Button title="Load recipe" onClick={() => loadRecipe()} />
      </div>
    </div>
  );
};

export default AllRecipesSidebar;
