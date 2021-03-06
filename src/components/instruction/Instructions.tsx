import React from 'react';
import { useDataContext } from '../../contexts/dataContext';
import InstructionType from '../../types/RecipeData/InstructionType';
import InstructionBlock from '../block/InstructionBlock';
import InstructionBlockType from '../../types/RecipeData/InstructionBlockType';

interface Props {
  instructions: InstructionType[];
}

const Instructions: React.FC<Props> = ({ instructions }) => {
  const { instruction: currentInstructionStatus } = useDataContext();

  const divideTheInstructions = (): InstructionBlockType[] => {
    if (!instructions.length) {
      return [];
    }

    const blocks: InstructionBlockType[] = [];
    let currentBlockName = instructions[0].blockName;

    let prevBlockInstructions: InstructionType[] = [];
    let currentBlockInstructions: InstructionType[] = [];

    instructions.forEach((instr) => {
      if (instr.blockName !== currentBlockName) {
        currentBlockName = instr.blockName;

        prevBlockInstructions = [...currentBlockInstructions];
        currentBlockInstructions = [];
        blocks.push({
          blockId: prevBlockInstructions[0].blockId,
          blockName: prevBlockInstructions[0].blockName,
          instructions: prevBlockInstructions,
        });
      }

      currentBlockInstructions.push(instr);
    });

    blocks.push({
      blockId: currentBlockInstructions[0].blockId,
      blockName: currentBlockInstructions[0].blockName,
      instructions: currentBlockInstructions,
    });
    return blocks;
  };

  return (
    <div className="flex flex-col pl-12 pr-3 py-3 mx-5 mb-3 space-y-6">
      {divideTheInstructions().map((block) => (
        <InstructionBlock
          key={block.blockId}
          block={block}
          instructionStatus={currentInstructionStatus}
        />
      ))}
    </div>
  );
};

export default Instructions;
