import { post } from './client';
import { shutdown } from './endpoints';

export const postShutDown = async (): Promise<void> => {
  await post(shutdown);
};
