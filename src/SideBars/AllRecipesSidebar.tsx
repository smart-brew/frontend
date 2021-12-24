import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  loadRecipe as loadRecipeAPI,
  deleteRecipe as deleteRecipeAPI,
} from '../api/recipe';
import RecipeList from '../components/RecipeMaking/RecipeList';

import Button from '../components/shared/Button';
import { OverviewPageState } from '../Pages/OverviewPage';
import { RecipeDataProps } from '../Pages/RecipeInstructionsPage';
import { RecipeSimple } from '../types/RecipeData/RecipeType';

import { usePopup } from '../contexts/popupContext';

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
  const popup = usePopup();

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
      <div className="context h-2/3 overflow-auto">
        <div className="text-center text-2xl font-bold p-8">Recipes</div>

        <RecipeList
          recipes={recipes}
          callback={setRecipeId}
          current={recipeId}
        />
      </div>
      {/* bottom shadow for list */}
      <div
        style={{
          left: 0,
          right: 0,
          bottom: '30px',
          position: 'relative',
          height: '30px',
          background:
            'linear-gradient(180deg, rgba(139,167,32,0) 0%, #ffffff 100%)',
        }}
      />

      {/* Buttons Edit, Start Brewing, Make a new recipe, Delete a recipe */}
      <div
        className="buttons text-center flex flex-col px-10 w-full"
        style={{ transform: 'translateY(-30px)' }}
      >
        <Button title="Load recipe" onClick={() => loadRecipe()} />
        <Button secondary title="Create new" onClick={() => makeRecipe()} />
        <Button secondary title="Edit" />
        <Button
          warn
          title="Delete"
          onClick={() => {
            popup?.open({
              title: 'Do you want to delete the recipe?',
              description: 'By clicking Confirm, the recipe will be deleted',
              onConfirm: () => {
                deleteRecipeAPI(recipeId);
                window.location.reload();
              },
            });
          }}
        />
      </div>
    </React.StrictMode>
  );
};

export default AllRecipesSidebar;
