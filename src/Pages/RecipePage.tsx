/* eslint-disable camelcase */

import React, { useState } from 'react';
import RecipeType, { RecipeSimple } from '../types/RecipeData/RecipeType';
import IngredietsForm from '../components/RecipeMaking/form/IngredientsForm';
import IngredientType from '../types/RecipeData/IngredientType';
import SideBar from '../SideBars/SideBarRecipePage';
import RecipePreview from '../components/RecipeMaking/RecipePreview';
import { getRecipe, getRecipes } from '../api/dataEndpoint';

const RecipePage: React.FC = () => {
  const [showPage, setShowPage] = useState('PickingPage');
  const [recipeId, setRecipeId] = useState<number>(1);
  const [recipeNameForm, setRecipeNameForm] = useState('');
  const [inputFields, setInputFields] = useState([
    {
      amount: 0,
      units: 'KG',
      name: '',
      id: 0,
      type: 'Fermentables',
      recipe_id: 0,
    },
  ]);

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

  // *********************************************************************

  // toto vyuzivat -------------------------

  // const recipeIngredients = recept.Ingredients;
  // const recipeName = recept.name;

  // -------------------------------------------------

  // len skusobne, treba pozmenit ked budu aj instrukcie
  function saveForm(): void {
    if (!inputFields.find((field) => field.name === '')) {
      console.log('not all files are full'); // bud nieco vyskakokvacie alebo riesit uplne inak
    } else {
      setShowPage('InstructionsPage'); // tu sa nastavi cesta ku stranke s vyberom instrukcii
    }
  }

  function renderSwitch(page: string): JSX.Element {
    switch (page) {
      default:
        return <RecipePreview recipe={selectedRecipe} size="w-2/3" />;
      case 'FormPage':
        return (
          <div className="ingredients-form w-2/3">
            <IngredietsForm
              showPage={showPage}
              inputFields={inputFields}
              setInputFields={(newIngredients: IngredientType[]) =>
                setInputFields(newIngredients)
              }
              recipeNameForm={recipeNameForm}
              setRecipeNameForm={(name: string) => setRecipeNameForm(name)}
            />
          </div>
        );
    }
  }

  return (
    <>
      <div className="flex flex-row h-full">
        {renderSwitch(showPage)}
        <div className="sidebar h-full w-1/3 border-l border-gray-300">
          <SideBar
            showPage={showPage}
            setShowPage={(pageName: string) => setShowPage(pageName)}
            setRecipeId={(rId: number) => setRecipeId(rId)}
            recipeId={recipeId}
            saveForm={() => saveForm()}
          />
        </div>
      </div>
    </>
  );
};
export default RecipePage;
