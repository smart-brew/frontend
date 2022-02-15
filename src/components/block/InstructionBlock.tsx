import React from 'react';

import Instruction from '../instruction/Instruction';
import { InstructionStatus } from '../../types/SystemData';
import InstructionBlockType from '../../types/RecipeData/InstructionBlockType';

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
    <div
      className="border rounded-xl space-y-2 py-5 px-3"
      style={{
        background: 'rgba(254, 208, 8, 0.1)',
        borderColor: 'rgba(254, 208, 8, 0.5)',
      }}
    >
      <div className="text-xl font-bold pb-3">{blockName}</div>
      {instructions.map((instr) => {
        return (
          <Instruction
            key={instr.id}
            instruction={instr}
            status={instructionStatus}
          />
        );
      })}
    </div>
  );
};

export default InstructionBlock;
