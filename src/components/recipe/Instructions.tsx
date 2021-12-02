import React from 'react';
import { DataContext } from '../../contexts/dataContext';
import InstructionType from '../../types/RecipeData/InstructionType';
import Instruction from './Instructions/Instruction';

interface Props {
  instructions: InstructionType[];
}

const Ingredients: React.FC<Props> = ({ instructions }) => {
  const currentInstructionStatus = React.useContext(DataContext)
    ?.instruction || {
    currentInstruction: 0,
    currentValue: 0,
    status: 'WAITING',
  };

  // TODO v tomto componente handlovat zgrupovanie do blokov
  return (
    <div className="flex flex-col shadow rounded-3xl px-8 py-3 mx-8 mb-3">
      {instructions.map((instr) => {
        return (
          <Instruction
            key={instr.id}
            instruction={instr}
            status={currentInstructionStatus}
          />
        );
      })}
    </div>
  );
};

export default Ingredients;
