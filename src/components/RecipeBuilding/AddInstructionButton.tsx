import React from 'react';
import InstructionTemplateType from '../../types/FunctionData/InstructionTemplateType';

interface Props {
  index: number;
  blockId: number;
  handleAddButtonClick: (index: number, blockId: number) => void;
}

const AddInstructionButton: React.FC<Props> = ({
  index,
  blockId,
  handleAddButtonClick,
}: Props) => {
  return (
    <div className="flex flex-row items-center mx-3">
      <div className="border-t-4 border-dashed border-green-600 w-4/5"> </div>
      <button
        type="button"
        className="select-button text-5xl"
        onClick={() => {
          handleAddButtonClick(index, blockId);
        }}
      >
        +
      </button>
    </div>
  );
};

export default AddInstructionButton;
