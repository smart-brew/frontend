import React from 'react';
import { useInstructionsContext } from '../../contexts/instructionsContext';
import { InstructionLogApi } from '../../types/BrewingType';
import InstructionType from '../../types/RecipeData/InstructionType';
import TimeHelper from '../../helpers/TimeHelper';

interface Props {
  recipeInstructions: InstructionType[] | null;
  logItem: InstructionLogApi;
}

const BrewHistoryInstructionListItem: React.FC<Props> = ({
  recipeInstructions,
  logItem,
}: Props) => {
  const { startedAt, finished, instructionId } = logItem;

  const time = TimeHelper.msToMMSS(startedAt);

  const { data: templates } = useInstructionsContext();

  const instruction = React.useMemo(
    () => recipeInstructions?.find((instr) => instr.id === instructionId),
    [instructionId, recipeInstructions]
  );

  const instructionName = instruction?.codeName.replaceAll('_', ' ');
  const instructionOption = instruction?.optionCodeName;

  const param = React.useMemo(
    () =>
      instruction?.codeName === 'WAIT'
        ? `${TimeHelper.getMinutesFromMillis(
            instruction.param ?? ''
          ).toLocaleString('en-US', {
            minimumIntegerDigits: 1,
            useGrouping: false,
          })}`
        : instruction?.param,
    [instruction?.codeName, instruction?.param]
  );

  const template = React.useMemo(
    () => templates.find((templ) => templ.id === instruction?.templateId),
    [instruction?.templateId, templates]
  );

  return (
    <div
      className={`border rounded-xl px-6 flex flex-col justify-center ${
        finished ? 'bg-green-50' : 'bg-red-100'
      }`}
      style={{ minWidth: '200px' }}
    >
      <p className="font-bold">{instructionName}</p>
      {param && <p className="font-bold">{`${param} ${template?.units}`}</p>}
      {instructionOption && <p className="italic">{`${instructionOption}`}</p>}
      <p className="italic">{time}</p>
    </div>
  );
};

export default BrewHistoryInstructionListItem;
