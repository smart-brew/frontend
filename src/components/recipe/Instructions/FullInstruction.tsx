import React from 'react';
import InstrType from '../../../types/InstrType';
import UnitsMap from '../../../helper_scripts/UnitsMap';
import InstructionState from '../../../types/InstructionState';
import arrow from '../../../blue-arrow.svg';
import InstructionType from '../../../types/RecipeData/InstructionType';
import { InstructionStatus } from '../../../types/SystemData';

interface Props {
  instruction: InstructionType;
  status: InstructionStatus;
}

const FullInstruction: React.FC<Props> = ({ instruction, status }: Props) => {
  // const valueUnit = new UnitsMap().getUnit(instruction.name);

  function getName(): string {
    return `Full${instruction.id}`;
  }

  return (
    <div className="h-1/6 text-lg shadow rounded-xl justify-center py-4 mt-3 bg-white">
      <div className="relative">
        <img
          src={arrow}
          alt="arrow"
          className="w-12 h-auto absolute -left-16 top-10 z-10"
        />
      </div>
      <h3 className="text-xl">
        <span className="font-bold">{getName()}</span>
        {/* <span className="font-semibold"> in </span>
        <span className="font-bold">
          {instruction.chamberId === 0 ? 'Chamber 1' : 'Chamber 2'}
        </span> */}
      </h3>
      {/* <div className="flex flex-row items-center content-center justify-center space-x-8">
        <div className="flex flex-col">
          <span className="font-semibold">Now:</span>
          <span className="font-bold">
            {instruction.currParam} {valueUnit}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold">Target:</span>
          <span className="font-bold">
            {instruction.targetParam} {valueUnit}
          </span>
        </div> 
      </div> */}
      {/* <div className={`font-bold text-xl ${state?.style}`}>{state?.name}</div> */}
    </div>
  );
};

export default FullInstruction;
