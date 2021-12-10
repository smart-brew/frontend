import React, { useState } from 'react';

import ParamType from '../../../types/ParamType';
import EditableInstructionTemplateType from './EditableInstructionTemplateType';

interface Props {
  instruction: EditableInstructionTemplateType;
  onChange: (params: ParamType) => void;
}

const TransferEditableInstr: React.FC<Props> = ({
  instruction,
  onChange,
}: Props) => {
  const [firstSelected, setFirstSelected] = useState(1);
  const select1Ref = React.useRef<HTMLSelectElement>(null);
  const select2Ref = React.useRef<HTMLSelectElement>(null);

  const readParams = (): ParamType | null => {
    const select1Node = select1Ref.current;
    const select2Node = select2Ref.current;
    if (select1Node != null && select2Node != null) {
      if (parseInt(select1Node?.value, 10) < parseInt(select2Node?.value, 10)) {
        return { optionCodeName: `PUMP_${select1Node?.value}`, value: null };
      }
    }
    return null;
  };

  const sendParams = (): void => {
    const params = readParams();
    if (params !== null) {
      onChange(params);
    }
  };

  const handleFirstSelection = (value: number): void => {
    setFirstSelected(value);
    sendParams();
  };

  const options = [1, 2];

  return (
    <div className="flex flex-row justify-evenly">
      <select
        className="border border-gray-300 px-2"
        ref={select1Ref}
        onChange={(e) => {
          handleFirstSelection(parseInt(e.currentTarget.value, 10));
        }}
      >
        <option
          value={1}
          selected={
            parseInt(
              instruction.optionCodeName?.split('_')
                ? instruction.optionCodeName?.split('_')[1]
                : '0',
              10
            ) === 1
          }
        >
          Chamber 1
        </option>
        <option
          value={2}
          selected={
            parseInt(
              instruction.optionCodeName?.split('_')
                ? instruction.optionCodeName?.split('_')[1]
                : '0',
              10
            ) === 2
          }
        >
          Chamber 2
        </option>
      </select>
      <span>to</span>
      <select
        className="border border-gray-300 px-2"
        ref={select2Ref}
        onChange={sendParams}
      >
        {options.map((value) => {
          if (value !== firstSelected) {
            return <option value={value}>Chamber {value}</option>;
          }
          return null;
        })}
      </select>
    </div>
  );
};

export default TransferEditableInstr;
