import React from 'react';
import { InstructionLogApi } from '../../types/BrewingType';
import InstructionType from '../../types/RecipeData/InstructionType';

interface Props {
  instructionsRecipe: InstructionType[] | null;
  instructionsLog: InstructionLogApi;
}

const BrewHistoryInstructionListItem: React.FC<Props> = ({
  instructionsRecipe,
  instructionsLog,
}: Props) => {
  const { startedAt, finished, instructionId } = instructionsLog;
  const time = `${new Date(startedAt).getMinutes()}:${String(
    new Date(startedAt).getSeconds()
  ).padStart(2, '0')}`;
  return (
    <div
      className={`border rounded-xl space-y-2 py-5 px-10 ${
        finished ? 'bg-green-50' : 'bg-red-100'
      }`}
      style={{
        borderTopRightRadius: 90,
        borderBottomRightRadius: 90,
        fontSize: '14px',
        padding: 60,
        margin: 10,
      }}
    >
      {instructionsRecipe?.map((instructionRecipe: InstructionType) => {
        if (instructionId === instructionRecipe.id)
          return (
            <div>
              {instructionRecipe.codeName.replaceAll('_', ' ')}{' '}
              {instructionRecipe.param} <br />{' '}
              {instructionRecipe.optionCodeName}{' '}
            </div>
          );
        return null;
      })}
      <div>{time}</div>
    </div>
  );
};

export default BrewHistoryInstructionListItem;
