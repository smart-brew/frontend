import React from 'react';

import AllRecipesSidebar from './AllRecipesSidebar';
import CreateIngredientsSidebar from './CreateIngredientsSidebar';

interface Props {
  showPage: string;
  setShowPage: (pageName: string) => void;
  setRecipeId: (recipeId: number) => void;
  recipeId: number;
  saveForm: () => void;
}

const SideBarRecipePage: React.FC<Props> = ({
  showPage,
  setShowPage,
  setRecipeId,
  recipeId,
  saveForm,
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
          recipeId={recipeId}
          setRecipeId={setRecipeId}
          setShowPage={setShowPage}
        />
      )}
    </div>
  );
};

export default SideBarRecipePage;
