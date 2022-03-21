import React from 'react';

import ParamType from '../../../../types/ParamType';
import EditableInstructionTemplateType from './EditableInstructionTemplateType';
import { getSelectedOption } from './helper';

interface Props {
  instruction: EditableInstructionTemplateType;
  onChange: (params: ParamType) => void;
}

const OPTIONS = [{ value: 1, label: 'Pump 1', optionCodeName: 'PUMP_1' }];

const TransferEditableInstr: React.FC<Props> = ({
  instruction,
  onChange,
}: Props) => {
  const selectRef = React.useRef<HTMLSelectElement>(null);

  const readParams = (): ParamType | null => {
    const selectNode = selectRef.current;
    const paramObj: ParamType = { optionCodeName: 'NONE', value: 0 };
    if (selectNode != null) {
      paramObj.optionCodeName = `PUMP_${selectNode.value.toString()}`;
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
    <div className="flex flex-row justify-evenly text-lg items-center">
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
    </div>
  );
};

export default TransferEditableInstr;
