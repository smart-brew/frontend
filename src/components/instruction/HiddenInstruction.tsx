import React from 'react';

import InstructionType from '../../types/RecipeData/InstructionType';
import UnitsMap from '../../helpers/UnitsMap';
import InstructionConstants from '../../helpers/InstructionConstants';
import TimeHelper from '../../helpers/TimeHelper';

interface Props {
  instruction: InstructionType;
  instructionName: string | undefined;
}

const HiddenInstruction: React.FC<Props> = ({
  instruction,
  instructionName,
}: Props) => {
  const unitMap = new UnitsMap();
  /* TODO
   - treba upravit, ze ked mam specialne instrukcie ako WAIT, MANUAL, TRANSFER_LIQUIDS, co sa bude zobrazovat na pravej strane
   - na lavej strane mapovat "codeName" na nieco krajsie
   */
  const formatInstrParam = (): string | null => {
    const unit = unitMap.getUnit(instruction.codeName);
    if (unit !== undefined) {
      return `${instruction.param} ${unit}`;
    }
    if (instruction.codeName === InstructionConstants.MANUAL) {
      return `${instruction.param}`;
    }
    if (instruction.codeName === InstructionConstants.UNLOADER) {
      return `${instruction.optionCodeName}`;
    }
    if (instruction.codeName === InstructionConstants.PUMP) {
      return `to Chamber ${
        parseInt(
          instruction.optionCodeName?.split('_')[1]
            ? instruction.optionCodeName?.split('_')[1]
            : '0',
          10
        ) + 1
      }`;
    }
    if (instruction.codeName === InstructionConstants.WAIT) {
      console.log(
        TimeHelper.getDaysFromMillis(
          instruction.param ? instruction.param : 'a'
        )
      );
      return `${TimeHelper.getDaysFromMillis(
        instruction.param ? instruction.param : 'a'
      ).toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false,
      })}:${TimeHelper.getHoursFromMillis(
        instruction.param ? instruction.param : 'a'
      ).toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false,
      })}:${TimeHelper.getMinutesFromMillis(
        instruction.param ? instruction.param : 'a'
      ).toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false,
      })}`;
    }
    return '';
  };

  return (
    <div className="text-lg shadow rounded-xl content-center justify-center bg-white flex flex-row m-2">
      <span className="w-1/2 font-bold border-r border-gray-300 flex content-center justify-center p-2">
        {instructionName !== undefined ? instructionName : instruction.codeName}
      </span>
      <span className="w-1/2 flex flex-row content-center justify-center p-2">
        {formatInstrParam()}
      </span>
    </div>
  );
};

export default HiddenInstruction;
