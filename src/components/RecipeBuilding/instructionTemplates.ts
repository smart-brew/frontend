import InstructionTemplateListType from '../../types/FunctionData/InstructionTemplateListType';

export const templates: InstructionTemplateListType = {
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
