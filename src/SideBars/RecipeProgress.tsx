import React, { useState } from 'react';
import { IngredientSection } from '../components/RecipeMaking/ingredients/IngredientSection';
import { StartBrewingPopup } from '../components/RecipeMaking/ConfirmBrewingStart/StartBrewingPopup';
import RecipeOverview from '../components/overview/RecipeOverview';
import RecipeType from '../types/RecipeData/RecipeType';
import RecipePreview from '../components/RecipeMaking/RecipePreview';
import { getRecipe } from '../api/recipe';
import Button from '../components/shared/Button';
import { IngredientsT } from '../types/RecipeData/IngredientType';
import { startBrewing as startBrewingAPI } from '../api/brew';

interface Props {
  recipeId: number;
}

const RecipeProgress: React.FC<Props> = ({ recipeId }: Props) => {
  const [showStartConfirmation, setShowStartConfirmation] = useState(false); // pupup to start a new brewing process
  const [page, setPage] = useState('BeforeBrewingPage');

  const [selectedRecipe, setSelectedRecipe] = React.useState<RecipeType | null>(
    null
  );

  // if new selected recipe (by ID) -> fetch the entire recipe with details
  React.useEffect(() => {
    const f = async (): Promise<void> => {
      if (recipeId) setSelectedRecipe(await getRecipe(recipeId));
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
            <div className="buttons text-center flex flex-col">
              <Button
                title="Start brewing"
                onClick={() => setShowStartConfirmation(true)}
              />
              <Button
                title="Stop process"
                onClick={() => {
                  setPage('MainPage');
                  console.log('TODO: STOP BREWING');
                }}
              />
            </div>
            <RecipePreview recipe={selectedRecipe} />
          </>
        );
      case 'WhileBrewingPage':
        return <RecipeOverview />;
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
