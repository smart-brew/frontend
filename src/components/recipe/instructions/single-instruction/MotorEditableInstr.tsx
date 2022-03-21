import React, { useRef } from 'react';

import ParamType from '../../../../types/ParamType';
import EditableInstructionTemplateType from './EditableInstructionTemplateType';
import { getSelectedOption } from './helper';

interface Props {
  instruction: EditableInstructionTemplateType;
  onChange: (params: ParamType) => void;
}

const OPTIONS = [
  { value: 1, label: 'Chamber 1', optionCodeName: 'MOTOR_1' },
  { value: 2, label: 'Chamber 2', optionCodeName: 'MOTOR_2' },
];

const MotorEditableInstr: React.FC<Props> = ({
  instruction,
  onChange,
}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const selectRef = useRef<HTMLSelectElement>(null);

  const readParams = (): ParamType | null => {
    const inputNode = inputRef.current;
    const selectNode = selectRef.current;
    if (inputNode != null && selectNode != null) {
      const parameter: ParamType = {
        optionCodeName: `MOTOR_${selectNode.value}`,
        value: parseInt(inputNode?.value, 10),
      };
      return parameter;
    }
    return null;
  };

  const sendParams = (): void => {
    const params = readParams();
    if (params !== null) {
      onChange(params);
    }
  };

  return (
    <div className="flex flex-row justify-evenly text-lg align-middle space-x-8">
      <select
        className="border border-gray-300 p-2 rounded-lg"
        ref={selectRef}
        onChange={sendParams}
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
          defaultValue={instruction.param === null ? 0 : instruction.param}
          onBlur={sendParams}
        />
        <span>RPM</span>
      </div>
    </div>
  );
};

export default MotorEditableInstr;
