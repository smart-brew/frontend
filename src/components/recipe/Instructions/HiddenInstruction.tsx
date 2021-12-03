import React from 'react';

import InstructionType from '../../../types/RecipeData/InstructionType';

interface Props {
  instruction: InstructionType;
  instructionName: string | undefined;
}

const HiddenInstruction: React.FC<Props> = ({
  instruction,
  instructionName,
}: Props) => {
  /* TODO
   - treba upravit, ze ked mam specialne instrukcie ako WAIT, MANUAL, TRANSFER_LIQUIDS, co sa bude zobrazovat na pravej strane
   - na lavej strane mapovat "codeName" na nieco krajsie
   */
  return (
    <div className="text-lg font-bold shadow rounded-xl content-center justify-center bg-white flex flex-row m-2">
      <span className="w-1/2 border-r border-gray-300 flex content-center justify-center p-2">
        {instructionName !== undefined ? instructionName : instruction.codeName}
      </span>
      <span className="w-1/2 flex content-center justify-center p-2">
        {instruction.param}
      </span>
    </div>
  );
};

export default HiddenInstruction;
