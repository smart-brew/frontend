import React, { useRef } from 'react';

import ParamType from '../../../../types/ParamType';
import EditableInstructionTemplateType from './EditableInstructionTemplateType';

interface Props {
  instruction: EditableInstructionTemplateType;
  onChange: (params: ParamType) => void;
}

const TemperatureEditableInstr: React.FC<Props> = ({
  instruction,
  onChange,
}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const selectRef = useRef<HTMLSelectElement>(null);

  const options = [
    { value: 1, label: 'Chamber 1', optionCodeName: 'TEMP_1' },
    { value: 2, label: 'Chamber 2', optionCodeName: 'TEMP_2' },
  ];

  const readParams = (): ParamType | null => {
    const inputNode = inputRef.current;
    const selectNode = selectRef.current;
    const paramObj: ParamType = { optionCodeName: 'NONE', value: 0 };
    if (inputNode != null && selectNode != null) {
      paramObj.value = parseInt(inputNode?.value, 10);
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

  const returnValue = (): number => {
    const myOption = options.find((element) => {
      return element.optionCodeName === instruction.optionCodeName;
    });
    return myOption ? myOption.value : options[0].value;
  };

  return (
    <div className="flex flex-row justify-evenly align-middle space-x-8">
      <select
        className="border border-gray-300 p-2 text-lg rounded-lg"
        ref={selectRef}
        onChange={sendParams}
        value={returnValue()}
      >
        {options.map((e) => {
          return (
            <option key={e.value} value={e.value}>
              {e.label}
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
          defaultValue={instruction.param === null ? 0 : instruction.param}
          onBlur={sendParams}
        />
        <span>°C</span>
      </div>
    </div>
  );
};

export default TemperatureEditableInstr;
