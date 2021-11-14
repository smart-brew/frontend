import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RecipeListType from '../../types/RecipeData/RecipeListType';
import RecipeType from '../../types/RecipeData/RecipeType';
import RecipeList from './RecipeList/RecipeList';
import IngredietsForm from '../RecipeMaking/IngredientsForm';
import { IngredientSection } from '../RecipeMaking/ConfirmBrewingStart/IngredientSection';
import { StartBrewingPopup } from '../RecipeMaking/ConfirmBrewingStart/StartBrewingPopup';

export const recipeList: RecipeListType = {
  recipes: [
    {
      id: 3,
      name: 'TEST_RECIPE_1',
      description: 'Seed recipe 1',
      locked: false,
      created_at: new Date('2021-11-02T20:18:23.509Z'),
      updated_at: new Date('2021-11-02T20:18:23.511Z'),
      Ingredients: [
        {
          id: 5,
          recipe_id: 3,
          name: 'Some ingredient',
          amount: 5.6,
          type: 'Hops',
          units: 'Kg',
        },
        {
          id: 6,
          recipe_id: 3,
          name: 'Some different ingredient',
          amount: 1,
          type: 'Yeast',
          units: 'Pcs',
        },
        {
          id: 5,
          recipe_id: 3,
          name: 'Some ingredient',
          amount: 5.6,
          type: 'Other',
          units: 'Kg',
        },
        {
          id: 48,
          recipe_id: 3,
          name: 'Some different ingredient',
          amount: 1,
          type: 'Fermented',
          units: 'Pcs',
        },
        {
          id: 55,
          recipe_id: 3,
          name: 'Some different ingredient',
          amount: 1,
          type: 'Fermented',
          units: 'Pcs',
        },
        {
          id: 505,
          recipe_id: 3,
          name: 'Some different ingredient',
          amount: 1,
          type: 'Hops',
          units: 'Pcs',
        },
      ],
      Instructions: [
        {
          id: 11,
          recipe_id: 3,
          block_id: 1,
          function_template_id: 4,
          function_option_id: 6,
          ordering: 4,
          param: null,
          Blocks: {
            name: 'SECOND_BLOCK',
          },
        },
        {
          id: 12,
          recipe_id: 3,
          block_id: 1,
          function_template_id: 1,
          function_option_id: 1,
          ordering: 3,
          param: {
            temp: '60',
          },
          Blocks: {
            name: 'SECOND_BLOCK',
          },
        },
        {
          id: 13,
          recipe_id: 3,
          block_id: 2,
          function_template_id: 5,
          function_option_id: null,
          ordering: 2,
          param: {
            duration: '5',
          },

          Blocks: {
            name: 'FIRST_BLOCK',
          },
        },
        {
          id: 14,
          recipe_id: 3,
          block_id: 2,
          function_template_id: 2,
          function_option_id: 3,
          ordering: 1,
          param: {
            speed: '100',
          },
          Blocks: {
            name: 'FIRST_BLOCK',
          },
        },
      ],
    },
    {
      id: 2,
      name: 'TEST_RECIPE_2',
      description: 'Seed recipe 1',
      locked: false,
      created_at: new Date('2021-11-02T20:18:23.509Z'),
      updated_at: new Date('2021-11-02T20:18:23.511Z'),
      Ingredients: [
        {
          id: 55,
          recipe_id: 2,
          name: 'Some different ingredient',
          amount: 1,
          type: 'Fermented',
          units: 'Pcs',
        },
        {
          id: 505,
          recipe_id: 2,
          name: 'Some different ingredient',
          amount: 1,
          type: 'Hops',
          units: 'Pcs',
        },
        {
          id: 5,
          recipe_id: 2,
          name: 'Some ingredient',
          amount: 5.6,
          type: 'Hops',
          units: 'Kg',
        },
      ],
      Instructions: [
        {
          id: 11,
          recipe_id: 3,
          block_id: 1,
          function_template_id: 4,
          function_option_id: 6,
          ordering: 4,
          param: null,
          Blocks: {
            name: 'SECOND_BLOCK',
          },
        },
      ],
    },
    {
      id: 1,
      name: 'TEST_RECIPE_1',
      description: 'Seed recipe 1',
      locked: false,
      created_at: new Date('2021-11-02T20:18:23.509Z'),
      updated_at: new Date('2021-11-02T20:18:23.511Z'),
      Ingredients: [
        {
          id: 5,
          recipe_id: 1,
          name: 'Some ingredient',
          amount: 5.6,
          type: 'Hops',
          units: 'Kg',
        },
        {
          id: 55,
          recipe_id: 1,
          name: 'Some different ingredient',
          amount: 1,
          type: 'Fermented',
          units: 'Pcs',
        },
        {
          id: 505,
          recipe_id: 1,
          name: 'Some different ingredient',
          amount: 1,
          type: 'Fermented',
          units: 'Pcs',
        },
      ],
      Instructions: [
        {
          id: 11,
          recipe_id: 3,
          block_id: 1,
          function_template_id: 4,
          function_option_id: 6,
          ordering: 4,
          param: null,
          Blocks: {
            name: 'SECOND_BLOCK',
          },
        },
      ],
    },
    {
      id: 4,
      name: 'TEST_RECIPE_4',
      description: 'Seed recipe 1',
      locked: false,
      created_at: new Date('2021-11-02T20:18:23.509Z'),
      updated_at: new Date('2021-11-02T20:18:23.511Z'),
      Ingredients: [
        {
          id: 5,
          recipe_id: 4,
          name: 'Some ingredient',
          amount: 5.6,
          type: 'Hops',
          units: 'Kg',
        },
        {
          id: 5,
          recipe_id: 4,
          name: 'Some different ingredient ffqwf',
          amount: 999,
          type: 'Yeast',
          units: 'Pcs',
        },
        {
          id: 505,
          recipe_id: 4,
          name: 'Some different ingredient',
          amount: 1,
          type: 'Hops',
          units: 'Pcs',
        },
      ],
      Instructions: [
        {
          id: 11,
          recipe_id: 3,
          block_id: 1,
          function_template_id: 4,
          function_option_id: 6,
          ordering: 4,
          param: null,
          Blocks: {
            name: 'SECOND_BLOCK',
          },
        },
      ],
    },
    {
      id: 5,
      name: 'TEST_RECIPE_5',
      description: 'Seed recipe 1',
      locked: false,
      created_at: new Date('2021-11-02T20:18:23.509Z'),
      updated_at: new Date('2021-11-02T20:18:23.511Z'),
      Ingredients: [
        {
          id: 5,
          recipe_id: 5,
          name: 'Some ingredient',
          amount: 5.6,
          type: 'Hops',
          units: 'Kg',
        },
      ],
      Instructions: [
        {
          id: 11,
          recipe_id: 3,
          block_id: 1,
          function_template_id: 4,
          function_option_id: 6,
          ordering: 4,
          param: null,
          Blocks: {
            name: 'SECOND_BLOCK',
          },
        },
      ],
    },
    {
      id: 6,
      name: 'TEST_RECIPE_6',
      description: 'Seed recipe 1',
      locked: false,
      created_at: new Date('2021-11-02T20:18:23.509Z'),
      updated_at: new Date('2021-11-02T20:18:23.511Z'),
      Ingredients: [
        {
          id: 5,
          recipe_id: 6,
          name: 'Some ingredient',
          amount: 5.6,
          type: 'Hops',
          units: 'Kg',
        },
        {
          id: 55,
          recipe_id: 6,
          name: 'Some different ingredient',
          amount: 1,
          type: 'Fermented',
          units: 'Pcs',
        },
        {
          id: 505,
          recipe_id: 6,
          name: 'Some different ingredient',
          amount: 1,
          type: 'Hops',
          units: 'Pcs',
        },
        {
          id: 5588,
          recipe_id: 6,
          name: 'Some different ingredient',
          amount: 1,
          type: 'Fermented',
          units: 'Pcs',
        },
        {
          id: 505888,
          recipe_id: 6,
          name: 'Some different ingredient',
          amount: 1,
          type: 'Hops',
          units: 'Pcs',
        },
      ],
      Instructions: [
        {
          id: 11,
          recipe_id: 3,
          block_id: 1,
          function_template_id: 4,
          function_option_id: 6,
          ordering: 4,
          param: null,
          Blocks: {
            name: 'SECOND_BLOCK',
          },
        },
      ],
    },
  ],
};
const RecipePage: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false); // pupup to start a new brewing process
  const [showForm, setShowForm] = useState(false); // show form to make a new recipe
  const [selectedRecipeId, setRecipeId] = useState(1);

  const handleSelection = (arg: number): undefined => {
    setRecipeId(arg);
    console.log(selectedRecipeId);
    return undefined;
  };

  // eslint-disable-next-line
  function findItem(arrRecipes: RecipeType[], idToSearch: number) {
    return arrRecipes.filter((item) => {
      return item.id === idToSearch;
    });
  }
  const recipeIngredients = findItem(recipeList.recipes, selectedRecipeId)[0]
    .Ingredients;

  const result = recipeIngredients.reduce(function (r, a) {
    // eslint-disable-next-line
    r[a.type] = r[a.type] || [];
    // eslint-disable-next-line
    r[a.type].push(a);
    return r;
  }, Object.create(null));

  const infoGroup = Object.keys(result).map((typ: any, i: number) => {
    return <IngredientSection sectionName={typ} ingredients={result[typ]} />;
  });

  // eslint-disable-next-line
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

      {showForm ? (
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
      ) : null}
      <StartBrewingPopup
        show={showPopup}
        onClose={() => setShowPopup(false)}
        infoGroup={infoGroup}
        selectedRecipeId={selectedRecipeId}
      />
    </div>
  );
};
export default RecipePage;
