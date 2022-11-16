import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface Props {
  buttonIndex: number;
  onBlockAdd: (index: number) => void;
}

const AddBlockButton: React.FC<Props> = ({
  buttonIndex,
  onBlockAdd,
}: Props) => {
  return (
    <div className="flex flex-row items-center mx-3">
      <button
        type="button"
        className="justify-center items-center flex text-blue-600 "
        onClick={() => onBlockAdd(buttonIndex)}
      >
        <FontAwesomeIcon icon={faPlusCircle} size="3x" />
      </button>

      <div className="border-t-4 border-dashed border-blue-500 w-4/5"> </div>
    </div>
  );
};

export default AddBlockButton;
