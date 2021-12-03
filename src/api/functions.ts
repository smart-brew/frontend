import InstructionTemplate from '../types/FunctionData/InstructionTemplate';
import { get } from './client';
import { supportedFunctions } from './endpoints';

export const getSupportedFunctions = async (): Promise<
  InstructionTemplate[]
> => {
  return get(supportedFunctions);
};
