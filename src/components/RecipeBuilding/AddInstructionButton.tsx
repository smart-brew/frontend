import React from 'react';

interface Props {
  index: number;
  blockId: number;
  blockName: string;
  handleAddButtonClick: (
    index: number,
    blockId: number,
    blockName: string
  ) => void;
}

const AddInstructionButton: React.FC<Props> = ({
  index,
  blockId,
  blockName,
  handleAddButtonClick,
}: Props) => {
  return (
    <div className="flex flex-row items-center mx-3">
      <div className="border-t-4 border-dashed border-green-600 w-4/5"> </div>
      <button
        type="button"
        className="select-button text-5xl"
        onClick={() => {
          handleAddButtonClick(index, blockId, blockName);
        }}
      >
        +
      </button>
    </div>
  );
};

export default AddInstructionButton;
