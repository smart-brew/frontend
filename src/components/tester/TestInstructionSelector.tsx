import React from 'react';
import { functions } from '../../data/functions';
import InstructionTemplate from '../../types/FunctionData/InstructionTemplate';

interface Props {
  instrSelectedCallback: (selectedInstr: InstructionTemplate | null) => void;
}

const TestInstructionSelector: React.FC<Props> = ({
  instrSelectedCallback,
}) => {
  return (
    <div className="w-1/2 border border-gray-300 shadow-md rounded-2xl p-5 space-y-4">
      <span className="text-2xl font-bold m-8">Select instruction:</span>
      <div className="flex flex-row flex-wrap radio-toolbar">
        {functions.map((value, index) => {
          return (
            <div className="text-lg w-1/3 my-5">
              <input
                className=""
                type="radio"
                name="instructions"
                id={`instr_${value.id.toString()}`}
                onClick={() => {
                  instrSelectedCallback(value);
                }}
              />
              <label
                className="border border-gray-300 rounded-xl px-6 py-3 w-full"
                htmlFor={`instr_${value.id.toString()}`}
              >
                <span>{value.codeName}</span>
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default TestInstructionSelector;
