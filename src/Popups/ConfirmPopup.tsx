import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/shared/Button';
import { closePopup } from './PopupFunctions';

interface ConfirmPopupProps {
  pathPage: string;
  popupName: string;
  popupDescription: string;
  popupRef: React.RefObject<HTMLDivElement>;
  setUseFunction?: () => void;
}

const ConfirmPopup: React.FC<ConfirmPopupProps> = ({
  pathPage,
  popupName,
  popupDescription,
  popupRef,
  setUseFunction,
}: // funcPar,
ConfirmPopupProps) => {
  ConfirmPopup.defaultProps = {
    setUseFunction: undefined,
  };
  const confirmPopupRef = React.useRef<HTMLDivElement>(null);

  return (
    <div
      className="w-3/5 rounded-2xl p-10 items-center justify-center content-center modal"
      ref={confirmPopupRef}
    >
      <h2 className="font-bold text-2xl p-3 pb-10">{popupName}</h2>
      <div className="justify-items-center text-xl">{popupDescription}</div>

      <div className="grid grid-cols-2 pt-8">
        {typeof setUseFunction !== 'undefined' ? (
          <Button
            className="w-full"
            title="Confirm"
            onClick={() => setUseFunction()}
          />
        ) : (
          <Link to={pathPage}>
            <Button className="w-full" title="Confirm" />
          </Link>
        )}

        <Button
          cancel
          title="Cancel"
          onClick={() => {
            closePopup(popupRef);
          }}
        />
      </div>
    </div>
  );
};

export default ConfirmPopup;
