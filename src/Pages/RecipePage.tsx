/* eslint-disable camelcase */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { recipeList } from '../data/recipe';
import RecipeType from '../types/RecipeData/RecipeType';
import RecipeList from '../components/MainPage/RecipeList/RecipeList';
import IngredietsForm from '../components/RecipeMaking/FormComponents/IngredientsForm';
import { IngredientSection } from '../components/RecipeMaking/ConfirmBrewingStart/IngredientSection';
import { StartBrewingPopup } from '../components/RecipeMaking/ConfirmBrewingStart/StartBrewingPopup';
import IngredientType from '../types/RecipeData/IngredientType';
import SideBar from './SideBarRecipePage';

const RecipePage: React.FC = () => {
  // const [showPopup, setShowPopup] = useState(false); // pupup to start a new brewing process
  // const [showForm, setShowForm] = useState(false); // show form to make a new recipe
  const [showPage, setShowPage] = useState('PickingPage');
  const [recipeId, setRecipeId] = useState(1);
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

  // const handleRecipeSelection = (recipeId: number): undefined => {
  //   setRecipeId(recipeId);
  //   return undefined;
  // };

  function findItem(
    arrRecipes: RecipeType[],
    idToSearch: number
  ): RecipeType | undefined {
    return arrRecipes.find((item) => {
      return item.id === idToSearch;
    });
  }
  const recipeIngredients = findItem(recipeList.recipes, recipeId)?.Ingredients;

  const recipeName = findItem(recipeList.recipes, recipeId)?.name;

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

  function saveForm(): void {
    const states = inputFields.map(function (data, idx) {
      if (data.name === '') {
        return false;
      }
      return true;
    });
    if (states.includes(false)) {
      console.log('not all filed are full'); // bud nieco vyskakokvacie alebo riesit uplne inak
    } else {
      setShowPage('InstructionsPage'); // tu sa nastavi cesta ku stranke s vyberom instrukcii
    }
  }

  const infoGroupPopup = Object.keys(result).map((typ) => {
    return (
      <IngredientSection
        sectionName={typ}
        ingredients={result[typ]}
        showUnloader
      />
    );
  });

  // eslint-disable-next-line
  function renderSwitch(page: string) {
    switch (page) {
      default:
        return (
          <div className="recipe-choosing h-screen w-2/3">
            <Link
              to="/"
              className=" underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
            >
              <div className=" flex flex-row text-2xl text-black text-left ml-10">
                &#8592; back
              </div>
            </Link>

            <div className=" flex flex-col h-4/6">
              <div className=" text-center text-2xl font-bold">
                {recipeName}
              </div>
              <div className="flex flex-col overflow-auto border-2 border-gray-300 rounded-3xl px-8 m-8 mt-10 h-full">
                {infoGroup}
              </div>
            </div>
          </div>
        );
      case 'FormPage':
        return (
          <div className="ingredients-form  w-2/3">
            <IngredietsForm
              showPage={showPage}
              inputFields={inputFields}
              setInputFields={(ingredients: IngredientType[]) =>
                setInputFields(ingredients)
              }
              recipeNameForm={recipeNameForm}
              setRecipeNameForm={(name: string) => setRecipeNameForm(name)}
            />
          </div>
        );
    }
  }

  return (
    <div>
      <div className="flex flex-row ">
        {renderSwitch(showPage)}
        <div className="sidebar h-screen w-1/3  border-l-2 border-gray-300">
          <SideBar
            showPage={showPage}
            setShowPage={(pageName: string) => setShowPage(pageName)}
            setRecipeId={(rId: number) => setRecipeId(rId)}
            recipeId={recipeId}
            saveForm={() => saveForm()}
          />
        </div>
        {/* {showPopup && (
          <StartBrewingPopup
            onClose={() => setShowPopup(false)}
            infoGroup={infoGroupPopup}
            selectedRecipeId={selectedRecipeId}
          />
        )} */}
      </div>
    </div>
  );
};
export default RecipePage;
