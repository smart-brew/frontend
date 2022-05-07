import React from 'react';
import { BrewingApi } from '../../types/BrewingType';

interface BrewTypeProps {
  brew: BrewingApi | null;
}

const getDateTime = (date: string): string => {
  return `${new Date(date).toLocaleDateString()} ${new Date(
    date
  ).toLocaleTimeString()}`;
};

const BrewHistoryHeading: React.FC<BrewTypeProps> = ({
  brew,
}: BrewTypeProps) => {
  if (!brew) {
    return null;
  }

  return (
    <div>
      <h1
        className="text-center text-3xl font-bold pt-12"
        style={{ color: brew.endState === 'Finished' ? 'limegreen' : 'red' }}
      >
        {brew.endState}
      </h1>
      <p className="text-center text-l font-bold">
        Start: {getDateTime(brew.startedAt)}
      </p>
      <p className="text-center text-l font-bold">
        End: {getDateTime(brew.finishedAt)}
      </p>
    </div>
  );
};

export default BrewHistoryHeading;
