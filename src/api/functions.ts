import InstructionTemplate from '../types/FunctionData/InstructionTemplate';
import { Instruction } from '../types/SystemData';
import { get, post } from './client';
import {
  supportedFunctions,
  sendInstructionTester as sendInstructionTesterEndpoint,
} from './endpoints';
import { IdReturn } from './helpers';

export const getSupportedFunctions = async (): Promise<
  InstructionTemplate[]
> => {
  return get(supportedFunctions);
};

export const sendInstructionTester = async (
  data: Instruction
): Promise<IdReturn> => {
  return post(sendInstructionTesterEndpoint, {}, data);
};
