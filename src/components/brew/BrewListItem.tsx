import React from 'react';
import { BrewSimple } from '../../types/BrewType';

interface BrewTypeProps {
  brew: BrewSimple;
  onClick: (arg: number) => void;
  current: number;
}

const BrewListItem: React.FC<BrewTypeProps> = ({
  brew,
  onClick,
  current,
}: BrewTypeProps) => {
  const { id, startedAt } = brew;
  const time = `${new Date(startedAt).getHours()}:${new Date(
    startedAt
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
        {brew.recipeName} - {time}
      </div>
    </button>
  );
};

export default BrewListItem;
