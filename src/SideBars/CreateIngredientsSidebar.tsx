import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../components/shared/Button';
import Popup from '../Popups/Popup';
import { openPopup } from '../Popups/PopupFunctions';

interface Props {
  saveForm: () => void;
}

const CreateIngredientsSidebar: React.FC<Props> = ({ saveForm }: Props) => {
  const popupRef = React.useRef<HTMLDivElement>(null);
  const history = useHistory();

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
        <Popup
          onConfirm={() => history.push('/recipe')}
          title="Do you want to stop making new recipe?"
          description="By leaving this page, all the changes will be lost"
          ref={popupRef}
        />
      </div>
    </React.StrictMode>
  );
};

export default CreateIngredientsSidebar;
