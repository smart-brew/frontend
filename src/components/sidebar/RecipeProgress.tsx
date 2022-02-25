import React, { useState } from 'react';
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

interface Props {
  recipeId: number;
}

const RecipeProgress: React.FC<Props> = ({ recipeId }: Props) => {
  const popup = usePopup();

  const [showStartConfirmation, setShowStartConfirmation] = useState(false); // pupup to start a new brewing process
  const [page, setPage] = useState('MainPage');

  const [selectedRecipe, setSelectedRecipe] = React.useState<RecipeType | null>(
    null
  );

  // if new selected recipe (by ID) -> fetch the entire recipe with details
  React.useEffect(() => {
    const f = async (): Promise<void> => {
      if (recipeId) {
        setSelectedRecipe(await getRecipe(recipeId));
        setPage('BeforeBrewingPage');
      }
    };
    f();
  }, [recipeId]);

  async function startBrewing(): Promise<void> {
    console.log(
      `spustenim funkcie startBrewing sa potvrdilo zacanie varenia ktore je v sidebaroverviewpage ulozene pod Id ${recipeId}`
    );
    setShowStartConfirmation(false);
    setPage('WhileBrewingPage');

    const res = await startBrewingAPI(recipeId);
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
        return <div>This is the welcome page</div>;

      case 'BeforeBrewingPage':
        return (
          <>
            <div className="buttons text-center flex flex-col mx-10">
              <Button
                title="Start brewing"
                onClick={() => setShowStartConfirmation(true)}
              />
              {/* <Button
                cancel
                title="Abort brewing"
                onClick={() => {
                  console.log('TODO: ABORT BREWING');
                  abortBrewingAPI(0);
                  setPage('MainPage');
                }}
              /> */}
            </div>

            <RecipePreview recipe={selectedRecipe} />
          </>
        );
      case 'WhileBrewingPage':
        return (
          <div>
            <div className="buttons text-center flex flex-col mx-10">
              <Button
                warn
                title="Pause brewing"
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
                onClick={() => {
                  console.log('TODO: ABORT BREWING');
                  popup?.open({
                    title: 'Do you want to abort the brewing process?',
                    description:
                      'By clicking Confirm, the brewing process will be aborted without the chance to resume',
                    onConfirm: () => {
                      abortBrewingAPI(0);
                      setPage('MainPage');
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
