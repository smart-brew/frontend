import React, { useRef } from 'react';

import ParamType from '../../../../types/ParamType';
import EditableInstructionTemplateType from './EditableInstructionTemplateType';
import { getSelectedOption } from './helper';

interface Props {
  instruction: EditableInstructionTemplateType;
  onChange: (params: ParamType) => void;
}

const OPTIONS = [
  { value: 1, label: 'Chamber 1', optionCodeName: 'TEMP_1' },
  { value: 2, label: 'Chamber 2', optionCodeName: 'TEMP_2' },
];

const TemperatureEditableInstr: React.FC<Props> = ({
  instruction,
  onChange,
}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const selectRef = useRef<HTMLSelectElement>(null);

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

  const sendParams = (): void => {
    const params = readParams();
    if (params !== null) {
      onChange(params);
    }
  };

  const defaultVal = instruction.param || 0;

  return (
    <div className="flex flex-row justify-evenly align-middle space-x-8">
      <select
        className="border border-gray-300 p-2 text-lg rounded-lg"
        ref={selectRef}
        onChange={sendParams}
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
        <span>Value:</span>
        <input
          className="w-1/4 border border-gray-300 p-2 rounded-lg"
          type="number"
          ref={inputRef}
          defaultValue={defaultVal}
          onChange={sendParams}
        />
        <span>°C</span>
      </div>
    </div>
  );
};

export default TemperatureEditableInstr;
