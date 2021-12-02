import FunctionTemplate from '../types/FunctionData/FunctionTemplate';

class SupportedInstructionTemplateHelper {
  functionMap = new Map<number, FunctionTemplate>();

  functionArray = new Array<FunctionTemplate>();

  constructor(functions: FunctionTemplate[]) {
    functions.forEach((func) => {
      this.functionMap.set(func.id, func);
    });
    this.functionArray = functions;
  }

  getFunctionStructure(index: number): FunctionTemplate | null {
    return this.functionMap.get(index) || null;
  }

  getAllFunctions(): Array<FunctionTemplate> {
    return this.functionArray;
  }
}

export default SupportedInstructionTemplateHelper;
