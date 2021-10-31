import React from 'react';
import BlockType from '../../../types/BlockType';
import Instruction from '../Instructions/Instruction';
import InstructionStateMap from '../../../helper_scripts/InstructionStateMap';
import TimeHelper from '../../../helper_scripts/TimeHelper';

const Block: React.FC<BlockType> = ({ instructions, name }: BlockType) => {
  let hasCurrentInstr = false;
  const instructionsShow = instructions.map((instr, i) => {
    const { start, end } = instr;
    const instrStyle = new InstructionStateMap().getStyle(
      TimeHelper.getState(start, end)
    );
    if (instrStyle?.inProgress) {
      hasCurrentInstr = true;
    }
    return (
      <Instruction
        // eslint-disable-next-line react/no-array-index-key
        instruction={instr}
        state={instrStyle}
      />
    );
  });

  return (
    <div
      className={`justify-center items-center text-center space-y-5 border-2 border-gray-300 rounded-3xl p-3 ${
        hasCurrentInstr ? 'active-block' : 'inactive-block'
      }`}
    >
      <h2 className="text-2xl font-bold">{name}</h2>
      <div>{instructionsShow}</div>
    </div>
  );
};

export default Block;
