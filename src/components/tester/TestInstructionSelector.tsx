import React from 'react';
import { useInstructionsContext } from '../../contexts/instructionsContext';
import InstructionTemplate from '../../types/FunctionData/InstructionTemplate';

interface Props {
  onInstrSelected: (selectedInstr: InstructionTemplate | null) => void;
}

const TestInstructionSelector: React.FC<Props> = ({ onInstrSelected }) => {
  const { data: instructions } = useInstructionsContext();

  return (
    <div className="w-full border border-gray-300 shadow-md rounded-2xl p-5 space-y-4">
      <span className="text-2xl font-bold m-8">Select instruction:</span>
      <div className="flex flex-row flex-wrap radio-toolbar">
        {instructions.map((instruction) => {
          return (
            <div key={instruction.codeName} className="text-lg w-1/3 my-5">
              <input
                className=""
                type="radio"
                name="instructions"
                id={`instr_${instruction.id.toString()}`}
                onClick={() => {
                  onInstrSelected(instruction);
                }}
              />
              <label
                className="border border-gray-300 rounded-xl px-6 py-3 w-full"
                htmlFor={`instr_${instruction.id.toString()}`}
              >
                <span>{instruction.codeName}</span>
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default TestInstructionSelector;
