import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/shared/Button';
import { closePopup } from './PopupFunctions';
import { abortBrewing, pauseBrewing } from '../api/brew';
import { IdReturn } from '../api/helpers';

interface AbortPopupProps {
  pathPage: string;
  popupName: string;
  popupDescription: string;
  popupRef: React.RefObject<HTMLDivElement>;
  setPage: (page: string) => void;
  pageName: string;
  theState: string;
}

const AbortPopup: React.FC<AbortPopupProps> = ({
  pathPage,
  popupName,
  popupDescription,
  popupRef,
  setPage,
  pageName,
  theState,
}: // funcPar,
AbortPopupProps) => {
  const confirmPopupRef = React.useRef<HTMLDivElement>(null);

  return (
    <div
      className="w-3/5 rounded-2xl p-10 items-center justify-center content-center modal"
      ref={confirmPopupRef}
    >
      <h2 className="font-bold text-2xl p-3 pb-10">{popupName}</h2>
      <div className="justify-items-center text-xl">{popupDescription}</div>

      <div className="grid grid-cols-2 pt-8">
        {theState === 'Abort' ? (
          <Button
            className="w-full"
            title="Confirm"
            onClick={() => {
              pauseBrewing(0);
              setPage(pageName);
            }}
          />
        ) : (
          <Button
            className="w-full"
            title="Confirm"
            onClick={() => {
              abortBrewing(0);
              setPage(pageName);
            }}
          />
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

export default AbortPopup;
