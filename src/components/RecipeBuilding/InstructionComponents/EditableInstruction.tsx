import React from 'react';
import { InstructionConstants } from '../../../helper_scripts/InstructionConstants';
import FunctionType from '../../../types/FunctionData/FunctionType';

interface EditableInstructionProps {
  instruction: FunctionType;
  onDelete: () => boolean;
}

const EditableInstruction: React.FC<EditableInstructionProps> = ({
  instruction,
  onDelete,
}: EditableInstructionProps) => {
  // const getInstructionState = (): void => {};

  let instructionCustomization = null;
  if (instruction.code_name === InstructionConstants.TEMPERATURE) {
    instructionCustomization = <div>TEMPERATURE</div>;
  }
  return (
    <div className="flex flex-col">
      <h2>{instruction.name}</h2>
      {instructionCustomization}
    </div>
  );
};

export default EditableInstruction;
