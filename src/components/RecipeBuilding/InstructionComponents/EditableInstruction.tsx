import React from 'react';
import InstructionConstants from '../../../helper_scripts/InstructionConstants';
import FunctionType from '../../../types/FunctionData/FunctionType';
import TemperatureEditableInstr from './TemperatureEditableInstr';

interface EditableInstructionProps {
  instruction: FunctionType;
  onDelete: () => boolean;
}

const EditableInstruction: React.FC<EditableInstructionProps> = ({
  instruction,
  onDelete,
}: EditableInstructionProps) => {
  // const getInstructionState = (): void => {};

  const getCorrectInstructionBody = (
    instr: FunctionType
  ): JSX.Element | null => {
    if (instr.code_name === InstructionConstants.TEMPERATURE) {
      return <TemperatureEditableInstr instruction={instr} />;
    }
    return null;
  };

  const instructionCustomization = getCorrectInstructionBody(instruction);

  return (
    <div className="flex flex-col border-2 border-gray-500 shadow w-1/2 rounded-2xl p-3 px-10 space-y-5 text-left">
      <h2 className="font-bold text-xl">{instruction.name}</h2>
      <div>{instructionCustomization}</div>
    </div>
  );
};

export default EditableInstruction;
