import React, { useRef } from 'react';

import ParamType from '../../../../types/ParamType';
import EditableInstructionTemplateType from './EditableInstructionTemplateType';

interface Props {
  instruction: EditableInstructionTemplateType;
  onChange: (params: ParamType) => void;
}

const MotorEditableInstr: React.FC<Props> = ({
  instruction,
  onChange,
}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const selectRef = useRef<HTMLSelectElement>(null);

  const readParams = (): ParamType | null => {
    const inputNode = inputRef.current;
    const selectNode = selectRef.current;
    const paramObj: ParamType = { optionCodeName: 'NONE', value: 0 };
    if (inputNode != null && selectNode != null) {
      paramObj.value = parseInt(inputNode?.value, 10);
      paramObj.optionCodeName = `MOTOR_${selectNode.value.toString()}`;
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

  return (
    <div className="flex flex-row justify-evenly">
      <select
        className="border border-gray-300 px-2"
        ref={selectRef}
        onChange={sendParams}
      >
        <option value={1}>Chamber 1</option>
        <option value={2}>Chamber 2</option>
      </select>
      <div className="flex flex-row space-x-3">
        <span>Value:</span>
        <input
          className="w-1/4 border border-gray-300 px-2"
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
