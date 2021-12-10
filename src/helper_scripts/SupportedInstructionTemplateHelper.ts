import InstructionTemplate from '../types/FunctionData/InstructionTemplate';

class SupportedInstructionTemplateHelper {
  functionMap = new Map<number, InstructionTemplate>();

  functionArray = new Array<InstructionTemplate>();

  constructor(functions: InstructionTemplate[]) {
    functions.forEach((func) => {
      this.functionMap.set(func.id, func);
    });
    this.functionArray = functions;
  }

  getFunctionStructure(index: number): InstructionTemplate | null {
    return this.functionMap.get(index) || null;
  }

  getAllFunctions(): Array<InstructionTemplate> {
    return this.functionArray;
  }
}

export default SupportedInstructionTemplateHelper;
