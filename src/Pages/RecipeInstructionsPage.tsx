/* eslint-disable camelcase */

import React, { useState } from 'react';
import InstructionPopup from '../components/RecipeBuilding/InstructionPopup/InstructionPopup';
import FunctionListType from '../types/FunctionData/FunctionListType';
import FunctionType from '../types/FunctionData/FunctionType';
import EditableInstruction from '../components/RecipeBuilding/InstructionComponents/EditableInstruction';
import InstructionTemplateType from '../types/FunctionData/InstructionTemplateType';
import InstructionTemplateListType from '../types/FunctionData/InstructionTemplateListType';

const templates: InstructionTemplateListType = {
  templates: [
    {
      id: 1,
      codeName: 'SET_TEMPERATURE',
      name: 'Temperature',
      category: 'TEMPERATURE',
      units: '°C',
      inputType: 'float',
      description: 'Sets temerature for selected chamber',
      devices: [
        {
          id: 1,
          name: 'Chamber 1',
          device: 'TEMP_1',
        },
        {
          id: 2,
          name: 'Chamber 2',
          device: 'TEMP_2',
        },
      ],
    },
    {
      id: 2,
      codeName: 'SET_MOTOR_SPEED',
      name: 'Motor',
      category: 'MOTOR',
      units: 'RMP',
      inputType: 'float',
      description: 'Sets rpms for selected motor',
      devices: [
        {
          id: 3,
          name: 'Motor 1',
          device: 'MOTOR_1',
        },
        {
          id: 4,
          name: 'Motor 2',
          device: 'MOTOR_2',
        },
      ],
    },
    {
      id: 3,
      codeName: 'TRANSFER_LIQUIDS',
      name: 'Transfer liquids',
      category: 'PUMP',
      units: null,
      inputType: null,
      description: 'Transfers liquids from first chamber to second',
      devices: [
        {
          id: 5,
          name: 'Pump 1',
          device: 'PUMP_1',
        },
      ],
    },
    {
      id: 4,
      codeName: 'UNLOAD',
      name: 'Unload',
      category: 'UNLOADER',
      units: null,
      inputType: null,
      description: 'Unloads selected ingredient into chamber',
      devices: [
        {
          id: 6,
          name: 'Fermentables',
          device: 'FERMENTABLE',
        },
        {
          id: 7,
          name: 'Yeast',
          device: 'YEAST',
        },
        {
          id: 8,
          name: 'Hops',
          device: 'HOPS',
        },
        {
          id: 9,
          name: 'Other',
          device: 'OTHER',
        },
      ],
    },
    {
      id: 5,
      codeName: 'WAIT',
      name: 'Wait',
      category: 'SYSTEM',
      units: 'Minutes',
      inputType: 'float',
      description: 'System will wait for given amount of minutes',
      devices: [],
    },
    {
      id: 6,
      codeName: 'MANUAL',
      name: 'Manual step',
      category: 'SYSTEM',
      units: null,
      inputType: 'string',
      description: 'System will wait for manual inervention',
      devices: [],
    },
  ],
};

const RecipeInstructionsPage: React.FC = () => {
  const emptyInstr: InstructionTemplateType = {
    id: -1,
    codeName: 'SET_TEMPERATURE',
    name: 'Set temperature',
    category: 'TEMPERATURE',
    units: null,
    inputType: 'string',
    description: 'Sets temperature.',
    devices: null,
  };

  const [selectedInstr, setSelectedInstr] = useState(emptyInstr);
  const popupRef = React.useRef<HTMLDivElement>(null);

  const handleInstrSelection = (arg: InstructionTemplateType): undefined => {
    console.log('CALLBACK HANDLER CALLED.');
    setSelectedInstr(arg);
    const instructionPopupNode = popupRef?.current;
    instructionPopupNode?.classList.remove('modal-bg-active');
    return undefined;
  };

  return (
    <div className="flex flex-col space-y-5 justify-center">
      <span>{selectedInstr.name}</span>
      <EditableInstruction
        instruction={selectedInstr}
        blockId={-1}
        onDelete={() => {
          return true;
        }}
      />
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
          functions={templates}
          callback={handleInstrSelection}
        />
      </div>
    </div>
  );
};

export default RecipeInstructionsPage;
