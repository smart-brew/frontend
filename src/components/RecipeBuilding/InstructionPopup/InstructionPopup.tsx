import React from 'react';

import FunctionType from '../../../types/FunctionData/FunctionType';
import InstructionForSelection from './InstructionForSelection';
import InstrPopupProps from '../../../types/Props/InstrPopupProps';

const InstructionPopup: React.FC<InstrPopupProps> = (props) => {
  const { functions, callback } = props;
  const { functionsArray } = functions;

  const instructionPopupRef = React.useRef<HTMLDivElement>(null);

  const myCallback = (arg: FunctionType): void => {
    callback(arg);
    const instructionPopupNode = instructionPopupRef?.current;
    instructionPopupNode?.classList.remove('modal-bg-active');
  };

  const instructions = functionsArray.map((func) => {
    return <InstructionForSelection instruction={func} onClick={callback} />;
  });
  return (
    <div
      className="w-3/5 rounded-2xl p-10 items-center justify-center content-center modal"
      ref={instructionPopupRef}
    >
      <h2 className="font-bold text-2xl p-3 pb-10">Select instruction:</h2>
      <div className="grid grid-cols-2 justify-items-center">
        {instructions}
      </div>
      <button type="button" className="cancel-button">
        Cancel
      </button>
    </div>
  );
};

export default InstructionPopup;
