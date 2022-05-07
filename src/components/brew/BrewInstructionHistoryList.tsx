import React from 'react';
import TimeHelper from '../../helpers/TimeHelper';
import { BrewingApi, InstructionLogApi } from '../../types/BrewingType';

import BrewHistoryInstructionListItem from './BrewInstructionHistoryItem';

interface Props {
  brew: BrewingApi;
}

const BrewHistoryInstructionList: React.FC<Props> = ({
  brew: { startedAt, finishedAt, endState, InstructionLogs, recipe },
}: Props) => {
  const instructionsRecipe = recipe.Instructions;

  // time between brew start and finish
  const timeDiff =
    new Date(finishedAt).getTime() - new Date(startedAt).getTime();

  // time elapsed since brew start
  const timeElapsed = TimeHelper.msToMMSS(timeDiff);

  return (
    <div className="mt-8 px-4">
      <span className="text-2xl font-bold">{recipe.name}</span>

      <div className="flex flex-row mt-8 overflow-x-auto gap-1">
        <div className="border rounded-xl bg-green-50 px-6 flex flex-col justify-center py-8">
          <p className="font-bold">START</p>
          <p className="italic">00:00</p>
        </div>

        {InstructionLogs.sort((a, b) => a.startedAt - b.startedAt).map(
          (instruction: InstructionLogApi) => (
            <BrewHistoryInstructionListItem
              key={instruction.startedAt}
              logItem={instruction}
              recipeInstructions={instructionsRecipe}
            />
          )
        )}

        <div
          className={`border rounded-xl px-6 flex flex-col justify-center ${
            endState === 'Finished' ? 'bg-green-50' : 'bg-red-100'
          }`}
        >
          <p className="font-bold">FINISH</p>
          <p className="italic">{timeElapsed}</p>
        </div>
      </div>
    </div>
  );
};

export default BrewHistoryInstructionList;
