import React from 'react';

import Button from '../../components/shared/Button';

interface Props {
  onConfirm: () => void;
  closePopup: () => void;
}

const SimpleFunction: React.FC<Props> = ({
  onConfirm: setUseFunction,
  closePopup,
}: Props) => {
  return (
    <div className="grid grid-cols-2">
      <Button
        className="w-full"
        title="Confirm"
        onClick={() => setUseFunction()}
      />

      <Button
        cancel
        title="Cancel"
        onClick={() => {
          closePopup();
        }}
      />
    </div>
  );
};

export default SimpleFunction;
