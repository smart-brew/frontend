import React from 'react';
import { Link } from 'react-router-dom';
import RecipeListType from '../../types/RecipeData/RecipeListType';
import IngredietsForm from '../RecipeMaking/IngredientsForm';

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
  ],
};
const RecipePage: React.FC = () => {
  // eslint-disable-next-line
  return (
    <div>
      <Link
        to="/"
        className=" underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
      >
        Go back
      </Link>

      <div className="h-screen flex flex-row w-1/2">
        <div className="grid justify-items-center mx-40">
          <IngredietsForm />
        </div>
        {/* <ul className="flex-1  overflow-y-scroll content-center justify-center ">
          {recipeList.recipes.map((recipe: RecipeType) => (
            <RecipeList
              id={recipe.id}
              name={recipe.name}
              locked={recipe.locked}
              description={recipe.description}
              created_at={recipe.created_at}
              updated_at={recipe.updated_at}
              Ingredients={recipe.Ingredients}
              Instructions={recipe.Instructions}
            />
          ))}
        </ul> */}
      </div>
    </div>
  );
};
export default RecipePage;
