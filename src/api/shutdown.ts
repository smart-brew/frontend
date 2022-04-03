import { apiClient } from './client';

export const postShutDown = async (): Promise<void | null> => {
  await apiClient('POST /api/shutdown');
};
