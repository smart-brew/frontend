import {
  BrewingApi,
  InstructionLogApi,
  StatusLogApi,
} from '../types/BrewingType';
import RecipeType from '../types/RecipeData/RecipeType';

const generateDummyBrewingApi = (numOfLogs: number): BrewingApi => {
  return {
    id: 2,
    notes: null,
    evaluation: null,
    endState: 'Finished',
    recipeName: 'Chart tester 2',
    startedAt: '2022-04-10T15:35:43.443Z',
    finishedAt: '2022-04-10T20:35:43.443Z',
    recipe: {
      name: 'Chart tester 2',
      id: 9,
      locked: false,
      description: '',
      Ingredients: [
        {
          id: 17,
          recipeId: 9,
          name: 'fdgfdgdfgdfg',
          amount: 0,
          type: 'Fermentables',
          units: 'KG',
        },
      ],
      Instructions: [
        {
          id: 35,
          recipeId: 9,
          templateId: 4,
          codeName: 'SET_MOTOR_SPEED',
          param: '100',
          category: 'MOTOR',
          optionCodeName: 'MOTOR_1',
          blockId: 6,
          blockName: 'Block 1',
          ordering: 0,
        },
        {
          id: 34,
          recipeId: 9,
          templateId: 6,
          codeName: 'SET_TEMPERATURE',
          param: '20',
          category: 'TEMPERATURE',
          optionCodeName: 'TEMP_1',
          blockId: 6,
          blockName: 'Block 1',
          ordering: 1,
        },
        {
          id: 33,
          recipeId: 9,
          templateId: 4,
          codeName: 'SET_MOTOR_SPEED',
          param: '500',
          category: 'MOTOR',
          optionCodeName: 'MOTOR_1',
          blockId: 6,
          blockName: 'Block 1',
          ordering: 2,
        },
        {
          id: 32,
          recipeId: 9,
          templateId: 6,
          codeName: 'SET_TEMPERATURE',
          param: '50',
          category: 'TEMPERATURE',
          optionCodeName: 'TEMP_1',
          blockId: 6,
          blockName: 'Block 1',
          ordering: 3,
        },
        {
          id: 31,
          recipeId: 9,
          templateId: 4,
          codeName: 'SET_MOTOR_SPEED',
          param: '300',
          category: 'MOTOR',
          optionCodeName: 'MOTOR_2',
          blockId: 5,
          blockName: 'Block 2',
          ordering: 4,
        },
        {
          id: 30,
          recipeId: 9,
          templateId: 6,
          codeName: 'SET_TEMPERATURE',
          param: '40',
          category: 'TEMPERATURE',
          optionCodeName: 'TEMP_2',
          blockId: 5,
          blockName: 'Block 2',
          ordering: 5,
        },
        {
          id: 29,
          recipeId: 9,
          templateId: 6,
          codeName: 'SET_TEMPERATURE',
          param: '70',
          category: 'TEMPERATURE',
          optionCodeName: 'TEMP_2',
          blockId: 5,
          blockName: 'Block 2',
          ordering: 6,
        },
        {
          id: 28,
          recipeId: 9,
          templateId: 4,
          codeName: 'SET_MOTOR_SPEED',
          param: '1000',
          category: 'MOTOR',
          optionCodeName: 'MOTOR_2',
          blockId: 5,
          blockName: 'Block 2',
          ordering: 7,
        },
        {
          id: 27,
          recipeId: 9,
          templateId: 4,
          codeName: 'SET_MOTOR_SPEED',
          param: '0',
          category: 'MOTOR',
          optionCodeName: 'MOTOR_1',
          blockId: 5,
          blockName: 'Block 2',
          ordering: 8,
        },
        {
          id: 26,
          recipeId: 9,
          templateId: 4,
          codeName: 'SET_MOTOR_SPEED',
          param: '0',
          category: 'MOTOR',
          optionCodeName: 'MOTOR_2',
          blockId: 5,
          blockName: 'Block 2',
          ordering: 9,
        },
      ],
    },
    InstructionLogs: [
      {
        id: 10,
        brewingId: 2,
        instructionId: 35,
        finished: true,
        startedAt: 11,
      },
      {
        id: 11,
        brewingId: 2,
        instructionId: 34,
        finished: true,
        startedAt: 2860,
      },
      {
        id: 12,
        brewingId: 2,
        instructionId: 33,
        finished: true,
        startedAt: 14871,
      },
      {
        id: 13,
        brewingId: 2,
        instructionId: 32,
        finished: true,
        startedAt: 20878,
      },
      {
        id: 14,
        brewingId: 2,
        instructionId: 31,
        finished: true,
        startedAt: 56911,
      },
      {
        id: 15,
        brewingId: 2,
        instructionId: 30,
        finished: true,
        startedAt: 62917,
      },
      {
        id: 16,
        brewingId: 2,
        instructionId: 29,
        finished: true,
        startedAt: 95943,
      },
      {
        id: 17,
        brewingId: 2,
        instructionId: 28,
        finished: true,
        startedAt: 131979,
      },
      {
        id: 18,
        brewingId: 2,
        instructionId: 27,
        finished: true,
        startedAt: 137982,
      },
      {
        id: 19,
        brewingId: 2,
        instructionId: 26,
        finished: true,
        startedAt: 143986,
      },
    ],
    StatusLogs: generateDummyStatusLogData(numOfLogs),
  };
};

const generateDummyStatusLogData = (numOfLogs: number): StatusLogApi[] => {
  const dummyStatusLogs: StatusLogApi[] = [];
  const minuteInMillis = 60000;
  for (let i = 0; i < numOfLogs; i++) {
    dummyStatusLogs.push({
      id: -1,
      brewingId: -1,
      status: 'DUMMY',
      params: JSON.stringify({
        TEMPERATURE: [
          {
            TEMP: getRandomValue(20, 120),
            REGULATION_ENABLED: false,
            STATE: 'WAITING',
            DEVICE: 'TEMP_1',
          },
          {
            TEMP: getRandomValue(20, 120),
            REGULATION_ENABLED: false,
            STATE: 'WAITING',
            DEVICE: 'TEMP_2',
          },
        ],
        MOTOR: [
          {
            SPEED: 0,
            RPM: getRandomValue(0, 500),
            STATE: 'WAITING',
            DEVICE: 'MOTOR_1',
          },
          {
            SPEED: 0,
            RPM: getRandomValue(0, 500),
            STATE: 'WAITING',
            DEVICE: 'MOTOR_2',
          },
        ],
        UNLOADER: [
          {
            UNLOADED: false,
            STATE: 'WAITING',
            DEVICE: 'FERMENTABLE',
          },
          {
            UNLOADED: false,
            STATE: 'WAITING',
            DEVICE: 'YEAST',
          },
          {
            UNLOADED: false,
            STATE: 'WAITING',
            DEVICE: 'HOPS',
          },
          {
            UNLOADED: false,
            STATE: 'WAITING',
            DEVICE: 'OTHER',
          },
        ],
        PUMP: [
          {
            ENABLED: false,
            STATE: 'WAITING',
            DEVICE: 'PUMP_1',
          },
        ],
        SYSTEM: [
          {
            REMAINING: 0,
            STATE: 'WAITING',
            DEVICE: 'WAIT',
          },
        ],
      }),
      createdAt: minuteInMillis * i,
    });
  }

  return dummyStatusLogs;
};

const getRandomValue = (min: number, max: number): number => {
  const maxRange = max - min;
  return Math.floor(Math.random() * maxRange) + min;
};

export { generateDummyBrewingApi, generateDummyStatusLogData };
