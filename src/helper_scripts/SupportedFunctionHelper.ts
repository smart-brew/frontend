import FunctionListType from '../types/FunctionData/FunctionListType';
import FunctionType from '../types/FunctionData/FunctionType';

class SupportedFunctionHelper {
  functionMap = new Map<number, FunctionType>();
  functionArray = new Array<FunctionType>();

  constructor(functions: FunctionListType) {
    for (let func of functions.functionsArray) {
      this.functionMap.set(func.id, func);
    }
    this.functionArray = functions.functionsArray;
  }

  getFunctionStructure(index: number): FunctionType | null {
    return this.functionMap.get(index) || null;
  }

  getAllFunctions(): Array<FunctionType> {
    return this.functionArray;
  }
}

export default SupportedFunctionHelper;
