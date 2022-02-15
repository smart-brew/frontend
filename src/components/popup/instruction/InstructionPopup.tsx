import React from 'react';

import InstructionForSelection from './InstructionForSelection';
import InstructionTemplate from '../../../types/FunctionData/InstructionTemplate';

interface InstrPopupProps {
  templates: InstructionTemplate[];
  callback: (instr: InstructionTemplate) => undefined;
}

const InstructionPopup: React.FC<InstrPopupProps> = ({
  templates,
  callback,
}: InstrPopupProps) => {
  const instructionPopupRef = React.useRef<HTMLDivElement>(null);

  // const myCallback = (instr: InstructionTemplateType): void => {
  //   callback(instr);
  // };

  const hidePopup = (): void => {
    console.log('Click registered');
    const instructionPopupNode = instructionPopupRef?.current;
    instructionPopupNode?.classList.remove('modal-bg-active');
  };

  const instructions = templates.map((func) => {
    return (
      <InstructionForSelection
        key={func.codeName}
        instruction={func}
        onClick={callback}
      />
    );
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
      <button
        type="button"
        className="cancel-button"
        onClick={() => {
          hidePopup();
        }}
      >
        Cancel
      </button>
    </div>
  );
};

export default InstructionPopup;
