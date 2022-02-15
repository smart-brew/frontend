import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';

import { RecipeSimple } from '../../../types/RecipeData/RecipeType';

interface RecipeTypeProps {
  recipe: RecipeSimple;
  onClick: (arg: number) => void;
  current: number;
}

const RecipeListItem: React.FC<RecipeTypeProps> = ({
  recipe,
  onClick,
  current,
}: RecipeTypeProps) => {
  const { name, id, locked } = recipe;

  return (
    <button
      type="button"
      onClick={() => {
        onClick(id);
      }}
      key={id}
      className={`chamber p-2 mx-7 my-1 content-center shadow rounded-3xl flex flex-row items-center justify-start ${
        current === id ? 'bg-yellow-200' : ''
      }`}
    >
      {locked && (
        <FontAwesomeIcon icon={faLock} className="ml-2 text-gray-400" />
      )}
      <div className="pl-2 font-bold">{name}</div>
    </button>
  );
};

export default RecipeListItem;
