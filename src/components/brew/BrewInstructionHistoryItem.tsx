import React from 'react';
import { useInstructionsContext } from '../../contexts/instructionsContext';
import { InstructionLogApi } from '../../types/BrewingType';
import InstructionType from '../../types/RecipeData/InstructionType';
import TimeHelper from '../../helpers/TimeHelper';

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

  const { data: templates } = useInstructionsContext();

  let units: string | null;

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
        templates.forEach((template) => {
          if (template.id === instructionRecipe.templateId) {
            units = template.units;
          }
        });
        if (instructionId === instructionRecipe.id)
          return (
            <div style={{ whiteSpace: 'nowrap' }}>
              {instructionRecipe.codeName.replaceAll('_', ' ')}{' '}
              {instructionRecipe.codeName === 'WAIT'
                ? `${TimeHelper.getMinutesFromMillis(
                    instructionRecipe.param ? instructionRecipe.param : 'a'
                  ).toLocaleString('en-US', {
                    minimumIntegerDigits: 1,
                    useGrouping: false,
                  })}`
                : instructionRecipe.param}{' '}
              {units} <br /> {instructionRecipe.optionCodeName}{' '}
            </div>
          );
        return null;
      })}
      <div>{time}</div>
    </div>
  );
};

export default BrewHistoryInstructionListItem;
