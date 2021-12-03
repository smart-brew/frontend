import React from 'react';
import FunctionTemplate from '../../../types/FunctionData/FunctionTemplate';

interface InstrSelectionProps {
  instruction: FunctionTemplate;
  onClick: (arg: FunctionTemplate) => void;
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
      <h3 className="font-bold text-lg mb-2">{name}</h3>
      <span className="italic">{description}</span>
    </button>
  );
};

export default InstructionForSelection;
