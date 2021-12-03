import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { loadRecipe as loadRecipeAPI } from '../api/recipe';
import RecipeList from '../components/RecipeMaking/RecipeList';

import Button from '../components/shared/Button';
import { OverviewPageState } from '../Pages/OverviewPage';
import { RecipeDataProps } from '../Pages/RecipeInstructionsPage';
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

  const makeRecipe = async (): Promise<void> => {
    const data: RecipeDataProps = {
      sendIngredients: [
        {
          amount: 0,
          units: 'KG',
          name: '',
          id: 0,
          type: 'Fermentables',
          recipeId: 0,
        },
      ],
      sendRecipeName: '',
      sendBlocks: null,
    };
    history.push('/recipe/ingredients', data);
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
      <div className="buttons text-center flex flex-col mx-10">
        <Button title="Edit" />
        <Button title="Make a new recipe" onClick={() => makeRecipe()} />
        <Button title="Load recipe" onClick={() => loadRecipe()} />
      </div>
    </React.StrictMode>
  );
};

export default AllRecipesSidebar;
