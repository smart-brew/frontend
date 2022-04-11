import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  loadRecipe as loadRecipeAPI,
  deleteRecipe as deleteRecipeAPI,
  getRecipe,
} from '../../api/recipe';
import RecipeList from '../recipe/recipes-list/RecipeList';
import BrewingStateConstants from '../../helpers/BrewingStateConstants';
import Button from '../shared/Button';
import { OverviewPageState } from '../../pages/OverviewPage';
import { RecipeDataProps } from '../../pages/RecipeInstructionsPage';
import { RecipeSimple } from '../../types/RecipeData/RecipeType';

import { usePopup } from '../../contexts/popupContext';
import { MENU_HEIGHT } from '../menu/MenuContainer';

import { useInstructionsContext } from '../../contexts/instructionsContext';
import { returnEditFormat } from './EditFunctions';

const IS_BREW_IN_PROGRESS = 'isBrewInProgress';
const SELECTED_RECIPE_FOR_BREW = 'selectedRecipeForBrew';
const CANT_EDIT = 'recipeCantBeEdited';
const DELETE = 'delete';

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

  const [recipeInProgressId, setRecipeInProgressId] = React.useState(-1);

  const [brewingState, setBrewingState] = React.useState(
    BrewingStateConstants.BREW_STATE_INACTIVE
  );

  useEffect(() => {
    const isInProgress = window.localStorage.getItem(IS_BREW_IN_PROGRESS);
    const selectedRecipeId = window.localStorage.getItem(
      SELECTED_RECIPE_FOR_BREW
    );

    if (
      typeof isInProgress === 'string' &&
      (isInProgress === BrewingStateConstants.BREW_STATE_IN_PROGRESS ||
        isInProgress === BrewingStateConstants.BREW_STATE_PAUSE)
    ) {
      setBrewingState(BrewingStateConstants.BREW_STATE_IN_PROGRESS);
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
    const data = await getRecipe(recipeId);
    if (templates && data) {
      const newData = returnEditFormat(data, templates);
      if (newData) {
        history.push('/recipe/ingredients', newData);
      }
    }
  };

  const openPopup = (type: typeof CANT_EDIT | typeof DELETE): void => {
    let popupText = 'Are you sure you want to delete this recipe?';
    let popupDescripion = 'By clicking Delete, the recipe will be deleted';
    let popupType: 'call-to-action' | 'info' = 'call-to-action';

    if (type === CANT_EDIT) {
      popupType = 'info';
      popupText = 'Selected recipe can not be edited at the moment';
      popupDescripion =
        'This recipe is being prepared right now. Wait until process ends, or abort the brewing to edit this recipe';
    } else if (type === DELETE && recipeInProgressId === recipeId) {
      popupType = 'info';
      popupText = 'Selected recipe can not be deleted at the moment';
      popupDescripion =
        'This recipe is being prepared right now. Wait until the process ends, or abort the brewing to delete this recipe';
    }

    popup?.open({
      title: popupText,
      description: popupDescripion,
      buttonText: 'Delete',
      buttonType: 'danger',
      popupType,
      onConfirm: () => {
        if (recipeInProgressId !== recipeId) {
          deleteRecipeAPI(recipeId);
          window.location.reload();
        } else {
          console.log(type, ' can not be performed');
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
            disabled={
              brewingState !== BrewingStateConstants.BREW_STATE_INACTIVE
            }
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
                brewingState !== BrewingStateConstants.BREW_STATE_INACTIVE &&
                recipeInProgressId === recipeId
              ) {
                openPopup(CANT_EDIT);
              } else {
                handleEditRecipe();
              }
            }}
          />

          <Button
            warn
            title="Delete"
            onClick={() => {
              openPopup(DELETE);
            }}
            className="min-w-full"
          />
        </div>
      </div>
    </React.StrictMode>
  );
};

export default AllRecipesSidebar;
