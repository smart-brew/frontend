import React from 'react';

import InstructionType from '../../../types/RecipeData/InstructionType';

interface Props {
  instruction: InstructionType;
}

const HiddenInstruction: React.FC<Props> = ({ instruction }: Props) => {
  /* TODO ked bude novy backend, tak treba upravit udaje ktore sa zobrazuju */
  return (
    <div className="text-lg font-bold shadow rounded-xl content-center justify-center bg-white flex flex-row m-2">
      <span className="w-1/2 border-r border-gray-300 flex content-center justify-center p-2">
        HIDDEN {instruction.instruction}
      </span>
      <span className="w-1/2 flex content-center justify-center p-2">
        {JSON.stringify(instruction.param)}
      </span>
    </div>
  );
};

export default HiddenInstruction;
