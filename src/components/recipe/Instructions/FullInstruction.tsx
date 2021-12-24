import React from 'react';

import arrow from '../../../blue-arrow.svg';
import InstructionType from '../../../types/RecipeData/InstructionType';
import { InstructionStatus } from '../../../types/SystemData';
import { InstructionsContext } from '../../../contexts/instructionsContext';
import InstructionStateMap from '../../../helper_scripts/InstructionStateMap';
import InstructionConstants from '../../../helper_scripts/InstructionConstants';
import TimeHelper from '../../../helper_scripts/TimeHelper';
import { usePopup } from '../../../contexts/popupContext';
import { confirmManualInstruction } from '../../../api/brew';

interface Props {
  instruction: InstructionType;
  instructionName: string | undefined;
  status: InstructionStatus;
}

const FullInstruction: React.FC<Props> = ({
  instruction,
  instructionName,
  status,
}: Props) => {
  const templates = React.useContext(InstructionsContext);
  const popup = usePopup();
  const styleMap = new InstructionStateMap();

  const template = templates?.data.find(
    (templ) => templ.id === instruction.templateId
  );

  function getName(): string {
    return instructionName || instruction.codeName;
  }

  const manualCallback = (instrId: number, param: string): void => {
    popup?.open({
      title: 'To continue, press Confirm that this step was taken',
      description: param,
      onConfirm: () => confirmManualInstruction(0, instrId),
    });
  };

  function getShownBody(): JSX.Element | undefined {
    if (
      instruction.codeName === InstructionConstants.MOTOR ||
      instruction.codeName === InstructionConstants.TEMPERATURE
    ) {
      return (
        <div className="flex flex-row items-center content-center justify-center space-x-8">
          <div className="flex flex-col">
            <span className="font-semibold">Now:</span>
            <span className="font-bold">
              {status.currentValue}
              {template?.units}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">Target:</span>
            <span className="font-bold">
              {instruction.param}
              {template?.units}
            </span>
          </div>
        </div>
      );
    }
    if (instruction.codeName === InstructionConstants.UNLOADER) {
      return (
        <div className="flex flex-row items-center content-center justify-center space-x-8">
          <span className="font-semibold py-2">
            {instruction.optionCodeName}
          </span>
        </div>
      );
    }
    if (instruction.codeName === InstructionConstants.PUMP) {
      const chamberNum = parseInt(
        instruction.optionCodeName
          ? instruction.optionCodeName?.split('_')[1]
          : '0',
        10
      );
      return (
        <div className="flex flex-row items-center content-center justify-center space-x-8">
          <div className="flex flex-col">
            <span className="font-semibold">From:</span>
            <span className="font-bold">{chamberNum}</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">To:</span>
            <span className="font-bold">{chamberNum + 1}</span>
          </div>
        </div>
      );
    }
    if (instruction.codeName === InstructionConstants.WAIT) {
      const timeString = `${TimeHelper.getHoursFromMillis(
        instruction.param ? instruction.param : 'a'
      ).toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false,
      })}:${TimeHelper.getMinutesFromMillis(
        instruction.param ? instruction.param : 'a'
      ).toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false,
      })}:${TimeHelper.getSecondsFromMillis(
        instruction.param ? instruction.param : 'a'
      ).toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false,
      })}`;
      return (
        <div className="flex flex-row items-center content-center justify-center space-x-8">
          <div className="flex flex-col font-semibold py-1">
            <span>
              {TimeHelper.getDaysFromMillis(
                instruction.param ? instruction.param : 'a'
              ).toLocaleString('en-US', {
                minimumIntegerDigits: 1,
                useGrouping: false,
              })}{' '}
              days
            </span>
            <span>{timeString}</span>
          </div>
        </div>
      );
    }
    if (instruction.codeName === InstructionConstants.MANUAL) {
      manualCallback(
        instruction.id,
        instruction.param?.toString() || 'no parametres were added'
      );
      return (
        <div className="flex flex-row items-center content-center justify-center space-x-8">
          <span>{instruction.param ? instruction.param : '---'}</span>
        </div>
      );
    }
    return undefined;
  }

  const style = styleMap.getStyle(status.status);

  // TODO upravit style a veci co sa zobrazuju
  return (
    <div className="text-lg shadow rounded-xl justify-center bg-white m-2">
      <div className="relative">
        <img
          src={arrow}
          alt="arrow"
          className="w-12 h-auto absolute -left-16 top-8 z-10"
        />
      </div>
      <h3 className="text-xl">
        <span className="font-bold">{getName()}</span>
      </h3>

      {getShownBody()}

      <div className={`font-bold text-xl ${style?.style}`}>
        {style?.name || status.status}
      </div>
    </div>
  );
};

export default FullInstruction;
