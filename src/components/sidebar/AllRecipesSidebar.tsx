import React, { useEffect } from 'react';
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

import { InstructionsContext } from '../../contexts/instructionsContext';
import { returnEditFormat } from './EditFunctions';

const IS_BREW_IN_PROGRESS = 'isBrewInProgress';
const SELECTED_RECIPE_FOR_BREW = 'selectedRecipeForBrew';
const CANT_EDIT = 'recipeCantBeEdited';
const DELETE = 'delete';

const PAUSE_STATE = 'pause';
const BREW_STATE_TRUE = 'true';
const BREW_STATE_FALSE = 'false';

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
  const templates = React.useContext(InstructionsContext)?.data;

  const [recipeInProgressId, setRecipeInProgressId] = React.useState(-1);

  const [isBrewingInProgress, setIsBrewingInProgress] =
    React.useState(BREW_STATE_FALSE);

  useEffect(() => {
    const isInProgress = window.localStorage.getItem(IS_BREW_IN_PROGRESS);
    const selectedRecipeId = window.localStorage.getItem(
      SELECTED_RECIPE_FOR_BREW
    );

    if (
      typeof isInProgress === 'string' &&
      (isInProgress === BREW_STATE_TRUE || isInProgress === PAUSE_STATE)
    ) {
      setIsBrewingInProgress(BREW_STATE_TRUE);
      if (typeof selectedRecipeId === 'string') {
        setRecipeInProgressId(parseInt(selectedRecipeId, 10));
      }
    }
  }, []);

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
    if (templates) {
      const newData = returnEditFormat(data, templates);
      if (newData) {
        history.push('/recipe/ingredients', newData);
      }
    }
  };

  const setPopupType = (step: string): void => {
    let popupText = 'Do you want to delete the recipe?';
    let popupDescripion = 'By clicking Confirm, the recipe will be deleted';

    if (step === CANT_EDIT) {
      popupText = 'Recipe can not be edited';
      popupDescripion =
        'This recipe is being prepared right now. Wait till process ends, or abort the brewing to edit this recipe';
    }
    if (step === DELETE && recipeInProgressId === recipeId) {
      popupText = 'Recipe can not be deleted';
      popupDescripion =
        'This recipe is being prepared right now. Wait till the process ends, or abort the brewing to delete this recipe';
    }
    popup?.open({
      title: popupText,
      description: popupDescripion,
      onConfirm: () => {
        if (recipeInProgressId !== recipeId) {
          deleteRecipeAPI(recipeId);
          window.location.reload();
        } else {
          console.log(step, ' can not be performed');
        }
      },
    });
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
            disabled={isBrewingInProgress !== BREW_STATE_FALSE}
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
            onClick={() => {
              if (
                isBrewingInProgress !== BREW_STATE_FALSE &&
                recipeInProgressId === recipeId
              ) {
                setPopupType(CANT_EDIT);
              } else {
                handleEditRecipe();
              }
            }}
          />

          <Button
            warn
            title="Delete"
            onClick={() => {
              setPopupType(DELETE);
            }}
            className="min-w-full"
          />
        </div>
      </div>
    </React.StrictMode>
  );
};

export default AllRecipesSidebar;
