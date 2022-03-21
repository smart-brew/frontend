import React from 'react';
import Button from '../../shared/Button';

interface Props {
  infoGroup: JSX.Element[];
  onClose: () => void;
  onConfirm: () => void;
}

export const StartBrewingPopup: React.FC<Props> = ({
  infoGroup,
  onClose,
  onConfirm,
}) => {
  return (
    <div
      className="fixed z-10 inset-0"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      />

      <span
        className="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true"
      >
        &#8203;
      </span>

      <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all w-1/2 sm:align-middle">
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start text-3xl font-semibold">
            Ingredients to prepare:
          </div>
        </div>
        <div className="bg-gray-50 px-8 py-6 justify-center text-center">
          <div className="">{infoGroup}</div>

          <div className="flex flex-col  mt-8">
            <Button
              title="Confirm"
              onClick={() => onConfirm()}
              className="w-full justify-center text-center"
            />
            <Button
              neutral
              title="Cancel"
              onClick={() => onClose()}
              className="w-full justify-center text-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
