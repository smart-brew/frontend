import React from 'react';
import { Link } from 'react-router-dom';
import RecipeListType from '../../types/RecipeListType';
import RecipeListItemType from '../../types/RecipeListItemType';
import RecipeList from '../RecipeList';

const recipeList: RecipeListType = {
  recipes: [
    {
      id: 1,
      name: 'Ale so good',
      createdAt: 10844600,
      flag: 1,
    },
    {
      id: 2,
      name: 'Ale not so good',
      createdAt: 10777844600,
      flag: 0,
    },
    {
      id: 3,
      name: 'Ale so good',
      createdAt: 10844600,
      flag: 1,
    },
    {
      id: 4,
      name: 'Ale not so good',
      createdAt: 10777844600,
      flag: 0,
    },
    {
      id: 5,
      name: 'Ale so good',
      createdAt: 10844600,
      flag: 1,
    },
    {
      id: 6,
      name: 'Ale not so good',
      createdAt: 10777844600,
      flag: 0,
    },
    {
      id: 11,
      name: 'Ale so good',
      createdAt: 10844600,
      flag: 1,
    },
    {
      id: 21,
      name: 'Ale not so good',
      createdAt: 10777844600,
      flag: 0,
    },
    {
      id: 31,
      name: 'Ale so good',
      createdAt: 10844600,
      flag: 1,
    },
    {
      id: 41,
      name: 'Ale not so good',
      createdAt: 10777844600,
      flag: 0,
    },
    {
      id: 51,
      name: 'Ale so good',
      createdAt: 10844600,
      flag: 1,
    },
    {
      id: 61,
      name: 'Ale not so good',
      createdAt: 10777844600,
      flag: 0,
    },
    {
      id: 51,
      name: 'Ale so good',
      createdAt: 10844600,
      flag: 1,
    },
    {
      id: 52,
      name: 'Ale not so good',
      createdAt: 10777844600,
      flag: 0,
    },
    {
      id: 53,
      name: 'Ale so good',
      createdAt: 10844600,
      flag: 1,
    },
    {
      id: 54,
      name: 'Ale not so good',
      createdAt: 10777844600,
      flag: 0,
    },
    {
      id: 55,
      name: 'Ale so good',
      createdAt: 10844600,
      flag: 1,
    },
    {
      id: 56,
      name: 'Ale not so good',
      createdAt: 10777844600,
      flag: 0,
    },
  ],
};
const RecipePage: React.FC = () => {
  // eslint-disable-next-line
  return (
    <div>
      <div className="h-screen flex  w-1/2">
        <ul className="flex-1 overflow-y-scroll content-center justify-center ">
          {recipeList.recipes.map((recipe: RecipeListItemType) => (
            <RecipeList
              id={recipe.id}
              name={recipe.name}
              createdAt={recipe.createdAt}
              flag={recipe.flag}
            />
          ))}
        </ul>
      </div>
      <Link
        to="/"
        className=" underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
      >
        Go back
      </Link>
    </div>
  );
};
export default RecipePage;
