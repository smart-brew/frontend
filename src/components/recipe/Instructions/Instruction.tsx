import React from 'react';

import InstructionType from '../../../types/RecipeData/InstructionType';
import { InstructionStatus } from '../../../types/SystemData';
import FullInstruction from './FullInstruction';
import HiddenInstruction from './HiddenInstruction';

interface Props {
  instruction: InstructionType;
  status: InstructionStatus;
}

const Instruction: React.FC<Props> = ({ instruction, status }: Props) => {
  if (status.currentInstruction === instruction.id) {
    return <FullInstruction instruction={instruction} status={status} />;
  }
  return <HiddenInstruction instruction={instruction} />;
};

export default Instruction;
