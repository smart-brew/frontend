import InstructionTemplate from '../types/FunctionData/InstructionTemplate';
import { Instruction } from '../types/SystemData';
import { apiClient } from './client';
import { IdReturn } from './helpers';

export const getSupportedFunctions = async (): Promise<
  InstructionTemplate[] | null
> => {
  return apiClient('GET /api/function');
};

export const sendInstructionTester = async (
  data: Instruction
): Promise<IdReturn | null> => {
  return apiClient('POST /api/instruction', {}, data);
};
