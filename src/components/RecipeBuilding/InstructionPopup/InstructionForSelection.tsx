import React from 'react';
import InstructionTemplateType from '../../../types/FunctionData/InstructionTemplateType';

interface InstrSelectionProps {
  instruction: InstructionTemplateType;
  onClick: (arg: InstructionTemplateType) => void;
}

const InstructionForSelection: React.FC<InstrSelectionProps> = ({
  instruction,
  onClick,
}: InstrSelectionProps) => {
  const { name, description } = instruction;

  return (
    <button
      type="button"
      className="w-4/5 h-28 border-2 shadow rounded-2xl p-3 justify-center content-center items-center mb-5"
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
