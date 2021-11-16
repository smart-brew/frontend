import InstructionTemplateType from '../FunctionData/InstructionTemplateType';

interface InstrSelectionProps {
  instruction: InstructionTemplateType;
  onClick: (arg: InstructionTemplateType) => undefined;
}

export default InstrSelectionProps;
