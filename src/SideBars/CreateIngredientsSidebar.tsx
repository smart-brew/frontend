import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/shared/Button';
import ConfirmPopup from '../Popups/ConfirmPopup';
import { openPopup } from '../Popups/PopupFunctions';

interface Props {
  saveForm: () => void;
}

const CreateIngredientsSidebar: React.FC<Props> = ({ saveForm }: Props) => {
  const popupRef = React.useRef<HTMLDivElement>(null);
  return (
    <React.StrictMode>
      <div className="context h-2/3" />
      <div className="buttons flex flex-col mx-10">
        <Button title="Next step" onClick={() => saveForm()} />
        <Button
          cancel
          className="w-full"
          title="Cancel"
          onClick={() => openPopup(popupRef)}
        />
        <div>
          <div className="modal-bg" ref={popupRef} style={{ margin: 0 }}>
            <ConfirmPopup
              pathPage="/recipe"
              popupName="Do you want to stop making new recipe?"
              popupDescription="By leaving this page, all the changes will be lost"
              popupRef={popupRef}
            />
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
};

export default CreateIngredientsSidebar;
