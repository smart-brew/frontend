import React, { useRef } from 'react';

import ParamType from '../../../../types/ParamType';
import EditableInstructionTemplateType from './EditableInstructionTemplateType';

interface Props {
  instruction: EditableInstructionTemplateType;
  onChange: (params: ParamType) => void;
}

const UnloadEditableInstr: React.FC<Props> = ({
  instruction,
  onChange,
}: Props) => {
  const selectRef = useRef<HTMLSelectElement>(null);

  const readParams = (): ParamType | null => {
    const selectNode = selectRef.current;
    if (selectNode != null) {
      return { optionCodeName: selectNode.value, value: null };
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
    <div className="text-center text-lg">
      <select
        className="border border-gray-300 p-2 w-2/3 rounded-lg"
        ref={selectRef}
        onChange={sendParams}
      >
        {instruction.options.map((option) => {
          return (
            <option
              value={option.codeName}
              selected={instruction.optionCodeName === option.codeName}
            >
              {option.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default UnloadEditableInstr;
