import React from 'react';

import Instruction from '../Instructions/Instruction';
import { InstructionStatus } from '../../../types/SystemData';
import InstructionBlockType from '../../../types/RecipeData/InstructionBlockType';

interface Props {
  block: InstructionBlockType;
  instructionStatus: InstructionStatus;
}

const InstructionBlock: React.FC<Props> = ({
  block,
  instructionStatus,
}: Props) => {
  const { blockName, instructions } = block;
  return (
    <div className="bg-yellow-100 border-2 border-gray-500 shadow rounded-xl space-y-2 py-5 px-3">
      <div className="text-xl font-bold pb-3">{blockName}</div>
      {instructions.map((instr) => {
        return <Instruction instruction={instr} status={instructionStatus} />;
      })}
    </div>
  );
};

export default InstructionBlock;
