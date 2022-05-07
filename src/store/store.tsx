import { atom } from 'recoil';
import { PopupProps } from '../components/popup/Popup';

export const popupState = atom<PopupProps | null>({
  key: 'popupState',
  default: null,
});
