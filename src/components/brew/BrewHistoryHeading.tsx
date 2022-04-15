import React from 'react';
import { BrewingApi } from '../../types/BrewingType';

interface BrewTypeProps {
  brew: BrewingApi | null;
}

const BrewHistoryHeading: React.FC<BrewTypeProps> = ({
  brew,
}: BrewTypeProps) => {
  return brew ? (
    <div>
      <div
        className="text-center text-3xl font-bold pt-12"
        style={{ color: brew.endState === 'Finished' ? 'limegreen' : 'red' }}
      >
        {brew.endState}
      </div>
      <div className="text-center text-xl font-bold">
        Start{' '}
        {`${new Date(brew.startedAt).toLocaleDateString()} ${new Date(
          brew.startedAt
        ).toLocaleTimeString()}`}
      </div>
      <div className="text-center text-xl font-bold">
        End{' '}
        {`${new Date(brew.finishedAt).toLocaleDateString()} ${new Date(
          brew.finishedAt
        ).toLocaleTimeString()}`}
      </div>
    </div>
  ) : (
    <span />
  );
};

export default BrewHistoryHeading;
