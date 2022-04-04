import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  loadRecipe as loadRecipeAPI,
  deleteRecipe as deleteRecipeAPI,
  getRecipe,
} from '../../api/recipe';
import RecipeList from '../recipe/recipes-list/RecipeList';

import Button from '../shared/Button';
import { OverviewPageState } from '../../pages/OverviewPage';
import { RecipeDataProps } from '../../pages/RecipeInstructionsPage';
import RecipeType, { RecipeSimple } from '../../types/RecipeData/RecipeType';

import { usePopup } from '../../contexts/popupContext';
import { MENU_HEIGHT } from '../menu/MenuContainer';

import { useInstructionsContext } from '../../contexts/instructionsContext';
import { returnEditFormat } from './EditFunctions';

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
  const { data: templates } = useInstructionsContext();

  const handleLoadRecipe = async (): Promise<void> => {
    loadRecipeAPI(recipeId);
    // TODO pridat kontrolu ci OK
    const data: OverviewPageState = {
      recipeId,
    };
    history.push('/', data);
  };

  const handleCreateNewRecipe = async (): Promise<void> => {
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
      sendRecipeId: -1,
      sendLockedState: false,
    };
    history.push('/recipe/ingredients', data);
  };

  const handleEditRecipe = async (): Promise<void> => {
    const data: RecipeType = await getRecipe(recipeId);
    const newData = returnEditFormat(data, templates);
    if (newData) {
      history.push('/recipe/ingredients', newData);
    }
  };

  return (
    <React.StrictMode>
      <div
        className="context h-2/3 overflow-auto pb-2"
        style={{ maxHeight: `calc(66vh - ${MENU_HEIGHT}px)` }}
      >
        <div className="text-center text-2xl font-bold p-8">Recipes</div>

        <RecipeList
          recipes={recipes}
          callback={setRecipeId}
          current={recipeId}
        />
      </div>
      {/* bottom shadow for list */}

      {/* Buttons Edit, Start Brewing, Make a new recipe, Delete a recipe */}
      <div className="flex w-full justify-center">
        <div className="buttons text-center flex flex-col w-full max-w-xs">
          <Button
            title="Load recipe"
            onClick={() => handleLoadRecipe()}
            className="min-w-full"
          />

          <Button
            secondary
            title="Create new"
            onClick={() => handleCreateNewRecipe()}
            className="min-w-full"
          />

          <Button
            secondary
            title="Edit"
            className="min-w-full"
            onClick={() => handleEditRecipe()}
          />

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
            className="min-w-full"
          />
        </div>
      </div>
    </React.StrictMode>
  );
};

export default AllRecipesSidebar;
