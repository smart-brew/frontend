import React, { useState } from 'react';

import RecipeType, { RecipeSimple } from '../types/RecipeData/RecipeType';
import RecipePreview from '../components/RecipeMaking/RecipePreview';
import { getRecipe, getRecipes } from '../api/recipe';
import AllRecipesSidebar from '../SideBars/AllRecipesSidebar';
import SplitPage from '../components/shared/SplitPage';

const RecipePage: React.FC = () => {
  const [recipeId, setRecipeId] = useState<number>(0);

  // all recipes known to system
  const [recipes, setRecipes] = React.useState<RecipeSimple[]>([]);

  // currently selected recipe
  const [selectedRecipe, setSelectedRecipe] = React.useState<RecipeType | null>(
    null
  );

  // on load, fetch all recipes
  React.useEffect(() => {
    const f = async (): Promise<void> => {
      setRecipes(await getRecipes());
    };
    f();
  }, []);

  // if new recipes -> select the first one (usually executed on page load)
  React.useEffect(() => {
    setRecipeId(recipes[0]?.id || 0);
  }, [recipes]);

  // if new selected recipe (by ID) -> fetch the entire recipe with details
  React.useEffect(() => {
    const f = async (): Promise<void> => {
      if (recipeId) setSelectedRecipe(await getRecipe(recipeId));
    };
    f();
  }, [recipeId]);

  return (
    <SplitPage>
      <RecipePreview recipe={selectedRecipe} />

      <AllRecipesSidebar
        recipes={recipes}
        recipeId={recipeId}
        setRecipeId={setRecipeId}
      />
    </SplitPage>
  );
};
export default RecipePage;
