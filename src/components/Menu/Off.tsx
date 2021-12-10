import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { postShutDown } from '../../api/shutdown';
import { openPopup } from '../../Popups/PopupFunctions';
import ConfirmPopup from '../../Popups/ConfirmPopup';

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
      <div>
        <div className="modal-bg" ref={popupRef} style={{ margin: 0 }}>
          <ConfirmPopup
            pathPage="/"
            popupName="Do you want to turm off the whole system?"
            popupDescription="By confirming this, the whole system will be shut down"
            popupRef={popupRef}
            setUseFunction={postShutDown}
          />
        </div>
      </div>
    </>
  );
};

export default Off;
