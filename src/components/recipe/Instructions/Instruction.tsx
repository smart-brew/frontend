import React from 'react';

import InstructionType from '../../../types/RecipeData/InstructionType';
import { InstructionStatus } from '../../../types/SystemData';
import FullInstruction from './FullInstruction';
import HiddenInstruction from './HiddenInstruction';
import InstructionCodeNameMap from '../../../helper_scripts/InstructionCodeNameMap';

interface Props {
  instruction: InstructionType;
  status: InstructionStatus;
}

const Instruction: React.FC<Props> = ({ instruction, status }: Props) => {
  const codeNameMap = new InstructionCodeNameMap();
  if (status.currentInstruction === instruction.id) {
    return (
      <FullInstruction
        instruction={instruction}
        instructionName={codeNameMap.getInstructionName(instruction.codeName)}
        status={status}
      />
    );
  }
  return (
    <HiddenInstruction
      instruction={instruction}
      instructionName={codeNameMap.getInstructionName(instruction.codeName)}
    />
  );
};

export default Instruction;
