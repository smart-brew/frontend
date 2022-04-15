import React from 'react';
import { BaseBrewingApi } from '../../types/BrewingType';

import BrewListItem from './BrewListItem';

interface BrewDayInListTypeProps {
  brews: BaseBrewingApi[];
  onSelectBrewId: (brewId: number) => void;
  currentBrewId: number | null;
  date: string;
}

const BrewDayInList: React.FC<BrewDayInListTypeProps> = ({
  brews,
  onSelectBrewId,
  currentBrewId,
  date,
}) => {
  return (
    <ul className="flex flex-col">
      <div className="text-left font-bold text-2xl py-5 pl-3">{date}</div>
      {brews
        .sort((a, b) => b.startedAt.localeCompare(a.startedAt))
        .map((brew: BaseBrewingApi) => (
          <BrewListItem
            key={brew.id}
            brew={brew}
            onSelectBrewId={onSelectBrewId}
            isSelected={currentBrewId === brew.id}
          />
        ))}
    </ul>
  );
};

export default BrewDayInList;
