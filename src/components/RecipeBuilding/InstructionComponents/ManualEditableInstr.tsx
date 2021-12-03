import React, { useRef } from 'react';

import ParamType from '../../../types/ParamType';
import EditableInstructionTemplateType from './EditableInstructionTemplateType';

interface Props {
  instruction: EditableInstructionTemplateType;
  onChange: (params: ParamType) => void;
}

const ManualEditableInstr: React.FC<Props> = ({
  instruction,
  onChange,
}: Props) => {
  const textRef = useRef<HTMLTextAreaElement>(null);

  const readParams = (): ParamType | null => {
    const textNode = textRef.current;
    if (textNode != null) {
      return { optionCodeName: null, value: textNode.value };
    }
    return null;
  };

  const sendParams = (): void => {
    const params = readParams();
    if (params !== null) {
      onChange(params);
    }
  };

  return (
    <div className="flex flex-row align-middle text-center space-x-3">
      <span>Message:</span>
      <textarea
        className="w-4/5 border border-gray-200 p-1"
        ref={textRef}
        onBlur={sendParams}
      />
    </div>
  );
};

export default ManualEditableInstr;
