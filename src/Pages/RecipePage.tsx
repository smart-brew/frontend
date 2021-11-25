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

  return (
    <div>
      <div className="flex flex-row ">
        {!showForm ? (
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
        ) : null}

        {showForm && (
          <div className="ingredients-form  w-2/3">
            <IngredietsForm
              show={showForm}
              inputFields={inputFields}
              setInputFields={(ingredients: IngredientType[]) =>
                setInputFields(ingredients)
              }
              recipeNameForm={recipeNameForm}
              setRecipeNameForm={(name: string) => setRecipeNameForm(name)}
            />
          </div>
        )}
        <div className="sidebar h-screen w-1/3  border-l-2 border-gray-300">
          <div className=" mt-10 mr-10 h-full  ">
            {showForm && (
              <div className="h-full">
                <div className="context h-4/6" />
                <div className="buttons">
                  <button
                    className="bg-green-400 hover:bg-green-600 text-white font-bold py-2 px-4 w-52 rounded-full "
                    type="button"
                    onClick={() => setShowForm(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
            {!showForm ? (
              <div className="h-full">
                <div className="context h-4/6 ">
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
            ) : null}
          </div>
        </div>
        {showPopup && (
          <StartBrewingPopup
            onClose={() => setShowPopup(false)}
            infoGroup={infoGroupPopup}
            selectedRecipeId={selectedRecipeId}
          />
        )}
      </div>
    </div>
  );
};
export default RecipePage;
