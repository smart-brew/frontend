/* eslint-disable camelcase */

import React, { useState } from 'react';
import InstructionPopup from '../components/RecipeBuilding/InstructionPopup/InstructionPopup';
import { emptyInstr, functions } from '../data/functions';
import FunctionType from '../types/FunctionData/FunctionType';
import EditableInstruction from '../components/RecipeBuilding/InstructionComponents/EditableInstruction';

const RecipeInstructionsPage: React.FC = () => {
  const [selectedInstr, setSelectedInstr] = useState(emptyInstr);
  const popupRef = React.useRef<HTMLDivElement>(null);

  const handleInstrSelection = (arg: FunctionType): undefined => {
    console.log('CALLBACK HANDLER CALLED.');
    setSelectedInstr(arg);
    const instructionPopupNode = popupRef?.current;
    instructionPopupNode?.classList.remove('modal-bg-active');
    return undefined;
  };

  return (
    <div className="flex flex-col space-y-5 justify-center">
      <span>{selectedInstr.name}</span>
      <EditableInstruction
        instruction={selectedInstr}
        onDelete={() => {
          return true;
        }}
      />
      <button
        className="select-button w-1/5"
        type="button"
        onClick={() => {
          const instructionPopupNode = popupRef?.current;
          instructionPopupNode?.classList.add('modal-bg-active');
        }}
      >
        Select instruction
      </button>
      <div className="modal-bg" ref={popupRef}>
        <InstructionPopup
          functions={functions}
          callback={handleInstrSelection}
        />
      </div>
    </div>
  );
};

export default RecipeInstructionsPage;
