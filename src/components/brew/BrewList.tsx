import React from 'react';
import { BaseBrewingApi } from '../../types/BrewingType';
import BrewDayInList from './BrewDayInList';

interface BrewListTypeProps {
  brews: BaseBrewingApi[];
  callback: (arg: number) => void;
  current: number;
}

const BrewList: React.FC<BrewListTypeProps> = ({
  brews,
  callback,
  current,
}) => {
  //   take days as the keys
  const daysOfBrewing = brews.reduce((r, a) => {
    r[new Date(a.startedAt).toLocaleDateString()] =
      r[new Date(a.startedAt).toLocaleDateString()] || [];
    r[new Date(a.startedAt).toLocaleDateString()].push(a);
    return r;
  }, Object.create(null));

  //   show list for each day
  function renderBrewsForTheDay(): React.ReactNode {
    const dayNames = Object.keys(daysOfBrewing);
    if (dayNames.length > 0) {
      return dayNames
        .slice(0)
        .reverse()
        .map((dayOfBrewing) => (
          <BrewDayInList
            brewsForTheDay={daysOfBrewing[dayOfBrewing]}
            callback={callback}
            current={current}
            dayName={dayOfBrewing}
          />
        ));
    }
    return null;
  }

  return (
    <ul className="flex flex-col">
      {renderBrewsForTheDay()}
      <div />
    </ul>
  );
};

export default BrewList;
