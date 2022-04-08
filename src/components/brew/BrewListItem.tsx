import React from 'react';
import { BrewSimple } from '../../types/RecipeData/BrewType';

interface BrewTypeProps {
  brew: BrewSimple;
  onClick: (arg: number) => void;
  current: number;
  name: string | undefined;
}

const BrewListItem: React.FC<BrewTypeProps> = ({
  brew,
  onClick,
  current,
  name,
}: BrewTypeProps) => {
  const { id, createdAt } = brew;
  const time = `${new Date(createdAt).getHours()}:${new Date(
    createdAt
  ).getMinutes()}`;
  return (
    <button
      type="button"
      onClick={() => {
        onClick(id);
      }}
      key={id + time}
      className={`chamber p-2 mx-7 my-1 content-center shadow rounded-3xl flex flex-row items-center justify-start ${
        current === id ? 'bg-yellow-200' : ''
      }`}
    >
      <div className="pl-2 font-bold">
        {name} - {time}
      </div>
    </button>
  );
};

export default BrewListItem;
