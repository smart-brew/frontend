import React, { useRef } from 'react';
import FunctionType from '../../../types/FunctionData/FunctionType';
import ParamType from '../../../types/ParamType';

interface Props {
  instruction: FunctionType;
}

const UnloadEditableInstr: React.FC<Props> = ({ instruction }: Props) => {
  const options = ['Fermentables', 'Hops', 'Yeast', 'Other'];
  const selectRef = useRef<HTMLSelectElement>(null);

  const readParams = (): ParamType | null => {
    const selectNode = selectRef.current;
    if (selectNode != null) {
      return { device: selectNode.value, value: null };
    }
    return null;
  };

  return (
    <div className="text-center">
      <select className="border border-gray-300 px-2 w-2/3" ref={selectRef}>
        {options.map((ele, index) => {
          return <option value={ele.toUpperCase()}>{ele}</option>;
        })}
      </select>
    </div>
  );
};

export default UnloadEditableInstr;
