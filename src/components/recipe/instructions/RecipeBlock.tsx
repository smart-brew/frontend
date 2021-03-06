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
  onNameChange: (index: number, name: string) => void;
  onInstructionEdit: (
    instr: EditableInstructionTemplateType,
    index: number,
    blockId: number,
    error: boolean
  ) => void;
  onBlockDelete: (blockId: number) => void;
  onInstructionDelete: (index: number, blockId: number) => void;
  checkBlockNameDoubles: () => number[];
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
  checkBlockNameDoubles,
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

  React.useEffect(() => {
    const uniques = checkBlockNameDoubles();
    setIsValid(uniques.includes(blockId));
  }, [blockId, checkBlockNameDoubles]);

  const instructionEditCallback = (
    instr: EditableInstructionTemplateType,
    index: number,
    error: boolean
  ): void => {
    onInstructionEdit(instr, index, blockId, error);
  };

  return (
    <div className="bg-blue-100 shadow w-4/5 text-left rounded-xl p-4">
      <div className="flex flex-row justify-between">
        <div className="my-3 ml-8">
          <input
            className="bg-white bg-opacity-50 border border-gray-500 text-2xl font-bold  rounded-lg p-1"
            type="text"
            required
            placeholder="RECIPE STAGE"
            defaultValue={blockName !== '' ? blockName : ''}
            onBlur={(e) => {
              onNameChange(blockId, e.target.value);
            }}
          />
          {!isValid && (
            <div
              className="msg text-red-700 text-lg pt-2"
              style={{ color: 'visibility: visible' }}
            >
              This stage name already exists.
            </div>
          )}
        </div>
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
              // eslint-disable-next-line react/no-array-index-key
              <div key={instr.blockId + instr.name + index}>
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
