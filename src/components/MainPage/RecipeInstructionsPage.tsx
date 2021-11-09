import React, { useState } from 'react';
import InstructionPopup from '../RecipeBuilding/InstructionPopup/InstructionPopup';
import FunctionListType from '../../types/FunctionData/FunctionListType';
import FunctionType from '../../types/FunctionData/FunctionType';

const functions: FunctionListType = {
  functionsArray: [
    {
      id: 1,
      code_name: 'SET_TEMPERATURE',
      name: 'Temperature',
      category: 'TEMPERATURE',
      units: '°C',
      input_type: 'float',
      description: 'Sets temerature for selected chamber',
      Function_options: [
        {
          id: 1,
          name: 'Chamber 1',
          code_name: 'TEMP_1',
        },
        {
          id: 2,
          name: 'Chamber 2',
          code_name: 'TEMP_2',
        },
      ],
    },
    {
      id: 2,
      code_name: 'SET_MOTOR_SPEED',
      name: 'Motor',
      category: 'MOTOR',
      units: 'RMP',
      input_type: 'float',
      description: 'Sets rpms for selected motor',
      Function_options: [
        {
          id: 3,
          name: 'Motor 1',
          code_name: 'MOTOR_1',
        },
        {
          id: 4,
          name: 'Motor 2',
          code_name: 'MOTOR_2',
        },
      ],
    },
    {
      id: 3,
      code_name: 'TRANSFER_LIQUIDS',
      name: 'Transfer liquids',
      category: 'PUMP',
      units: null,
      input_type: null,
      description: 'Transfers liquids from first chamber to second',
      Function_options: [
        {
          id: 5,
          name: 'Pump 1',
          code_name: 'PUMP_1',
        },
      ],
    },
    {
      id: 4,
      code_name: 'UNLOAD',
      name: 'Unload',
      category: 'UNLOADER',
      units: null,
      input_type: null,
      description: 'Unloads selected ingredient into chamber',
      Function_options: [
        {
          id: 6,
          name: 'Fermentables',
          code_name: 'FERMENTABLE',
        },
        {
          id: 7,
          name: 'Yeast',
          code_name: 'YEAST',
        },
        {
          id: 8,
          name: 'Hops',
          code_name: 'HOPS',
        },
        {
          id: 9,
          name: 'Other',
          code_name: 'OTHER',
        },
      ],
    },
    {
      id: 5,
      code_name: 'WAIT',
      name: 'Wait',
      category: 'SYSTEM',
      units: 'Minutes',
      input_type: 'float',
      description: 'System will wait for given amount of minutes',
      Function_options: [],
    },
    {
      id: 6,
      code_name: 'MANUAL',
      name: 'Manual step',
      category: 'SYSTEM',
      units: null,
      input_type: 'string',
      description: 'System will wait for manual inervention',
      Function_options: [],
    },
  ],
};

const RecipeInstructionsPage: React.FC = () => {
  const emptyInstr: FunctionType = {
    id: -1,
    code_name: 'EMPTY',
    name: 'Empty instruction',
    category: 'SYSTEM',
    units: null,
    input_type: 'string',
    description: 'This is a placeholder.',
    Function_options: [],
  };

  const [selectedInstr, setSelectedInstr] = useState(emptyInstr);
  const popupRef = React.useRef<HTMLDivElement>(null);

  const handleInstrSelection = (arg: FunctionType): undefined => {
    console.log('CALLBACK HANDLER CALLED.');
    setSelectedInstr(arg);
    const instructionPopupNode = popupRef?.current;
    instructionPopupNode?.classList.remove('modal-bg-active');
    return undefined;
  };

  return (
    <div className="flex flex-col space-y-5 justify-center">
      <span>{selectedInstr.name}</span>
      <button
        className="select-button w-1/5"
        type="button"
        onClick={() => {
          const instructionPopupNode = popupRef?.current;
          instructionPopupNode?.classList.add('modal-bg-active');
        }}
      >
        Select instruction
      </button>
      <div className="modal-bg" ref={popupRef}>
        <InstructionPopup
          functions={functions}
          callback={handleInstrSelection}
        />
      </div>
    </div>
  );
};

export default RecipeInstructionsPage;
