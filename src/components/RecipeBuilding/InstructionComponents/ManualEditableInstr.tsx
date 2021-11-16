import React, { useRef } from 'react';
import FunctionType from '../../../types/FunctionData/FunctionType';
import ParamType from '../../../types/ParamType';
import InstructionTemplateType from '../../../types/FunctionData/InstructionTemplateType';
import EditableInstrRefType from '../../../types/RecipeData/EditableInstrRefType';

interface Props {
  instruction: InstructionTemplateType;
  ref: React.Ref<EditableInstrRefType>;
}

const ManualEditableInstr: React.FC<Props> = ({ instruction, ref }: Props) => {
  const textRef = useRef<HTMLTextAreaElement>(null);

  const readParams = (): ParamType | null => {
    const textNode = textRef.current;
    if (textNode != null) {
      return { device: null, value: textNode.value };
    }
    return null;
  };

  return (
    <div className="flex flex-row align-middle text-center space-x-3">
      <span>Message:</span>
      <textarea className="w-4/5 border border-gray-200 p-1" ref={textRef} />
    </div>
  );
};

export default ManualEditableInstr;
