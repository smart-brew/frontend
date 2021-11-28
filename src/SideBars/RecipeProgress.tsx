import React, { useState } from 'react';
import { IngredientSection } from '../components/RecipeMaking/ingredients/IngredientSection';
import { StartBrewingPopup } from '../components/RecipeMaking/ConfirmBrewingStart/StartBrewingPopup';
import RecipeOverview from '../components/overview/RecipeOverview';
import RecipeType from '../types/RecipeData/RecipeType';
import RecipePreview from '../components/RecipeMaking/RecipePreview';
import { getRecipe } from '../api/dataEndpoint';
import Button from '../components/shared/Button';
import { IngredientsT } from '../types/RecipeData/IngredientType';

interface Props {
  showPage: string;
  recipeId: number;
}

const RecipeProgress: React.FC<Props> = ({ showPage, recipeId }: Props) => {
  const [showStartConfirmation, setShowStartConfirmation] = useState(false); // pupup to start a new brewing process
  const [page, setPage] = useState(showPage);

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

  function startBrewing(): void {
    console.log(
      `spustenim funkcie startBrewing sa potvrdilo zacanie varenia ktore je v sidebaroverviewpage ulozene pod Id ${recipeId}`
    );
    setShowStartConfirmation(false);
    setPage('WhileBrewingPage');
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

  function setPageFunction(newPage: string): void {
    setPage(newPage);
    console.log(showPage);
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
                onClick={() => setPageFunction('MainPage')}
              />
            </div>
            <RecipePreview recipe={selectedRecipe} size="w-full" />
          </>
        );
      case 'WhileBrewingPage':
        return <RecipeOverview />;
    }
  }

  return (
    <>
      <div className="pt-10 h-full">{renderSwitch(page)}</div>
      {showStartConfirmation && showConfrirmPopup()}
    </>
  );
};

export default RecipeProgress;
