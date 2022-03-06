import React from 'react';

import EditableInstruction from './single-instruction/EditableInstruction';
import AddInstructionButton from './AddInstructionButton';
import EditableInstructionTemplateType from './single-instruction/EditableInstructionTemplateType';

interface Props {
  instructions: Array<EditableInstructionTemplateType>;
  blockId: number;
  blockName: string;
  handleAddButtonClick: (
    index: number,
    blockId: number,
    blockName: string
  ) => void;
  onNameChange: (index: number, name: string) => boolean;
  onInstructionEdit: (
    instr: EditableInstructionTemplateType,
    index: number,
    blockId: number
  ) => void;
  onBlockDelete: (blockId: number) => void;
  onInstructionDelete: (index: number, blockId: number) => void;
}

const RecipeBlock: React.FC<Props> = ({
  instructions,
  blockId,
  blockName,
  handleAddButtonClick,
  onNameChange,
  onInstructionEdit,
  onBlockDelete,
  onInstructionDelete,
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

  const [isValid, setIsValid] = React.useState<boolean>(true);

  const instructionEditCallback = (
    instr: EditableInstructionTemplateType,
    index: number
  ): void => {
    onInstructionEdit(instr, index, blockId);
  };

  return (
    <div className="bg-blue-100 shadow w-4/5 text-left rounded-xl p-4">
      <div className="flex flex-row justify-between">
        <input
          className="bg-white bg-opacity-50 border border-gray-500 text-2xl font-bold my-3 ml-8 rounded-lg p-1"
          type="text"
          required
          placeholder="Block name"
          defaultValue={blockName !== '' ? blockName : ''}
          onBlur={(e) => {
            console.log(isValid);
            const toto = onNameChange(blockId, e.target.value);
            console.log(toto);
            setIsValid(toto);
            console.log(isValid);
          }}
        />
        {!isValid && (
          <span
            className="msg text-red-700 "
            style={{ color: 'visibility: visible' }}
          >
            This block name is already used, choose different one
          </span>
        )}
        <button
          type="button"
          className="text-4xl font-extrabold text-red-900 text-right"
          onClick={() => onBlockDelete(blockId)}
        >
          X
        </button>
      </div>
      <div className="flex flex-col">
        {instructions.length === 0 ? (
          <AddInstructionButton
            index={0}
            blockId={blockId}
            blockName={blockName}
            handleAddButtonClick={handleAddButtonClick}
          />
        ) : (
          instructions.map((instr, index) => {
            return (
              <div key={instr.id + instr.name}>
                <EditableInstruction
                  instruction={instr}
                  blockId={blockId}
                  index={index}
                  onDelete={onInstructionDelete}
                  onInstructionEdit={instructionEditCallback}
                />
                <AddInstructionButton
                  index={index + 1}
                  blockId={blockId}
                  blockName={blockName}
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
