import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { postShutDown } from '../../api/shutdown';

const Off: React.FC = () => {
  return (
    <>
      <div className="flex-grow" />
      <button
        type="button"
        className="w-20 border-l border-gray-300 justify-center items-center flex"
        onClick={() => postShutDown()}
      >
        <FontAwesomeIcon icon={faPowerOff} size="2x" />
      </button>
    </>
  );
};

export default Off;
