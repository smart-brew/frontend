import FunctionTemplate from '../../types/FunctionData/FunctionTemplate';

export const templates: FunctionTemplate[] = [
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
      },
      {
        id: 2,
        name: 'Chamber 2',
        codeName: 'TEMP_2',
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
    options: [
      {
        id: 3,
        name: 'Motor 1',
        codeName: 'MOTOR_1',
      },
      {
        id: 4,
        name: 'Motor 2',
        codeName: 'MOTOR_2',
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
      },
      {
        id: 7,
        name: 'Yeast',
        codeName: 'YEAST',
      },
      {
        id: 8,
        name: 'Hops',
        codeName: 'HOPS',
      },
      {
        id: 9,
        name: 'Other',
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
