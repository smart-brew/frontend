import React from 'react';
import FullInstruction from './FullInstruction';
import HiddenInstruction from './HiddenInstruction';
import Props from '../../../types/InstructionProps';

const Instruction: React.FC<Props> = ({ instruction, state }: Props) => {
  if (state?.inProgress) {
    return <FullInstruction instruction={instruction} state={state} />;
  }
  return <HiddenInstruction instruction={instruction} state={state} />;
};

export default Instruction;
