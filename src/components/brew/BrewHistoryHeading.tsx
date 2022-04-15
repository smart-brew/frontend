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
      <div className="text-center text-3xl font-bold pt-12">
        {brew.endState}
      </div>
      <div className="text-center text-xl font-bold">
        Start {brew.startedAt}
      </div>
      <div className="text-center text-xl font-bold">End {brew.finishedAt}</div>
    </div>
  ) : (
    <span />
  );
};

export default BrewHistoryHeading;
