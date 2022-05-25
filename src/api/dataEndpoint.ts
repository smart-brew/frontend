import { setRecoil } from 'recoil-nexus';
import { popupState } from '../store/store';
import { SystemData } from '../types/SystemData';
import { apiClient } from './client';

export const getBrewStatus = (): Promise<SystemData | null> => {
  return apiClient('GET /api/data').then((data) => {
    if (data?.brewStatus === 'ERROR') {
      setRecoil(popupState, {
        title: 'System error',
        description: data.errorMessage ?? 'Unknown error',
        buttonType: 'secondary',
        buttonText: 'Retry',
        onConfirm: () => {
          apiClient('POST /api/brew/0/reset').then(() => {
            window.location.href = '/';
          });
        },
      });
    }

    return data;
  });
};
