import InstructionTemplate from '../types/FunctionData/InstructionTemplate';

export const emptyInstr: InstructionTemplate = {
  id: -1,
  codeName: 'EMPTY',
  name: 'Empty instruction',
  category: 'SYSTEM',
  units: null,
  inputType: 'string',
  description: 'This is a placeholder.',
  options: [],
};

export const functions: InstructionTemplate[] = [
  {
    id: 1,
    codeName: 'SET_TEMPERATURE',
    name: 'Temperature',
    category: 'TEMPERATURE',
    units: '°C',
    inputType: 'float',
    description: 'Sets temerature for selected chamber',
    options: [
      {
        id: 1,
        name: 'Chamber 1',
        codeName: 'TEMP_1',
        module: 1,
      },
      {
        id: 2,
        name: 'Chamber 2',
        codeName: 'TEMP_2',
        module: 1,
      },
    ],
  },
  {
    id: 2,
    codeName: 'SET_MOTOR_SPEED',
    name: 'Motor',
    category: 'MOTOR',
    units: 'RPM',
    inputType: 'float',
    description: 'Sets rpms for selected motor',
    options: [
      {
        id: 3,
        name: 'Motor 1',
        codeName: 'MOTOR_1',
        module: 1,
      },
      {
        id: 4,
        name: 'Motor 2',
        codeName: 'MOTOR_2',
        module: 1,
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
    options: [
      {
        id: 5,
        name: 'Pump 1',
        codeName: 'PUMP_1',
        module: 1,
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
    options: [
      {
        id: 6,
        name: 'Fermentables',
        codeName: 'FERMENTABLE',
        module: 1,
      },
      {
        id: 7,
        name: 'Yeast',
        codeName: 'YEAST',
        module: 1,
      },
      {
        id: 8,
        name: 'Hops',
        codeName: 'HOPS',
        module: 1,
      },
      {
        id: 9,
        name: 'Other',
        module: 1,
        codeName: 'OTHER',
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
    options: [],
  },
  {
    id: 6,
    codeName: 'MANUAL',
    name: 'Manual step',
    category: 'SYSTEM',
    units: null,
    inputType: 'string',
    description: 'System will wait for manual inervention',
    options: [],
  },
];
