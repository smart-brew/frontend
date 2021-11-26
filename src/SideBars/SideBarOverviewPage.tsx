import React, { useState } from 'react';
import { IngredientSection } from '../components/RecipeMaking/ConfirmBrewingStart/IngredientSection';
import { StartBrewingPopup } from '../components/RecipeMaking/ConfirmBrewingStart/StartBrewingPopup';
import RecipeOverview from '../components/RecipeOverview/RecipeOverview';
import { recipeList } from '../data/recipe';
import RecipeType from '../types/RecipeData/RecipeType';

interface Props {
  showPage: string;
  Id: number;
}

const SideBarOverviewPage: React.FC<Props> = ({ showPage, Id }: Props) => {
  // eslint-disable-next-line
  const [showPopup, setShowPopup] = useState(false); // pupup to start a new brewing process
  const [page, setPage] = useState(showPage);

  // Ak sa da infoGroup a infoGroupPopup nejako posielat tak toto je duplicitny kod************************************************************

  function findItem(
    arrRecipes: RecipeType[],
    idToSearch: number
  ): RecipeType | undefined {
    return arrRecipes.find((item) => {
      return item.id === idToSearch;
    });
  }

  const recipeIngredients = findItem(recipeList.recipes, Id)?.Ingredients;

  const recipeName = findItem(recipeList.recipes, Id)?.name;

  const result = recipeIngredients?.reduce((r, a) => {
    r[a.type] = r[a.type] || [];
    r[a.type].push(a);
    return r;
  }, Object.create(null));
  console.log(result);

  const infoGroup = Object.keys(result).map((typ) => {
    return (
      <IngredientSection
        sectionName={typ}
        ingredients={result[typ]}
        showUnloader={false}
      />
    );
  });

  const infoGroupPopup = Object.keys(result).map((typ) => {
    return (
      <IngredientSection
        sectionName={typ}
        ingredients={result[typ]}
        showUnloader
      />
    );
  });

  // ******************************************************************************************************************************************

  function startBrewing(): void {
    console.log(
      'spustenim funkcie startBrewing sa potvrdilo zacanie varenia ktore je v sidebaroverviewpage ulozene pod Id '
    );
    setShowPopup(false);
    setPage('WhileBrewingPage');
  }

  function setPageFunction(newPage: string): void {
    setPage(newPage);
    console.log(showPage);
  }
  // eslint-disable-next-line
  function renderSwitch(page: string) {
    switch (page) {
      default:
      case 'MainPage':
        return <div>This is the welcome page</div>;

      case 'BeforeBrewingPage':
        return (
          <div className="h-full">
            <div className="context h-4/6 ">
              <div className="flex flex-col h-3/6 overflow-auto border-2 border-gray-300 rounded-3xl px-4 mt-4 ">
                <header className="center py-8 font-bold">
                  <h3>Ingredients</h3>
                </header>

                {infoGroup}
              </div>
              <div className="flex flex-col overflow-auto  h-2/6 border-2 border-gray-300 rounded-3xl px-4 mt-4">
                <div>
                  tu bude ten list instrukcii nezacateho procesu,pridava sa do
                  komponentu SideBarOverviewPage
                </div>
              </div>
            </div>
            <div className="buttons  text-center flex flex-col">
              <button
                className="bg-green-400 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full m-auto  w-52 mb-2"
                type="button"
                onClick={() => setShowPopup(true)}
              >
                Start brewing
              </button>
              <button
                className="bg-green-400 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full m-auto w-52 mb-2"
                type="button"
                onClick={() => setPageFunction('MainPage')}
              >
                Stop process
              </button>
            </div>
          </div>
        );
      case 'WhileBrewingPage':
        return <RecipeOverview />;
    }
  }

  return (
    <div className="h-full">
      <div className=" mt-10  h-full  ">{renderSwitch(page)}</div>
      {showPopup && (
        <StartBrewingPopup
          onClose={() => setShowPopup(false)}
          infoGroup={infoGroupPopup}
          selectedRecipeId={Id}
          onSelect={() => startBrewing()}
        />
      )}
    </div>
  );
};

export default SideBarOverviewPage;
