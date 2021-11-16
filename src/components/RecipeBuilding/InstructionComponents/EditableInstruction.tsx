import React from 'react';
import InstructionConstants from '../../../helper_scripts/InstructionConstants';
import TemperatureEditableInstr from './TemperatureEditableInstr';
import MotorEditableInstr from './MotorEditableInstr';
import TransferEditableInstr from './TransferEditableInstr';
import UnloadEditableInstr from './UnloadEditableInstr';
import WaitEditableInstr from './WaitEditableInstr';
import ManualEditableInstr from './ManualEditableInstr';
import InstructionTemplateType from '../../../types/FunctionData/InstructionTemplateType';
import InstructionForBackendType from '../../../types/RecipeData/InstructionForBackendType';
import EditableInstrRefType from '../../../types/RecipeData/EditableInstrRefType';
import ParamType from '../../../types/ParamType';

interface EditableInstructionProps {
  instruction: InstructionTemplateType;
  blockId: number;
  onDelete: () => boolean;
}

const EditableInstruction: React.FC<EditableInstructionProps> = ({
  instruction,
  blockId,
  onDelete,
}: EditableInstructionProps) => {
  const currBodyRef = React.createRef<EditableInstrRefType>();
  const getCorrectInstructionBody = (
    instr: InstructionTemplateType
  ): JSX.Element | null => {
    if (instr.codeName === InstructionConstants.TEMPERATURE) {
      return <TemperatureEditableInstr instruction={instr} ref={currBodyRef} />;
    }
    if (instr.codeName === InstructionConstants.MOTOR) {
      return <MotorEditableInstr instruction={instr} ref={currBodyRef} />;
    }
    if (instr.codeName === InstructionConstants.PUMP) {
      return <TransferEditableInstr instruction={instr} ref={currBodyRef} />;
    }
    if (instr.codeName === InstructionConstants.UNLOADER) {
      return <UnloadEditableInstr instruction={instr} ref={currBodyRef} />;
    }
    if (instr.codeName === InstructionConstants.WAIT) {
      return <WaitEditableInstr instruction={instr} ref={currBodyRef} />;
    }
    if (instr.codeName === InstructionConstants.MANUAL) {
      return <ManualEditableInstr instruction={instr} ref={currBodyRef} />;
    }
    return null;
  };

  const instructionCustomization = getCorrectInstructionBody(instruction);

  const parseInstruction = (): InstructionForBackendType | null => {
    const params: ParamType | null | undefined =
      currBodyRef.current?.readParams();
    if (params) {
      return {
        templateId: instruction.id,
        blockId,
        param: params?.value,
        device: params?.device,
        ordering: -1,
      };
    }
    return null;
  };

  return (
    <div className="flex flex-col border-2 border-gray-500 shadow w-1/2 rounded-2xl p-3 px-10 space-y-5 text-left">
      <h2 className="font-bold text-xl">{instruction.name}</h2>
      <div>{instructionCustomization}</div>
    </div>
  );
};

export default EditableInstruction;
