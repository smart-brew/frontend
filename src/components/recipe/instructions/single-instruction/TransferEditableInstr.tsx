import React from 'react';

import ParamType from '../../../../types/ParamType';
import EditableInstructionTemplateType from './EditableInstructionTemplateType';

interface Props {
  instruction: EditableInstructionTemplateType;
  onChange: (params: ParamType) => void;
}

const TransferEditableInstr: React.FC<Props> = ({
  instruction,
  onChange,
}: Props) => {
  const selectRef = React.useRef<HTMLSelectElement>(null);

  const options = [{ value: 1, label: 'Pump 1', optionCodeName: 'PUMP_1' }];

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

  const returnValue = (): number => {
    const myOption = options.find((element) => {
      return element.optionCodeName === instruction.optionCodeName;
    });
    return myOption ? myOption.value : options[0].value;
  };

  return (
    <div className="flex flex-row justify-evenly text-lg items-center">
      <select
        className="border border-gray-300 px-2 w-2/3"
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
    </div>
  );
};

export default TransferEditableInstr;
