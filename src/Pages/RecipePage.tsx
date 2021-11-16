/* eslint-disable camelcase */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { recipeList } from '../data/recipe';
import RecipeType from '../types/RecipeData/RecipeType';
import RecipeList from '../components/MainPage/RecipeList/RecipeList';
import IngredietsForm from '../components/RecipeMaking/FormComponents/IngredientsForm';
import { IngredientSection } from '../components/RecipeMaking/ConfirmBrewingStart/IngredientSection';
import { StartBrewingPopup } from '../components/RecipeMaking/ConfirmBrewingStart/StartBrewingPopup';

const RecipePage: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false); // pupup to start a new brewing process
  const [showForm, setShowForm] = useState(false); // show form to make a new recipe
  const [selectedRecipeId, setRecipeId] = useState(1);

  const handleSelection = (arg: number): undefined => {
    setRecipeId(arg);
    console.log(selectedRecipeId);
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

  const result = recipeIngredients?.reduce((r, a) => {
    r[a.type] = r[a.type] || [];
    r[a.type].push(a);
    return r;
  }, Object.create(null));
  console.log(result);

  const infoGroup = Object.keys(result).map((typ) => {
    return <IngredientSection sectionName={typ} ingredients={result[typ]} />;
  });

  return (
    <div>
      <Link
        to="/"
        className=" underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
      >
        Go back
      </Link>
      {!showForm ? (
        <div className="recipe-choosing">
          <div className="flex flex-row">
            <div className=" w-2/3 flex flex-col">{infoGroup}</div>
            <div className=" w-1/3">
              <RecipeList
                recipes={recipeList.recipes}
                callback={handleSelection}
                current={selectedRecipeId}
              />
            </div>
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            type="button"
            onClick={() => setShowPopup(true)}
          >
            Start brewing
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            type="button"
            onClick={() => setShowForm(true)}
          >
            Make a new recipe
          </button>
        </div>
      ) : null}

      {showForm && (
        <div>
          <IngredietsForm show={showForm} />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            type="button"
            onClick={() => setShowForm(false)}
          >
            Cancel
          </button>
        </div>
      )}
      {showPopup && (
        <StartBrewingPopup
          onClose={() => setShowPopup(false)}
          infoGroup={infoGroup}
          selectedRecipeId={selectedRecipeId}
        />
      )}
    </div>
  );
};
export default RecipePage;
