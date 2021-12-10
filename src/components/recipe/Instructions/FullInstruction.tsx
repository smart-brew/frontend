import React from 'react';

import arrow from '../../../blue-arrow.svg';
import InstructionType from '../../../types/RecipeData/InstructionType';
import { InstructionStatus } from '../../../types/SystemData';
import { InstructionsContext } from '../../../contexts/instructionsContext';
import InstructionStateMap from '../../../helper_scripts/InstructionStateMap';

interface Props {
  instruction: InstructionType;
  instructionName: string | undefined;
  status: InstructionStatus;
}

const FullInstruction: React.FC<Props> = ({
  instruction,
  instructionName,
  status,
}: Props) => {
  const templates = React.useContext(InstructionsContext);
  const styleMap = new InstructionStateMap();

  const template = templates?.data.find(
    (templ) => templ.id === instruction.templateId
  );

  function getName(): string {
    return instructionName || instruction.codeName;
  }

  const style = styleMap.getStyle(status.status);

  // TODO upravit style a veci co sa zobrazuju
  return (
    <div className="text-lg shadow rounded-xl justify-center bg-white m-2">
      <div className="relative">
        <img
          src={arrow}
          alt="arrow"
          className="w-12 h-auto absolute -left-16 top-8 z-10"
        />
      </div>
      <h3 className="text-xl">
        <span className="font-bold">{getName()}</span>
      </h3>
      <div className="flex flex-row items-center content-center justify-center space-x-8">
        <div className="flex flex-col">
          <span className="font-semibold">Now:</span>
          <span className="font-bold">
            {status.currentValue}
            {template?.units}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold">Target:</span>
          <span className="font-bold">
            {instruction.param}
            {template?.units}
          </span>
        </div>
      </div>
      <div className={`font-bold text-xl ${style?.style}`}>
        {style?.name || status.status}
      </div>
    </div>
  );
};

export default FullInstruction;
