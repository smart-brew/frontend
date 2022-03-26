import React, { useCallback, useEffect, useState } from 'react';
import { usePopup } from '../../contexts/popupContext';

import { IngredientSection } from '../recipe/ingredients/IngredientSection';
import { StartBrewingPopup } from '../popup/start-brewing/StartBrewingPopup';
import RecipeType from '../../types/RecipeData/RecipeType';
import RecipePreview from '../recipe/RecipePreview';
import { getRecipe, getRecipes } from '../../api/recipe';
import Button from '../shared/Button';
import { IngredientsT } from '../../types/RecipeData/IngredientType';
import {
  abortBrewing as abortBrewingAPI,
  startBrewing as startBrewingAPI,
  pauseBrewing as pauseBrewingAPI,
} from '../../api/brew';
import { MENU_HEIGHT } from '../menu/MenuContainer';

const IS_BREW_IN_PROGRESS = 'isBrewInProgress';
const SELECTED_RECIPE_FOR_BREW = 'selectedRecipeForBrew';

interface Props {
  recipeId: number | null;
}

const RecipeProgress: React.FC<Props> = ({ recipeId }: Props) => {
  const popup = usePopup();

  const [showStartConfirmation, setShowStartConfirmation] = useState(false); // pupup to start a new brewing process
  const [isBrewingInProgress, setIsBrewingInProgress] = useState(false);

  const [currentRecipeId, setCurrentRecipeId] = useState(recipeId);

  const [selectedRecipe, setSelectedRecipe] = React.useState<RecipeType | null>(
    null
  );

  const getRecipeFromLocalStorage = useCallback((): number | null => {
    const selectedRecipeId = window.localStorage.getItem(
      SELECTED_RECIPE_FOR_BREW
    );

    if (typeof selectedRecipeId === 'string' && recipeId === null) {
      return parseInt(selectedRecipeId, 10);
    }

    return recipeId;
  }, [recipeId]);

  // if new selected recipe (by ID) -> fetch the entire recipe with details
  React.useEffect(() => {
    const f = async (): Promise<void> => {
      if (currentRecipeId === null && getRecipeFromLocalStorage() === null) {
        const recipes = await getRecipes();

        if (recipes.length > 0) {
          setCurrentRecipeId(recipes[0].id);
          setSelectedRecipe(await getRecipe(recipes[0].id));
        }
      } else if (currentRecipeId !== null) {
        setSelectedRecipe(await getRecipe(currentRecipeId));
      }
    };
    f();
  }, [currentRecipeId, getRecipeFromLocalStorage]);

  // on load -> get values from local storage
  useEffect(() => {
    const isInProgress = window.localStorage.getItem(IS_BREW_IN_PROGRESS);

    if (typeof isInProgress === 'string') {
      setIsBrewingInProgress(isInProgress === 'true');
    }

    setCurrentRecipeId(getRecipeFromLocalStorage());
  }, [getRecipeFromLocalStorage]);

  // on change save values to local storage
  useEffect(() => {
    window.localStorage.setItem(
      IS_BREW_IN_PROGRESS,
      String(isBrewingInProgress)
    );
  }, [isBrewingInProgress]);

  useEffect(() => {
    if (currentRecipeId) {
      window.localStorage.setItem(
        SELECTED_RECIPE_FOR_BREW,
        currentRecipeId.toString()
      );
    }
  }, [currentRecipeId]);

  async function startBrewing(): Promise<void> {
    if (!currentRecipeId) {
      return;
    }

    console.log(
      `spustenim funkcie startBrewing sa potvrdilo zacanie varenia ktore je v sidebaroverviewpage ulozene pod Id ${recipeId}`
    );
    setShowStartConfirmation(false);
    setIsBrewingInProgress(true);

    const res = await startBrewingAPI(currentRecipeId);

    // TODO handlovanie odpovede
    console.log(res);
  }

  const handleOnPause = useCallback((): void => {
    popup?.open({
      title: 'Do you want to pause the brewing process?',
      description:
        'By clicking Confirm, the brewery will keep its initial state till resume',
      onConfirm: () => {
        pauseBrewingAPI(0);
        setIsBrewingInProgress(false); // this will probably needed to be changed to that it shows pause
      },
    });
  }, [popup]);

  const handleOnAbort = useCallback((): void => {
    popup?.open({
      title: 'Do you want to abort the brewing process?',
      description:
        'By clicking Confirm, the brewing process will be aborted without the chance to resume',
      onConfirm: () => {
        abortBrewingAPI(0);
        setIsBrewingInProgress(false);
        setCurrentRecipeId(null);
        setSelectedRecipe(null);
      },
    });
  }, [popup]);

  function renderConfirmPopup(): React.ReactNode {
    const ingredients: IngredientsT = selectedRecipe?.Ingredients?.reduce(
      (arr, ingred) => {
        arr[ingred.type] = arr[ingred.type] || [];
        arr[ingred.type].push(ingred);
        return arr;
      },
      Object.create(null)
    );

    const ingredientsList = Object.keys(ingredients).map((category) => (
      <IngredientSection
        key={category}
        sectionName={category}
        ingredients={ingredients[category]}
        showUnloader
      />
    ));

    return (
      <StartBrewingPopup
        onClose={() => setShowStartConfirmation(false)}
        infoGroup={ingredientsList}
        onConfirm={() => startBrewing()}
      />
    );
  }

  const renderButtons = useCallback(() => {
    if (!isBrewingInProgress) {
      return (
        <Button
          title="Start brewing"
          onClick={() => setShowStartConfirmation(true)}
          className="w-full max-w-xs"
        />
      );
    }

    return (
      <>
        <Button
          warn
          title="Pause brewing"
          className="w-full max-w-xs"
          onClick={handleOnPause}
        />
        <Button
          danger
          title="Abort brewing"
          className="w-full max-w-xs"
          onClick={handleOnAbort}
        />
      </>
    );
  }, [handleOnAbort, handleOnPause, isBrewingInProgress]);

  return (
    <div
      className="context overflow-auto pb-2 w-full"
      style={{ maxHeight: `calc(100vh - ${MENU_HEIGHT}px)` }}
    >
      <div className="buttons items-center flex flex-col w-full">
        {renderButtons()}
      </div>

      {selectedRecipe && <RecipePreview recipe={selectedRecipe} />}

      {showStartConfirmation && renderConfirmPopup()}
    </div>
  );
};

export default RecipeProgress;
