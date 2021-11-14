import React, { Component } from 'react';
import RecipeTypeProps from '../../../types/PropsD/RecipeTypeProps';
import RecipeType from '../../../types/RecipeData/RecipeType';

const RecipeListItem: React.FC<RecipeTypeProps> = (props) => {
  const { recipeData, onClick, current } = props;
  const { name, id, locked } = recipeData;

  if (current === id) {
    return (
      <button
        type="button"
        onClick={() => {
          onClick(id);
        }}
        key={id}
        className="bg-yellow-200 chamber mx-7 my-1 content-center  border-2 border-gray-300 rounded-3xl "
      >
        <div>{name}</div>
        <div>{locked}</div>
      </button>
    );
  }
  return (
    <button
      type="button"
      onClick={() => {
        onClick(id);
      }}
      key={id}
      className="chamber mx-7 my-1 content-center  border-2 border-gray-300 rounded-3xl "
    >
      <div>{name}</div>
      <div>{locked}</div>
    </button>
  );
};

export default RecipeListItem;
