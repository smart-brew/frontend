import React from 'react';
import UnitsMap from '../../../helper_scripts/UnitsMap';
import Props from '../../../types/Props/InstructionProps';

const HiddenInstruction: React.FC<Props> = ({ instruction, state }: Props) => {
  const valueUnit = new UnitsMap().getUnit(instruction.name);

  return (
    <div className="opacity-75 text-lg border-2 shadow rounded-xl content-center justify-center py-4 mt-3 bg-white flex flex-col space-x-5">
      <div className="flex flex-row content-center justify-center">
        <h3 className="text-xl text-gray-700 border-r-4 pr-3">
          <span className="font-bold">{instruction.name}</span>
          <span className="font-semibold"> in </span>
          <span className="font-bold">
            {instruction.chamberId === 0 ? 'Chamber 1' : 'Chamber 2'}
          </span>
        </h3>
        <div className="flex flex-row items-center content-center justify-center ml-3">
          <div className="flex flex-col text-gray-700">
            <span className="font-bold">
              {instruction.targetParam} {valueUnit}
            </span>
          </div>
        </div>
      </div>
      <div className={`font-bold text-xl pt-2 ${state?.style}`}>
        {state?.name}
      </div>
    </div>
  );
};

export default HiddenInstruction;
