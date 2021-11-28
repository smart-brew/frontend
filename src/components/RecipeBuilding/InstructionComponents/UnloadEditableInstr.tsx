import React, { useRef } from 'react';
import FunctionType from '../../../types/FunctionData/FunctionType';
import ParamType from '../../../types/ParamType';
import InstructionTemplateType from '../../../types/FunctionData/InstructionTemplateType';
import EditableInstrRefType from '../../../types/RecipeData/EditableInstrRefType';
import EditableInstructionTemplateType from './EditableInstructionTemplateType';

interface Props {
  instruction: EditableInstructionTemplateType;
  onChange: (params: ParamType) => void;
}

const UnloadEditableInstr: React.FC<Props> = ({
  instruction,
  onChange,
}: Props) => {
  const options = ['Fermentables', 'Hops', 'Yeast', 'Other'];
  const selectRef = useRef<HTMLSelectElement>(null);

  const readParams = (): ParamType | null => {
    const selectNode = selectRef.current;
    if (selectNode != null) {
      return { device: selectNode.value, value: null };
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
    <div className="text-center">
      <select
        className="border border-gray-300 px-2 w-2/3"
        ref={selectRef}
        onChange={sendParams}
      >
        {options.map((ele, index) => {
          return <option value={ele.toUpperCase()}>{ele}</option>;
        })}
      </select>
    </div>
  );
};

export default UnloadEditableInstr;