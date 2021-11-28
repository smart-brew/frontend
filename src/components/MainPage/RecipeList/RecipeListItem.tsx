import React from 'react';
import RecipeType from '../../../types/RecipeData/RecipeType';

interface RecipeTypeProps {
  recipeData: RecipeType;
  onClick: (arg: number) => void;
  current: number;
}

const RecipeListItem: React.FC<RecipeTypeProps> = ({
  recipeData,
  onClick,
  current,
}: RecipeTypeProps) => {
  const { name, id, locked } = recipeData;

  if (current === id) {
    return (
      <button
        type="button"
        onClick={() => {
          onClick(id);
        }}
        key={id}
        className="bg-yellow-200 chamber mx-7 my-1 content-center  shadow rounded-3xl "
      >
        <div className="text-center">{name}</div>
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
      className="chamber mx-7 my-1 content-center  shadow rounded-3xl "
    >
      <div>{name}</div>
      <div>{locked}</div>
    </button>
  );
};

export default RecipeListItem;
