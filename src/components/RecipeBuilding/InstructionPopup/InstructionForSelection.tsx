import React from 'react';
import FunctionType from '../../../types/FunctionData/FunctionType';

const InstructionForSelection: React.FC<FunctionType> = (
  instruction: FunctionType
) => {
  const { name, description } = instruction;
  return (
    <div className="w-4/5 h-28 border-2 shadow rounded-2xl p-3 justify-center content-center items-center mb-5">
      <h3 className="font-bold text-lg mb-2">{name}</h3>
      <span className="italic">{description}</span>
    </div>
  );
};

export default InstructionForSelection;
