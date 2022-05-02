import React from 'react';
import InstructionConstants from '../../../../helpers/InstructionConstants';
import TemperatureEditableInstr from './TemperatureEditableInstr';
import MotorEditableInstr from './MotorEditableInstr';
import TransferEditableInstr from './TransferEditableInstr';
import UnloadEditableInstr from './UnloadEditableInstr';
import WaitEditableInstr from './WaitEditableInstr';
import ManualEditableInstr from './ManualEditableInstr';
import ParamType from '../../../../types/ParamType';
import EditableInstructionTemplateType from './EditableInstructionTemplateType';

interface EditableInstructionProps {
  instruction: EditableInstructionTemplateType;
  index: number;
  blockId: number;
  onDelete: (index: number, blockId: number) => void;
  onInstructionEdit: (
    instr: EditableInstructionTemplateType,
    index: number,
    error: boolean
  ) => void;
}

const EditableInstruction: React.FC<EditableInstructionProps> = ({
  instruction,
  index,
  blockId,
  onDelete,
  onInstructionEdit,
}: EditableInstructionProps) => {
  const registerChange = (params: ParamType, error: boolean): void => {
    const newInstruction = instruction;
    newInstruction.param = params.value;
    newInstruction.optionCodeName = params.optionCodeName;
    onInstructionEdit(newInstruction, index, error);
  };

  const formatInstruction = (
    instr: EditableInstructionTemplateType
  ): JSX.Element | null => {
    if (instr.codeName === InstructionConstants.TEMPERATURE) {
      if (instr.param === null) {
        instr.param = 0;
      }
      return (
        <TemperatureEditableInstr
          instruction={instr}
          onChange={registerChange}
        />
      );
    }
    if (instr.codeName === InstructionConstants.MOTOR) {
      if (instr.param === null) {
        instr.param = 0;
      }
      return (
        <MotorEditableInstr instruction={instr} onChange={registerChange} />
      );
    }
    if (instr.codeName === InstructionConstants.PUMP) {
      return (
        <TransferEditableInstr instruction={instr} onChange={registerChange} />
      );
    }
    if (instr.codeName === InstructionConstants.UNLOADER) {
      return (
        <UnloadEditableInstr instruction={instr} onChange={registerChange} />
      );
    }
    if (instr.codeName === InstructionConstants.WAIT) {
      return (
        <WaitEditableInstr instruction={instr} onChange={registerChange} />
      );
    }
    if (instr.codeName === InstructionConstants.MANUAL) {
      return (
        <ManualEditableInstr instruction={instr} onChange={registerChange} />
      );
    }
    return null;
  };

  return (
    <div className="flex flex-row align-middle items-center">
      <div className="flex flex-col border-2 border-gray-500 shadow w-4/5 rounded-2xl p-3 px-10 space-y-5 text-left bg-white bg-opacity-75">
        <div className="flex flex-row justify-between">
          <h2 className="font-bold text-xl">{instruction.name}</h2>
          <button
            type="button"
            className="text-2xl font-extrabold text-red-900 text-right"
            onClick={() => {
              onDelete(index, blockId);
            }}
          >
            X
          </button>
        </div>
        <div>{formatInstruction(instruction)}</div>
      </div>
      <span className="pl-3 italic text-md w-1/5 flex-wrap">
        {instruction.description}
      </span>
    </div>
  );
};

export default EditableInstruction;
