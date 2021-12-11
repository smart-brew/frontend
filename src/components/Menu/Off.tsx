import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { usePopup } from '../../contexts/popupContext';
import { postShutDown } from '../../api/shutdown';

const Off: React.FC = () => {
  const popup = usePopup();

  return (
    <>
      <div className="flex-grow" />
      <button
        type="button"
        className="w-20 border-l border-gray-300 justify-center items-center flex"
        onClick={() => {
          popup?.open({
            title: 'Do you want to turm off the whole system?',
            description:
              'By confirming this, the whole system will be shut down',
            onConfirm: postShutDown,
          });
        }}
      >
        <FontAwesomeIcon icon={faPowerOff} size="2x" />
      </button>
    </>
  );
};

export default Off;
