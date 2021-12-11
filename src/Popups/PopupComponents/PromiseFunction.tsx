import React from 'react';
import { Link } from 'react-router-dom';
import { IdReturn } from '../../api/helpers';
import Button from '../../components/shared/Button';
import { closePopup } from '../PopupFunctions';

interface Props {
  setUseFunctionProm: (parn: number) => Promise<IdReturn>;
  setParameterNumber: number;
  popupRef: React.RefObject<HTMLDivElement>;

  setPage?: (page: string) => void;
  pageName?: string;
}

const PromiseFunction: React.FC<Props> = ({
  popupRef,
  setUseFunctionProm,
  setParameterNumber,
  setPage,
  pageName,
}: Props) => {
  PromiseFunction.defaultProps = {
    setPage: undefined,
    pageName: undefined,
  };
  console.log('jop');
  return (
    <div className="grid grid-cols-2">
      {setPage && pageName ? (
        <Button
          className="w-full"
          title="Confirm"
          onClick={() => {
            setUseFunctionProm(setParameterNumber);
            setPage(pageName);
          }}
        />
      ) : (
        <Button
          className="w-full"
          title="Confirm"
          onClick={() => {
            setUseFunctionProm(setParameterNumber);
            closePopup(popupRef);
            window.location.reload(); // page reload
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
  );
};

export default PromiseFunction;
