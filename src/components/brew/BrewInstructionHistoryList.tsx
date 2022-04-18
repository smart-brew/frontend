import React from 'react';
import { BrewingApi, InstructionLogApi } from '../../types/BrewingType';

import BrewHistoryInstructionListItem from './BrewInstructionHistoryItem';
import InstructionType from '../../types/RecipeData/InstructionType';

interface Props {
  brew: BrewingApi | null;
  instructionsRecipe: InstructionType[] | null;
  instructionsLog: InstructionLogApi[] | null;
}

const BrewHistoryInstructionList: React.FC<Props> = ({
  brew,
  instructionsLog,
  instructionsRecipe,
}: Props) => {
  const { startedAt, finishedAt, endState } = brew!;
  const timeDif = parseInt(
    `${new Date(finishedAt).valueOf() - new Date(startedAt).valueOf()}`,
    10
  );
  const timeElapsed = `${new Date(timeDif).getMinutes()}:${String(
    new Date(timeDif).getSeconds()
  ).padStart(2, '0')}`;
  return (
    <div
      className="text-xl font-bold pb-3 allign-left"
      style={{ textAlign: 'left' }}
    >
      Overall
      <div className="flex flex-row" style={{ overflowX: 'auto' }}>
        <div
          className="border rounded-xl space-y-2 py-5 px-10 bg-green-50"
          style={{
            borderTopRightRadius: 90,
            borderBottomRightRadius: 90,
            fontSize: '14px',
            padding: 60,
            margin: 10,
          }}
        >
          {' '}
          START <br />
          0:00{' '}
        </div>
        {instructionsLog
          ?.sort((a, b) => (b.startedAt < a.startedAt ? 1 : -1))
          .map((instruction: InstructionLogApi) => (
            <BrewHistoryInstructionListItem
              key={instruction.instructionId}
              instructionsLog={instruction}
              instructionsRecipe={instructionsRecipe}
            />
          ))}
        <div
          className={`border rounded-xl space-y-2 py-5 px-10 ${
            endState === 'Finished' ? 'bg-green-50' : 'bg-red-100'
          }`}
          style={{
            borderTopLeftRadius: 90,
            borderBottomLeftRadius: 90,
            fontSize: '14px',
            padding: 60,
            margin: 10,
          }}
        >
          {' '}
          FINISH <br />
          {timeElapsed}
        </div>
      </div>
    </div>
  );
};

export default BrewHistoryInstructionList;
