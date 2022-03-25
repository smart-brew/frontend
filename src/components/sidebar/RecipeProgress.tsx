import React, { useEffect, useState } from 'react';
import { usePopup } from '../../contexts/popupContext';

import { IngredientSection } from '../recipe/ingredients/IngredientSection';
import { StartBrewingPopup } from '../popup/start-brewing/StartBrewingPopup';
import RecipeType from '../../types/RecipeData/RecipeType';
import RecipePreview from '../recipe/RecipePreview';
import { getRecipe } from '../../api/recipe';
import Button from '../shared/Button';
import { IngredientsT } from '../../types/RecipeData/IngredientType';
import {
  abortBrewing as abortBrewingAPI,
  startBrewing as startBrewingAPI,
  pauseBrewing as pauseBrewingAPI,
} from '../../api/brew';
import { MENU_HEIGHT } from '../menu/MenuContainer';

interface Props {
  recipeId: number;
}

const RecipeProgress: React.FC<Props> = ({ recipeId }: Props) => {
  const popup = usePopup();

  const [showStartConfirmation, setShowStartConfirmation] = useState(false); // pupup to start a new brewing process
  const [page, setPage] = useState('MainPage');

  const [currentRecipeId, setCurrentRecipeId] = useState('');

  const [selectedRecipe, setSelectedRecipe] = React.useState<RecipeType | null>(
    null
  );

  // if new selected recipe (by ID) -> fetch the entire recipe with details
  React.useEffect(() => {
    const f = async (): Promise<void> => {
      if (recipeId && page === 'MainPage') {
        setSelectedRecipe(await getRecipe(recipeId));
        setCurrentRecipeId(recipeId.toString());
        setPage('BeforeBrewingPage');
      }
      if (currentRecipeId !== '') {
        setSelectedRecipe(await getRecipe(parseInt(currentRecipeId, 10)));
      }
    };
    f();
  }, [currentRecipeId, page, recipeId]);

  useEffect(() => {
    const getPage = window.localStorage.getItem('page');
    if (typeof getPage === 'string') {
      setPage(getPage);
    }
    const getId = window.localStorage.getItem('currentRecipeId');
    if (typeof getId === 'string') {
      setCurrentRecipeId(getId);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('page', page);
    window.localStorage.setItem('currentRecipeId', currentRecipeId);
  }, [page, currentRecipeId]);

  async function startBrewing(): Promise<void> {
    console.log(
      `spustenim funkcie startBrewing sa potvrdilo zacanie varenia ktore je v sidebaroverviewpage ulozene pod Id ${recipeId}`
    );
    setShowStartConfirmation(false);
    setPage('WhileBrewingPage');

    const res = await startBrewingAPI(parseInt(currentRecipeId, 10));
    setCurrentRecipeId(currentRecipeId);
    // TODO handlovanie odpovede
    console.log(res);
  }

  function showConfrirmPopup(): React.ReactNode {
    const ingredients: IngredientsT = selectedRecipe?.Ingredients?.reduce(
      (r, a) => {
        r[a.type] = r[a.type] || [];
        r[a.type].push(a);
        return r;
      },
      Object.create(null)
    );

    const infoGroupPopup = Object.keys(ingredients).map((category) => {
      return (
        <IngredientSection
          key={category}
          sectionName={category}
          ingredients={ingredients[category]}
          showUnloader
        />
      );
    });

    return (
      <StartBrewingPopup
        onClose={() => setShowStartConfirmation(false)}
        infoGroup={infoGroupPopup}
        onConfirm={() => startBrewing()}
      />
    );
  }

  function renderSwitch(pageName: string): JSX.Element {
    switch (pageName) {
      default:
      case 'MainPage':
        return <div>Select recipe in order to start brewing</div>;

      case 'BeforeBrewingPage':
        return (
          <div
            className="context overflow-auto pb-2 w-full"
            style={{ maxHeight: `calc(100vh - ${MENU_HEIGHT}px)` }}
          >
            <div className="buttons items-center flex flex-col w-full">
              <Button
                title="Start brewing"
                onClick={() => setShowStartConfirmation(true)}
                className="w-full max-w-xs"
              />
            </div>

            <RecipePreview recipe={selectedRecipe} />
          </div>
        );
      case 'WhileBrewingPage':
        return (
          <div
            className="context overflow-auto pb-2"
            style={{ maxHeight: `calc(100vh - ${MENU_HEIGHT}px)` }}
          >
            <div className="buttons items-center flex flex-col w-full">
              <Button
                warn
                title="Pause brewing"
                className="w-full max-w-xs"
                onClick={() => {
                  popup?.open({
                    title: 'Do you want to pause the brewing process?',
                    description:
                      'By clicking Confirm, the brewery will keep its initial state till resume',
                    onConfirm: () => {
                      pauseBrewingAPI(0);
                      setPage('MainPage'); // this will probably needed to be changed to that it shows pause
                    },
                  });
                }}
              />
              <Button
                danger
                title="Abort brewing"
                className="w-full max-w-xs"
                onClick={() => {
                  console.log('TODO: ABORT BREWING');
                  popup?.open({
                    title: 'Do you want to abort the brewing process?',
                    description:
                      'By clicking Confirm, the brewing process will be aborted without the chance to resume',
                    onConfirm: () => {
                      abortBrewingAPI(0);
                      setPage('MainPage');
                      setCurrentRecipeId('');
                      setSelectedRecipe(null);
                    },
                  });
                }}
              />
            </div>

            <RecipePreview recipe={selectedRecipe} />
          </div>
        );
    }
  }

  return (
    <>
      {renderSwitch(page)}
      {showStartConfirmation && showConfrirmPopup()}
    </>
  );
};

export default RecipeProgress;
