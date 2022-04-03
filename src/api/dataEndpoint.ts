import { SystemData } from '../types/SystemData';
import { apiClient } from './client';

export const getBrewStatus = (): Promise<SystemData | null> => {
  return apiClient('GET /api/data');
};
