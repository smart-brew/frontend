import React from 'react';
import RecipeType from '../RecipeData/RecipeType';

interface RecipeTypeProps {
  recipeData: RecipeType;
  onClick: (arg: number) => void;
  current: number;
}

export default RecipeTypeProps;
