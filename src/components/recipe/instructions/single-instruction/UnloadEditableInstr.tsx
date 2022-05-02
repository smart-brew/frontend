import React, { useRef } from 'react';

import ParamType from '../../../../types/ParamType';
import EditableInstructionTemplateType from './EditableInstructionTemplateType';

interface Props {
  instruction: EditableInstructionTemplateType;
  onChange: (params: ParamType, error: boolean) => void;
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
      onChange(params, true);
    }
  };

  return (
    <div className="text-center text-lg">
      <select
        className="border border-gray-300 p-2 w-2/3 rounded-lg"
        ref={selectRef}
        onChange={sendParams}
        defaultValue={instruction.optionCodeName ?? ''}
      >
        {instruction.options.map((option) => (
          <option key={option.codeName} value={option.codeName}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default UnloadEditableInstr;
