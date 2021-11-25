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

const RecipePage: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false); // pupup to start a new brewing process
  const [showForm, setShowForm] = useState(false); // show form to make a new recipe
  const [selectedRecipeId, setRecipeId] = useState(1);
  const [listOfIngredients, setListOfIngredients] = useState([
    {
      amount: 0,
      units: 'KG',
      name: 'filterOut',
      id: 0,
      type: 'Fermentables',
      recipe_id: 0,
    },
  ]);

  // console.log('toto je list of ingredients on the recipepage');
  // console.log(listOfIngredients);

  const handleSelection = (arg: number): undefined => {
    setRecipeId(arg);
    return undefined;
  };

  function findItem(
    arrRecipes: RecipeType[],
    idToSearch: number
  ): RecipeType | undefined {
    return arrRecipes.find((item) => {
      return item.id === idToSearch;
    });
  }
  const recipeIngredients = findItem(
    recipeList.recipes,
    selectedRecipeId
  )?.Ingredients;

  const recipeName = findItem(recipeList.recipes, selectedRecipeId)?.name;

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

  const returnIngredients = (ingredients: IngredientType[]): void => {
    console.log(ingredients);
    setListOfIngredients(ingredients);
    console.log('toto je list of ingredients on the recipepage');
    console.log(listOfIngredients);
  };

  return (
    <div>
      {!showForm ? (
        <div className="recipe-choosing">
          <Link
            to="/"
            className=" underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
          >
            <div className=" flex flex-row text-2xl text-black text-left ml-10">
              &#8592; back
            </div>
          </Link>
          <div className="flex flex-row ">
            <div className=" w-2/3 flex flex-col">
              <div className=" text-center text-2xl font-bold">
                {recipeName}
              </div>
              <div className="flex flex-col   border-2 border-gray-300 rounded-3xl px-8 m-8 min-h-full">
                {infoGroup}
              </div>
            </div>
            <div className=" w-1/3 ">
              <div className=" text-center text-2xl font-bold pb-8">
                Recipes
              </div>
              <div className="min-h-full">
                <RecipeList
                  recipes={recipeList.recipes}
                  callback={handleSelection}
                  current={selectedRecipeId}
                />
              </div>
              {/* Buttons Edit, Start Brewing, Make a new recipe */}
              <div className="  text-center flex flex-col">
                <button
                  className="bg-green-400 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full m-auto w-52 mb-2"
                  type="button"
                  // onClick={() => setShowPopup(true)}
                >
                  Edit
                </button>
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
                  onClick={() => setShowForm(true)}
                >
                  Make a new recipe
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {showForm && (
        <div className="ingredients-form">
          <div className="flex flex-row ">
            <div className=" w-2/3 ">
              <IngredietsForm
                show={showForm}
                setListOfIngredients={(ingredients: IngredientType[]) =>
                  returnIngredients(ingredients)
                }
              />
            </div>
            <div className=" w-1/3 relative text-center content-center">
              <button
                className="bg-green-400 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full absolute bottom-0 w-52"
                type="button"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      {showPopup && (
        <StartBrewingPopup
          onClose={() => setShowPopup(false)}
          infoGroup={infoGroupPopup}
          selectedRecipeId={selectedRecipeId}
        />
      )}
    </div>
  );
};
export default RecipePage;
