import InstructionType from './InstructionType';

type InstructionBlockType = {
  blockId: number;
  blockName: string;
  instructions: Array<InstructionType>;
};

export default InstructionBlockType;
