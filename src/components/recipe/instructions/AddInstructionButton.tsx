import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

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
    <div className="flex flex-row items-center mx-3 w-full">
      <div className="border-t-4 border-dashed border-green-600 w-4/5"> </div>
      <button
        type="button"
        className="justify-center items-center flex text-green-600"
        onClick={() => handleAddButtonClick(index, blockId, blockName)}
      >
        <FontAwesomeIcon icon={faPlusCircle} size="3x" />
      </button>
    </div>
  );
};

export default AddInstructionButton;
