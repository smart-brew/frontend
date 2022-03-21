import React from 'react';
import { RecipeSimple } from '../../../types/RecipeData/RecipeType';
import RecipeListItem from './RecipeListItem';

interface RecipeListTypeProps {
  recipes: RecipeSimple[];
  callback: (arg: number) => void;
  current: number;
}

const RecipeList: React.FC<RecipeListTypeProps> = ({
  recipes,
  callback,
  current,
}) => {
  const sortedRecipes = [
    ...recipes
      .filter((recipe) => recipe.locked)
      .sort((a, b) => a.name.localeCompare(b.name)),
    ...recipes
      .filter((recipe) => !recipe.locked)
      .sort((a, b) => a.name.localeCompare(b.name)),
  ];

  return (
    <ul className="flex flex-col">
      {sortedRecipes.map((recipe: RecipeSimple) => (
        <RecipeListItem
          key={recipe.id}
          recipe={recipe}
          onClick={callback}
          current={current}
        />
      ))}
    </ul>
  );
};

export default RecipeList;
