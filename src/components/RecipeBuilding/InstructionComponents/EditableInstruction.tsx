import React from 'react';
import InstructionConstants from '../../../helper_scripts/InstructionConstants';
import FunctionType from '../../../types/FunctionData/FunctionType';
import TemperatureEditableInstr from './TemperatureEditableInstr';
import MotorEditableInstr from './MotorEditableInstr';
import TransferEditableInstr from './TransferEditableInstr';
import UnloadEditableInstr from './UnloadEditableInstr';
import WaitEditableInstr from './WaitEditableInstr';
import ManualEditableInstr from './ManualEditableInstr';

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
    if (instr.code_name === InstructionConstants.MOTOR) {
      return <MotorEditableInstr instruction={instr} />;
    }
    if (instr.code_name === InstructionConstants.PUMP) {
      return <TransferEditableInstr instruction={instr} />;
    }
    if (instr.code_name === InstructionConstants.UNLOADER) {
      return <UnloadEditableInstr instruction={instr} />;
    }
    if (instr.code_name === InstructionConstants.WAIT) {
      return <WaitEditableInstr instruction={instr} />;
    }
    if (instr.code_name === InstructionConstants.MANUAL) {
      return <ManualEditableInstr instruction={instr} />;
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
