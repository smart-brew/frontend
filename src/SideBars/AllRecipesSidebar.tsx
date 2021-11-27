import React from 'react';
import { useHistory } from 'react-router-dom';
import RecipeList from '../components/MainPage/RecipeList/RecipeList';

import Button from '../components/shared/Button';
import { recipeList } from '../data/recipe';

interface Props {
  setShowPage: (pageName: string) => void;
  setRecipeId: (recipeId: number) => void;
  recipeId: number;
}

const AllRecipesSidebar: React.FC<Props> = ({
  setShowPage,
  setRecipeId,
  recipeId,
}) => {
  const history = useHistory();

  const startBrewing = (): void => {
    history.push('/', {
      rId: recipeId,
      setShowPage: 'BeforeBrewingPage',
    });
  };

  return (
    <div className="h-full">
      <div className="context h-4/6">
        <div className="text-center text-2xl font-bold pb-8">Recipes</div>

        <RecipeList
          recipes={recipeList.recipes}
          callback={setRecipeId}
          current={recipeId}
        />
      </div>
      {/* Buttons Edit, Start Brewing, Make a new recipe */}
      <div className="buttons text-center flex flex-col">
        <Button title="Edit" />
        <Button
          title="Make a new recipe"
          onClick={() => setShowPage('FormPage')}
        />
        <Button title="Start brewing" onClick={() => startBrewing()} />
      </div>
    </div>
  );
};

export default AllRecipesSidebar;
