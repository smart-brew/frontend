import React from 'react';
import RecipeListType from '../RecipeData/RecipeListType';
import RecipeType from '../RecipeData/RecipeType';

interface RecipeListTypeProps {
  recipes: Array<RecipeType>;
  callback: (arg: number) => undefined;
  current: number;
}

export default RecipeListTypeProps;
