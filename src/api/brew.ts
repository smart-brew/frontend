import { apiClient } from './client';
import { IdReturn } from './helpers';

export const startBrewing = async (
  recipeId: number
): Promise<IdReturn | null> => {
  return apiClient('PUT /api/brew/0/start', { recipeId });
};

export const pauseBrewing = async (
  brewId: number
): Promise<IdReturn | null> => {
  return apiClient('POST /api/brew/:id/pause', { id: brewId });
};

export const abortBrewing = async (
  brewId: number
): Promise<IdReturn | null> => {
  return apiClient('POST /api/brew/:id/abort', { id: brewId });
};

export const resumeBrewing = async (
  brewId: number
): Promise<IdReturn | null> => {
  return apiClient('POST /api/brew/:id/resume', { id: brewId });
};

export const confirmManualInstruction = async (
  brewId: number,
  instructionId: number
): Promise<IdReturn | null> => {
  return apiClient('POST /api/brew/:brewId/instruction/:instructionId/done', {
    brewId,
    instructionId,
  });
};
