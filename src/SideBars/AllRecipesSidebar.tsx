import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { loadRecipe as loadRecipeAPI } from '../api/recipe';
import RecipeList from '../components/RecipeMaking/RecipeList';

import Button from '../components/shared/Button';
import { OverviewPageState } from '../Pages/OverviewPage';
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

  const loadRecipe = async (): Promise<void> => {
    loadRecipeAPI(recipeId);
    // TODO pridat kontrolu ci OK
    const data: OverviewPageState = {
      recipeId,
    };
    history.push('/', data);
  };

  return (
    <React.StrictMode>
      <div className="context h-2/3">
        <div className="text-center text-2xl font-bold p-8">Recipes</div>

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
    </React.StrictMode>
  );
};

export default AllRecipesSidebar;
