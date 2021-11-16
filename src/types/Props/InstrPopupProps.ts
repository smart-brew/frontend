import FunctionListType from '../FunctionData/FunctionListType';
import FunctionType from '../FunctionData/FunctionType';
import InstructionTemplateListType from '../FunctionData/InstructionTemplateListType';
import InstructionTemplateType from '../FunctionData/InstructionTemplateType';

interface InstrPopupProps {
  functions: InstructionTemplateListType;
  callback: (arg: InstructionTemplateType) => undefined;
}

export default InstrPopupProps;
