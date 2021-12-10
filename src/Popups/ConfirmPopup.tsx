import React from 'react';
import { Link } from 'react-router-dom';
import { IdReturn } from '../api/helpers';
import Button from '../components/shared/Button';
import ChangePage from './PopupComponents/ChangePage';
import PromiseFunction from './PopupComponents/PromiseFunction';
import SimpleFunction from './PopupComponents/SimpleFunction';
import { closePopup } from './PopupFunctions';

interface ConfirmPopupProps {
  pathPage?: string;
  popupName: string;
  popupDescription: string;
  popupRef: React.RefObject<HTMLDivElement>;
  setUseFunction?: () => void;
  setUseFunctionProm?: (parn: number) => Promise<IdReturn>;
  setParameterNumber?: number;
  setPage?: (page: string) => void;
  pageName?: string;
}

const ConfirmPopup: React.FC<ConfirmPopupProps> = ({
  pathPage,
  popupName,
  popupDescription,
  popupRef,
  setUseFunction,
  setUseFunctionProm,
  setParameterNumber,
  setPage,
  pageName,
}: // setPage,
// pageName,
ConfirmPopupProps) => {
  ConfirmPopup.defaultProps = {
    pathPage: undefined,
    setUseFunction: undefined,
    setUseFunctionProm: undefined,
    setParameterNumber: undefined,
    setPage: undefined,
    pageName: undefined,
  };
  const confirmPopupRef = React.useRef<HTMLDivElement>(null);

  return (
    <div
      className="w-3/5 rounded-2xl p-10 items-center justify-center content-center modal"
      ref={confirmPopupRef}
    >
      <h2 className="font-bold text-2xl p-3 pb-10">{popupName}</h2>
      <div className="justify-items-center text-xl">{popupDescription}</div>

      <div className=" pt-8">
        {pathPage ? (
          <ChangePage pathPage={pathPage} popupRef={popupRef} />
        ) : null}
        {setUseFunction ? (
          <SimpleFunction setUseFunction={setUseFunction} popupRef={popupRef} />
        ) : null}
        {setUseFunctionProm &&
        setParameterNumber &&
        setPage === undefined &&
        pageName === undefined ? (
          <PromiseFunction
            setUseFunctionProm={setUseFunctionProm}
            popupRef={popupRef}
            setParameterNumber={setParameterNumber}
          />
        ) : null}
        {setUseFunctionProm && setParameterNumber && setPage && pageName ? (
          <PromiseFunction
            setUseFunctionProm={setUseFunctionProm}
            popupRef={popupRef}
            setParameterNumber={setParameterNumber}
            setPage={setPage}
            pageName={pageName}
          />
        ) : null}
      </div>
    </div>
  );
};

export default ConfirmPopup;
