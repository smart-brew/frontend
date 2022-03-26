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
  return (
    <ul className="flex flex-col">
      {recipes.map((recipe) => (
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
