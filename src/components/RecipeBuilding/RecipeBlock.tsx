import React from 'react';
import InstructionTemplateType from '../../types/FunctionData/InstructionTemplateType';
import EditableInstruction from './InstructionComponents/EditableInstruction';
import AddInstructionButton from './AddInstructionButton';
import InstructionForBackendType from '../../types/RecipeData/InstructionForBackendType';
import EditableInstructionTemplateType from './InstructionComponents/EditableInstructionTemplateType';
import ParamType from '../../types/ParamType';

interface Props {
  instructions: Array<EditableInstructionTemplateType>;
  blockId: number;
  blockName: string;
  handleAddButtonClick: (index: number, blockId: number) => void;
  onNameChange: (index: number, name: string) => void;
  onInstructionEdit: (
    instr: EditableInstructionTemplateType,
    index: number,
    blockId: number
  ) => void;
}

const RecipeBlock: React.FC<Props> = ({
  instructions,
  blockId,
  blockName,
  handleAddButtonClick,
  onNameChange,
  onInstructionEdit,
}) => {
  // const parseInstructions = (): Array<InstructionForBackendType> => {
  //   const formattedInstructions: Array<InstructionForBackendType> =
  //     new Array<InstructionForBackendType>();
  //   myInstructions.forEach((value) => {
  //     formattedInstructions.push(value.parseInstruction());
  //   });
  //
  //   return [];
  // };

  const instructionEditCallback = (
    instr: EditableInstructionTemplateType,
    index: number
  ): void => {
    onInstructionEdit(instr, index, blockId);
  };

  return (
    <div className="bg-blue-100 border-2 border-gray-500 shadow w-4/5 text-left rounded-xl p-4">
      <input
        className="bg-white bg-opacity-50 border border-gray-500 text-2xl font-bold my-3 ml-8 rounded-lg p-1"
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
                  index={index}
                  onDelete={() => {
                    return true;
                  }}
                  onInstructionEdit={instructionEditCallback}
                />
                <AddInstructionButton
                  index={index + 1}
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
