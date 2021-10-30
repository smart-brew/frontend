import React from 'react';
import BlockType from '../../../types/BlockType';
import Instruction from '../Instructions/Instruction';

const Block: React.FC<BlockType> = ({ instructions, name }: BlockType) => {
  const instructionsShow = instructions.map((instr, i) => {
    return (
      <Instruction
        // eslint-disable-next-line react/no-array-index-key
        key={i}
        id={instr.id}
        name={instr.name}
        parentBlockId={instr.parentBlockId}
        currParam={instr.currParam}
        targetParam={instr.targetParam}
        start={instr.start}
        end={instr.end}
        orderNum={instr.orderNum}
        chamberId={instr.chamberId}
      />
    );
  });

  return (
    <div className="content-center justify-center items-center text-center space-y-5 bg-yellow-100 border-2 border-gray-300 rounded-3xl p-3">
      <h2 className="text-2xl font-bold">{name}</h2>
      <div>{instructionsShow}</div>
    </div>
  );
};

export default Block;
