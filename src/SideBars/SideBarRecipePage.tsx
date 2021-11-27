import React from 'react';
import { useHistory } from 'react-router-dom';
import RecipeList from '../components/MainPage/RecipeList/RecipeList';
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

  // eslint-disable-next-line
  const goToMainPage = () => {
    history.push('/', {
      rId: recipeId,
      setShowPage: 'BeforeBrewingPage',
    });
  };

  // eslint-disable-next-line
  function renderSwitch(page: string) {
    switch (page) {
      default:
        return (
          <div className="h-full">
            <div className="context h-4/6 ">
              <div className=" text-center text-2xl font-bold pb-8">
                Recipes
              </div>
              <div className="min-h-full">
                <RecipeList
                  recipes={recipeList.recipes}
                  callback={setRecipeId}
                  current={recipeId}
                />
              </div>
            </div>
            {/* Buttons Edit, Start Brewing, Make a new recipe */}
            <div className="buttons  text-center flex flex-col">
              <button
                className="bg-green-400 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full m-auto w-52 mb-2"
                type="button"
              >
                Edit
              </button>
              <button
                className="bg-green-400 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full m-auto w-52 mb-2"
                type="button"
                onClick={() => setShowPage('FormPage')}
              >
                Make a new recipe
              </button>
              <button
                className="bg-green-400 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full m-auto w-52 mb-2"
                type="button"
                onClick={() => goToMainPage()}
              >
                Start brewing
              </button>
            </div>
          </div>
        );

      case 'FormPage':
        return (
          <div className="h-full">
            <div className="context h-4/6" />
            <div className="buttons">
              <button
                className="bg-green-400 hover:bg-green-600 text-white font-bold py-2 px-4 w-52 rounded-full "
                type="button"
                onClick={() => setShowPage('PickingPage')}
              >
                Cancel
              </button>
              <button
                className="bg-green-400 hover:bg-green-600 text-white font-bold py-2 px-4 w-52 rounded-full "
                type="button"
                onClick={() => saveForm()}
              >
                Next step
              </button>
            </div>
          </div>
        );
    }
  }

  return <div className="pt-10 pr-10 h-full">{renderSwitch(showPage)}</div>;
};

export default SideBarRecipePage;
