import React from 'react';
import InstructionTemplate from '../../../types/FunctionData/InstructionTemplate';

interface InstrSelectionProps {
  instruction: InstructionTemplate;
  onClick: (arg: InstructionTemplate) => void;
}

const InstructionForSelection: React.FC<InstrSelectionProps> = ({
  instruction,
  onClick,
}: InstrSelectionProps) => {
  const { name, description } = instruction;

  return (
    <button
      type="button"
      className="w-4/5 h-28 shadow rounded-2xl p-3 justify-center content-center items-center mb-5"
      onClick={() => {
        onClick(instruction);
      }}
    >
      <h3 className="font-bold text-xl mb-2">{name}</h3>
      <span className="text-lg italic">{description}</span>
    </button>
  );
};

export default InstructionForSelection;
