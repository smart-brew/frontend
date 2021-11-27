import React from 'react';
import { RecipeSimple } from '../types/RecipeData/RecipeType';

import AllRecipesSidebar from './AllRecipesSidebar';
import CreateIngredientsSidebar from './CreateIngredientsSidebar';

interface Props {
  showPage: string;
  setShowPage: (pageName: string) => void;
  setRecipeId: (recipeId: number) => void;
  recipeId: number;
  saveForm: () => void;
  recipes: RecipeSimple[];
}

const SideBarRecipePage: React.FC<Props> = ({
  showPage,
  setShowPage,
  setRecipeId,
  recipeId,
  saveForm,
  recipes,
}) => {
  return (
    <div className="pt-10 pr-10 h-full">
      {showPage === 'FormPage' && (
        <CreateIngredientsSidebar
          saveForm={saveForm}
          setShowPage={setShowPage}
        />
      )}

      {showPage !== 'FormPage' && (
        <AllRecipesSidebar
          recipes={recipes}
          recipeId={recipeId}
          setRecipeId={setRecipeId}
          setShowPage={setShowPage}
        />
      )}
    </div>
  );
};

export default SideBarRecipePage;
