import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/shared/Button';
import { closePopup } from '../PopupFunctions';

interface Props {
  pathPage: string;
  popupRef: React.RefObject<HTMLDivElement>;
}

const ChangePage: React.FC<Props> = ({ pathPage, popupRef }: Props) => {
  return (
    <div className="grid grid-cols-2">
      <Link to={pathPage}>
        <Button className="w-full" title="Confirm" />
      </Link>

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

export default ChangePage;
