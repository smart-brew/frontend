export const openPopup = (popupRef: React.RefObject<HTMLDivElement>): void => {
  const confirmPopupNode = popupRef?.current;
  confirmPopupNode?.classList.add('modal-bg-active');
};
export const closePopup = (popupRef: React.RefObject<HTMLDivElement>): void => {
  const confirmPopupNode = popupRef?.current;
  confirmPopupNode?.classList.remove('modal-bg-active');
};
