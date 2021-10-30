import React, { Component } from 'react';
import RecipeListItemType from '../types/RecipeListItemType';

const RecipeList: React.FC<RecipeListItemType> = ({
  name,
  flag,
  id,
}: RecipeListItemType) => {
  return (
    <div
      key={id}
      className="chamber mx-7 my-1 content-center  border-2 border-gray-300 rounded-3xl "
    >
      <div>{name}</div>
      <div>{flag}</div>
    </div>
  );
};

export default RecipeList;
