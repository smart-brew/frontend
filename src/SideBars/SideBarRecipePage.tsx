import React from 'react';
import { useHistory } from 'react-router-dom';
import RecipeList from '../components/MainPage/RecipeList/RecipeList';
import Button from '../components/shared/Button';
import { recipeList } from '../data/recipe';

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
}: Props) => {
  const history = useHistory();

  const startBrewing = (): void => {
    history.push('/', {
      rId: recipeId,
      setShowPage: 'BeforeBrewingPage',
    });
  };

  function renderSwitch(page: string): JSX.Element {
    switch (page) {
      default:
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

      case 'FormPage':
        return (
          <div className="h-full">
            <div className="context h-4/6" />
            <div className="buttons text-center flex flex-col">
              <Button
                title="Cancel"
                onClick={() => setShowPage('PickingPage')}
              />
              <Button title="Next step" onClick={() => saveForm()} />
            </div>
          </div>
        );
    }
  }

  return <div className="pt-10 pr-10 h-full">{renderSwitch(showPage)}</div>;
};

export default SideBarRecipePage;
