import React, { useRef } from 'react';
import FunctionType from '../../../types/FunctionData/FunctionType';
import ParamType from '../../../types/ParamType';
import InstructionTemplateType from '../../../types/FunctionData/InstructionTemplateType';
import EditableInstrRefType from '../../../types/RecipeData/EditableInstrRefType';

interface Props {
  instruction: InstructionTemplateType;
  ref: React.Ref<EditableInstrRefType>;
}

const TemperatureEditableInstr: React.FC<Props> = ({
  instruction,
  ref,
}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const selectRef = useRef<HTMLSelectElement>(null);

  const readParams = (): ParamType | null => {
    const inputNode = inputRef.current;
    const selectNode = selectRef.current;
    const paramObj = { device: 'NONE', value: 0 };
    if (inputNode != null && selectNode != null) {
      paramObj.value = parseInt(inputNode?.value, 10);
      paramObj.device = `TEMP_${selectNode.value.toString()}`;
      return paramObj;
    }
    return null;
  };

  return (
    <div className="flex flex-row justify-evenly space-x-8">
      <select className="border border-gray-300 px-2" ref={selectRef}>
        <option value={1}>Chamber 1</option>
        <option value={2}>Chamber 2</option>
      </select>
      <div className="flex flex-row space-x-3">
        <span>Value:</span>
        <input
          className="w-1/4 border border-gray-300 px-2"
          type="number"
          ref={inputRef}
        />
        <span>°C</span>
      </div>
    </div>
  );
};

export default TemperatureEditableInstr;
