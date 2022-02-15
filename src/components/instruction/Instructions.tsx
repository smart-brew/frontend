import React from 'react';
import { DataContext } from '../../contexts/dataContext';
import InstructionType from '../../types/RecipeData/InstructionType';
import InstructionBlock from '../block/InstructionBlock';
import InstructionBlockType from '../../types/RecipeData/InstructionBlockType';

interface Props {
  instructions: InstructionType[];
}

const Instructions: React.FC<Props> = ({ instructions }) => {
  const currentInstructionStatus = React.useContext(DataContext)
    ?.instruction || {
    currentInstruction: 61,
    currentValue: 0,
    status: 'WAITING',
  };

  const divideTheInstructions = (): Array<InstructionBlockType> => {
    console.log(instructions);
    const blocks = new Array<InstructionBlockType>();
    let currentBlockName = instructions[0].blockName;
    console.log(currentBlockName);
    let prevBlockInstructions = new Array<InstructionType>();
    let currentBlockInstructions = new Array<InstructionType>();

    instructions.forEach((instr) => {
      if (instr.blockName !== currentBlockName) {
        currentBlockName = instr.blockName;
        console.log(`New current name ${currentBlockName}`);
        prevBlockInstructions = [...currentBlockInstructions];
        currentBlockInstructions = new Array<InstructionType>();
        blocks.push({
          blockId: prevBlockInstructions[0].blockId,
          blockName: prevBlockInstructions[0].blockName,
          instructions: prevBlockInstructions,
        });
      }
      console.log(`Current instructions ${currentBlockInstructions}`);
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
    <div className="flex flex-col pl-12 px-8 py-3 mx-8 mb-3 space-y-6">
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
