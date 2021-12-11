import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { postShutDown } from '../../api/shutdown';
import { openPopup } from '../../Popups/PopupFunctions';
import Popup from '../../Popups/Popup';

const Off: React.FC = () => {
  const popupRef = React.useRef<HTMLDivElement>(null);
  return (
    <>
      <div className="flex-grow" />
      <button
        type="button"
        className="w-20 border-l border-gray-300 justify-center items-center flex"
        onClick={() => {
          openPopup(popupRef);
        }}
      >
        <FontAwesomeIcon icon={faPowerOff} size="2x" />
      </button>

      <Popup
        title="Do you want to turm off the whole system?"
        description="By confirming this, the whole system will be shut down"
        ref={popupRef}
        onConfirm={postShutDown}
      />
    </>
  );
};

export default Off;
