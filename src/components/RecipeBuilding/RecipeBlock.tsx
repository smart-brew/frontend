import React from 'react';
import InstructionTemplateType from '../../types/FunctionData/InstructionTemplateType';
import EditableInstruction from './InstructionComponents/EditableInstruction';
import AddInstructionButton from './AddInstructionButton';

interface Props {
  instructions: Array<InstructionTemplateType>;
  blockId: number;
  blockName: string;
  handleAddButtonClick: (index: number, blockId: number) => void;
  onNameChange: (index: number, name: string) => void;
}

const RecipeBlock: React.FC<Props> = ({
  instructions,
  blockId,
  blockName,
  handleAddButtonClick,
  onNameChange,
}) => {
  return (
    <div className="bg-blue-100 border-2 border-gray-500 shadow w-4/5 text-left rounded-xl p-4">
      <input
        className="bg-white bg-opacity-50 border border-gray-500 text-xl font-bold mt-2 ml-8 rounded-lg p-1"
        type="text"
        placeholder="Block name"
        defaultValue={blockName !== '' ? blockName : ''}
        onBlur={(e) => {
          onNameChange(blockId, e.target.value);
        }}
      />
      <div className="flex flex-col">
        {instructions.length === 0 ? (
          <AddInstructionButton
            index={0}
            blockId={blockId}
            handleAddButtonClick={handleAddButtonClick}
          />
        ) : (
          instructions.map((instr, index) => {
            return (
              <div>
                <EditableInstruction
                  instruction={instr}
                  blockId={blockId}
                  onDelete={() => {
                    return true;
                  }}
                />
                <AddInstructionButton
                  index={index}
                  blockId={blockId}
                  handleAddButtonClick={handleAddButtonClick}
                />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default RecipeBlock;
