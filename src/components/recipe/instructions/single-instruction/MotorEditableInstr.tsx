import React, { useRef } from 'react';
import { configData } from '../../../../data/configFile';

import ParamType from '../../../../types/ParamType';
import EditableInstructionTemplateType from './EditableInstructionTemplateType';
import { getSelectedOption } from './helper';

interface Props {
  instruction: EditableInstructionTemplateType;
  onChange: (params: ParamType, error: boolean) => void;
}

const OPTIONS = [
  { value: 1, label: 'Chamber 1', optionCodeName: 'MOTOR_1' },
  { value: 2, label: 'Chamber 2', optionCodeName: 'MOTOR_2' },
];

const SPEEDMIN = configData.motorSpeedMin;
const SPEEDMAX = configData.motorSpeedMax;

const MotorEditableInstr: React.FC<Props> = ({
  instruction,
  onChange,
}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const selectRef = useRef<HTMLSelectElement>(null);
  const [isValid, setIsValid] = React.useState<boolean>(true);

  const readParams = (): ParamType | null => {
    const inputNode = inputRef.current;
    const selectNode = selectRef.current;
    const paramObj: ParamType = { optionCodeName: 'NONE', value: 0 };
    if (inputNode !== null && selectNode !== null) {
      paramObj.optionCodeName = `MOTOR_${selectNode.value}`;
      paramObj.value = parseInt(inputNode?.value || '0', 10);

      return paramObj;
    }
    return null;
  };

  const checkAndSendMotorSpeed = (): void => {
    const params = readParams();
    if (params !== null && params.value !== null) {
      if (params.value > SPEEDMAX || params.value < SPEEDMIN) {
        setIsValid(false);
        onChange(params, true);
      } else {
        setIsValid(true);
        onChange(params, false);
      }
    }
  };

  const defaultVal = instruction.param || 0;

  return (
    <div>
      <div className="flex flex-row justify-evenly text-lg align-middle space-x-8">
        <select
          className="border border-gray-300 p-2 rounded-lg"
          ref={selectRef}
          onChange={checkAndSendMotorSpeed}
          value={getSelectedOption(OPTIONS, instruction.optionCodeName)}
        >
          {OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="flex flex-row space-x-3 items-center">
          <span>Value:</span>
          <input
            className="w-1/4 border border-gray-300 p-2 rounded-lg"
            type="number"
            ref={inputRef}
            defaultValue={defaultVal}
            onChange={checkAndSendMotorSpeed}
          />
          <span>RPM</span>
        </div>
      </div>
      {!isValid && (
        <div
          className="msg text-red-700 text-lg pt-2 text-right pr-5 "
          style={{ color: 'visibility: visible' }}
        >
          Values between {SPEEDMIN} RPM and {SPEEDMAX} RPM allowed.
        </div>
      )}
    </div>
  );
};

export default MotorEditableInstr;
