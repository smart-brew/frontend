import FunctionTemplate from '../types/FunctionData/FunctionTemplate';
import { get } from './client';
import { supportedFunctions } from './endpoints';

export const getSupportedFunctions = async (): Promise<FunctionTemplate[]> => {
  return get(supportedFunctions);
};
