import React from 'react';
import { BrewSimple } from '../../types/BrewType';
import BrewListItem from './BrewListItem';

interface BrewDayInListTypeProps {
  brewsForTheDay: BrewSimple[];
  callback: (arg: number) => void;
  current: number;
  dayName: string;
}

const BrewDayInList: React.FC<BrewDayInListTypeProps> = ({
  brewsForTheDay,
  callback,
  current,
  dayName,
}) => {
  return (
    <ul className="flex flex-col">
      <div className="text-left font-bold text-2xl py-5 pl-3">{dayName}</div>
      {brewsForTheDay.map((brew: BrewSimple) => (
        <BrewListItem
          key={brew.id}
          brew={brew}
          onClick={callback}
          current={current}
        />
      ))}
    </ul>
  );
};

export default BrewDayInList;
