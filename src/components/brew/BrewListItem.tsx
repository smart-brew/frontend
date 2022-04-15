import React from 'react';
import { BaseBrewingApi } from '../../types/BrewingType';

interface BrewTypeProps {
  brew: BaseBrewingApi;
  onSelectBrewId: (brewId: number) => void;
  isSelected: boolean;
}

const BrewListItem: React.FC<BrewTypeProps> = ({
  brew,
  onSelectBrewId,
  isSelected,
}: BrewTypeProps) => {
  const { id, startedAt } = brew;
  const time = `${new Date(startedAt).getHours()}:${String(
    new Date(startedAt).getMinutes()
  ).padStart(2, '0')}`;

  return (
    <button
      type="button"
      onClick={() => {
        onSelectBrewId(id);
      }}
      className={`chamber p-2 mx-7 my-1 content-center shadow rounded-3xl flex flex-row items-center justify-start ${
        isSelected ? 'bg-yellow-200' : ''
      }`}
    >
      <div className="pl-2 font-bold">
        {brew.recipeName} - {time}
      </div>
    </button>
  );
};

export default BrewListItem;
