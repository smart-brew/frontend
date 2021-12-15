import { post, put } from './client';
import {
  abortBrew,
  confirmInstructionUrl,
  pauseBrew,
  resumeBrew,
  startBrew,
} from './endpoints';
import { IdReturn } from './helpers';

export const startBrewing = async (recipeId: number): Promise<IdReturn> => {
  return put(startBrew, { recipeId });
};

export const pauseBrewing = async (brewId: number): Promise<IdReturn> => {
  return post(pauseBrew, { id: brewId });
};

export const abortBrewing = async (brewId: number): Promise<IdReturn> => {
  return post(abortBrew, { id: brewId });
};

export const resumeBrewing = async (brewId: number): Promise<IdReturn> => {
  return post(resumeBrew, { id: brewId });
};

export const confirmManualInstruction = async (
  brewId: number,
  instructionId: number
): Promise<IdReturn> => {
  return post(confirmInstructionUrl, { brewId, instructionId });
};
