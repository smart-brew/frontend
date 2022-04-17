import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Button from '../shared/Button';

import { closePopup } from './PopupFunctions';

export interface PopupProps {
  /** Title of the popup */
  title: string;

  /** Description of the popup */
  description: string;

  /** Function to call when the user presses call to action button */
  onConfirm: () => void;

  /** Function to call when the popus closes */
  onClose?: () => void;

  /**
   * Call-to-action button text
   * @default "Confirm"
   * */
  buttonText?: string;

  /**
   * Call-to-action button type
   * @default 'primary'
   */
  buttonType?: 'primary' | 'secondary' | 'neutral' | 'warn' | 'danger';

  /**
   * "call-to-action" - two buttons with Call-to-action button and "Cancel"
   *
   * "info" - single button with "Close"
   * @default "call-to-action"
   */
  popupType?: 'call-to-action' | 'info';
}

const Popup = React.forwardRef<HTMLDivElement, PopupProps>(
  (
    {
      title,
      description,
      onConfirm,
      onClose,
      buttonType = 'primary',
      buttonText = 'Confirm',
      popupType = 'call-to-action',
    }: PopupProps,
    reference
  ) => {
    const ref = reference as React.MutableRefObject<HTMLDivElement>;

    const neutralButtonText =
      popupType === 'call-to-action' ? 'Cancel' : 'Close';

    const handleClose = (): void => {
      closePopup(ref);
      onClose?.();
    };

    const handleClickOutside = (
      event:
        | React.MouseEvent<HTMLDivElement>
        | React.KeyboardEvent<HTMLDivElement>
    ): void => {
      if (event.target === ref.current) {
        handleClose();
      }
    };

    return (
      <div
        className="modal-bg cursor-default m-0"
        ref={ref}
        role="button"
        tabIndex={-1}
        onKeyPress={handleClickOutside}
        onClick={handleClickOutside}
      >
        <div className="w-3/5 rounded-2xl p-10 items-center justify-center content-center modal relative">
          <h2 className="font-bold text-2xl p-3 pb-10">{title}</h2>
          <div className="justify-items-center text-xl">{description}</div>

          <div className="pt-8">
            <div className="flex flex-row justify-center">
              {popupType === 'call-to-action' && (
                <Button
                  danger={buttonType === 'danger'}
                  neutral={buttonType === 'neutral'}
                  secondary={buttonType === 'secondary'}
                  warn={buttonType === 'warn'}
                  className="w-2/5 mr-4"
                  title={buttonText}
                  onClick={onConfirm}
                />
              )}

              <Button
                neutral
                className="w-2/5"
                title={neutralButtonText}
                onClick={handleClose}
              />
            </div>
          </div>

          <button
            type="button"
            className="absolute top-2 right-2 m-1 w-8 h-8 flex justify-center items-center"
            onClick={handleClose}
          >
            <FontAwesomeIcon icon={faTimes} size="2x" />
          </button>
        </div>
      </div>
    );
  }
);

export default Popup;
