import React from 'react';
import RecipeType from '../../../types/RecipeData/RecipeType';
import RecipeListItem from './RecipeListItem';

interface RecipeListTypeProps {
  recipes: Array<RecipeType>;
  callback: (arg: number) => undefined;
  current: number;
}

const RecipeList: React.FC<RecipeListTypeProps> = (props) => {
  const { recipes, callback, current } = props;
  return (
    <div>
      <ul className="flex flex-col ">
        {recipes.map((recipe: RecipeType) => (
          <RecipeListItem
            recipeData={recipe}
            onClick={callback}
            current={current}
          />
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;