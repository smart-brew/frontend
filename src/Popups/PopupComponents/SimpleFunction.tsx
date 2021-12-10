import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/shared/Button';
import { closePopup } from '../PopupFunctions';

interface Props {
  setUseFunction: () => void;
  popupRef: React.RefObject<HTMLDivElement>;
}

const SimpleFunction: React.FC<Props> = ({
  setUseFunction,
  popupRef,
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
          closePopup(popupRef);
        }}
      />
    </div>
  );
};

export default SimpleFunction;
