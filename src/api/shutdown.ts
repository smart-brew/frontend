import { shutdown, url } from './endpoints';

export const postShutDown = async (): Promise<void> => {
  await fetch(url(shutdown), { method: 'POST' }).catch((error) =>
    console.log(error)
  );
};
