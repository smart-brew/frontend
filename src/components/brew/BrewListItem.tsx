import React from 'react';
import { BaseBrewingApi } from '../../types/BrewingType';

interface BrewTypeProps {
  brew: BaseBrewingApi;
  onClick: (arg: number) => void;
  current: number;
}

const BrewListItem: React.FC<BrewTypeProps> = ({
  brew,
  onClick,
  current,
}: BrewTypeProps) => {
  const { id, startedAt } = brew;
  const time = `${new Date(startedAt).getHours()}:${String(
    new Date(startedAt).getMinutes()
  ).padStart(2, '0')}`;
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
