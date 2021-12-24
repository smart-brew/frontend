import React from 'react';

import Button from '../../components/shared/Button';

interface Props {
  onConfirm: () => void;
  onCancel: () => void;
}

const PopupButtons: React.FC<Props> = ({ onConfirm, onCancel }: Props) => {
  return (
    <div className="flex flex-row justify-center">
      <Button
        className="w-2/5 mr-4"
        title="Confirm"
        onClick={() => onConfirm()}
      />

      <Button
        neutral
        className="w-2/5"
        title="Cancel"
        onClick={() => {
          onCancel();
        }}
      />
    </div>
  );
};

export default PopupButtons;
