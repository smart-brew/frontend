import React, { useRef } from 'react';
import FunctionType from '../../../types/FunctionData/FunctionType';
import ParamType from '../../../types/ParamType';

interface Props {
  instruction: FunctionType;
}

const TemperatureEditableInstr: React.FC<Props> = ({ instruction }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const readParams = (): ParamType => {
    const inputNode = inputRef.current;
    const paramObj = { value: 0 };
    if (inputNode?.value != null) {
      paramObj.value = parseInt(inputNode?.value, 10);
    }
    return paramObj;
  };

  return (
    <div className="flex flex-row space-x-10 justify-center align-middle">
      <select className="border border-gray-300 px-2">
        <option>Chamber 1</option>
        <option>Chamber 2</option>
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
