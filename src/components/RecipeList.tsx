import React, { Component } from 'react';
import RecipeType from '../types/RecipeData/RecipeType';

const RecipeList: React.FC<RecipeType> = ({ name, locked, id }: RecipeType) => {
  return (
    <div
      key={id}
      className="chamber mx-7 my-1 content-center  border-2 border-gray-300 rounded-3xl "
    >
      <div>{name}</div>
      <div>{locked}</div>
    </div>
  );
};

export default RecipeList;
