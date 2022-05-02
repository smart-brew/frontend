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
  { value: 1, label: 'Chamber 1', optionCodeName: 'TEMP_1' },
  { value: 2, label: 'Chamber 2', optionCodeName: 'TEMP_2' },
];

const TEMPERATUREMIN = configData.temperatureMin;
const TEMPERATUREMAX = configData.temperatureMax;

const TemperatureEditableInstr: React.FC<Props> = ({
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
      paramObj.value = parseInt(inputNode?.value || '0', 10);
      paramObj.optionCodeName = `TEMP_${selectNode.value.toString()}`;
      return paramObj;
    }
    return null;
  };

  const checkAndSendTemperature = (): void => {
    const params = readParams();

    if (params !== null && params.value !== null) {
      if (params.value > TEMPERATUREMAX || params.value < TEMPERATUREMIN) {
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
      <div className="flex flex-row justify-evenly align-middle space-x-8 ">
        <select
          className="border border-gray-300 p-2 text-lg rounded-lg"
          ref={selectRef}
          onChange={checkAndSendTemperature}
          value={getSelectedOption(OPTIONS, instruction.optionCodeName)}
        >
          {OPTIONS.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            );
          })}
        </select>
        <div className="flex flex-row space-x-3 h-auto align-middle text-lg items-center">
          <div>
            <span>Value:</span>
            <input
              className="w-1/4 border border-gray-300 p-2 rounded-lg"
              type="number"
              ref={inputRef}
              defaultValue={defaultVal}
              onChange={checkAndSendTemperature}
            />
            <span>°C </span>
          </div>
        </div>
      </div>
      {!isValid && (
        <div
          className="msg text-red-700 text-lg pt-2 text-right pr-5 "
          style={{ color: 'visibility: visible' }}
        >
          Values between {TEMPERATUREMIN} °C and {TEMPERATUREMAX} °C allowed.
        </div>
      )}
    </div>
  );
};

export default TemperatureEditableInstr;
