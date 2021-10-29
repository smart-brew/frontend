import React from 'react';
import InstrType from '../../types/InstrType';
import InstructionStateMap from '../../helper_scripts/InstructionStateMap';
import TimeHelper from '../../helper_scripts/TimeHelper';
import FullInstruction from './FullInstruction';
import HiddenInstruction from './HiddenInstruction';

const Instruction: React.FC<InstrType> = (instr: InstrType) => {
  const { start, end } = instr;
  const instrStyle = new InstructionStateMap().getStyle(
    TimeHelper.getState(start, end)
  );

  if (instrStyle?.inProgress) {
    return <FullInstruction instruction={instr} state={instrStyle} />;
  }
  return <HiddenInstruction instruction={instr} state={instrStyle} />;
};

export default Instruction;
