import RecipeListType from '../types/RecipeData/RecipeListType';

export const recipeList: RecipeListType = {
  recipes: [
    {
      id: 3,
      name: 'Smoky Grove Lichtenhainer',
      description:
        'Light, gently tart, and smoked—lichtenhainer is an unusual beer, yet surprisingly good for all seasons and one you’ll want to brew and enjoy often.',
      locked: false,
      Ingredients: [
        {
          id: 5,
          recipeId: 3,
          name: 'American - Pale 2-Row',
          amount: 5.6,
          type: 'Fermentable',
          units: 'Kg',
        },
        {
          id: 6,
          recipeId: 3,
          name: 'Fermentis - Safale - American Ale Yeast US-05',
          amount: 1,
          type: 'Yeast',
          units: '',
        },
        {
          id: 7,
          recipeId: 3,
          name: 'Magnum (Pellet)',
          amount: 1,
          type: 'Hops',
          units: 'oz',
        },
        {
          id: 8,
          recipeId: 3,
          name: 'Crush whilrfoc Tablet',
          amount: 1,
          type: 'Other',
          units: '',
        },
      ],
      Instructions: [
        {
          id: 11,
          recipeId: 3,
          templateId: 2,
          codeName: 'SET_MOTOR_SPEED',
          param: 30,
          category: 'MOTOR',
          optionCodeName: 'MOTOR_1',
          blockId: 1,
          blockName: 'Fermentation',
          ordering: 1,
        },
        {
          id: 12,
          recipeId: 3,
          templateId: 1,
          codeName: 'SET_TEMPERATURE',
          param: 85,
          category: 'TEMPERATURE',
          optionCodeName: 'TEMP_1',
          blockId: 1,
          blockName: 'Fermentation',
          ordering: 2,
        },
        {
          id: 13,
          recipeId: 3,
          templateId: 2,
          codeName: 'SET_MOTOR_SPEED',
          param: 0,
          category: 'MOTOR',
          optionCodeName: 'MOTOR_1',
          blockId: 2,
          blockName: 'Yeasting',
          ordering: 3,
        },
        {
          id: 14,
          recipeId: 3,
          templateId: 1,
          codeName: 'SET_TEMPERATURE',
          param: 23,
          category: 'TEMPERATURE',
          optionCodeName: 'TEMP_1',
          blockId: 2,
          blockName: 'Yeasting',
          ordering: 4,
        },
      ],
    },
    {
      id: 2,
      name: 'TEST_RECIPE_2',
      description: 'Seed recipe 1',
      locked: false,
      createdAt: new Date('2021-11-02T20:18:23.509Z'),
      updatedAt: new Date('2021-11-02T20:18:23.511Z'),
      Ingredients: [
        {
          id: 55,
          recipeId: 2,
          name: 'Some different ingredient',
          amount: 1,
          type: 'Fermented',
          units: 'Pcs',
        },
        {
          id: 505,
          recipeId: 2,
          name: 'Some different ingredient',
          amount: 1,
          type: 'Hops',
          units: 'Pcs',
        },
        {
          id: 5,
          recipeId: 2,
          name: 'Some ingredient',
          amount: 5.6,
          type: 'Hops',
          units: 'Kg',
        },
      ],
      Instructions: [
        {
          id: 11,
          recipeId: 3,
          templateId: 2,
          codeName: 'SET_MOTOR_SPEED',
          param: 30,
          category: 'MOTOR',
          optionCodeName: 'MOTOR_1',
          blockId: 1,
          blockName: 'Fermentation',
          ordering: 1,
        },
      ],
    },
    {
      id: 1,
      name: 'TEST_RECIPE_1',
      description: 'Seed recipe 1',
      locked: false,
      createdAt: new Date('2021-11-02T20:18:23.509Z'),
      updatedAt: new Date('2021-11-02T20:18:23.511Z'),
      Ingredients: [
        {
          id: 5,
          recipeId: 1,
          name: 'Some ingredient',
          amount: 5.6,
          type: 'Hops',
          units: 'Kg',
        },
        {
          id: 55,
          recipeId: 1,
          name: 'Some different ingredient',
          amount: 1,
          type: 'Fermented',
          units: 'Pcs',
        },
        {
          id: 505,
          recipeId: 1,
          name: 'Some different ingredient',
          amount: 1,
          type: 'Fermented',
          units: 'Pcs',
        },
      ],
      Instructions: [
        {
          id: 11,
          recipeId: 3,
          templateId: 2,
          codeName: 'SET_MOTOR_SPEED',
          param: 30,
          category: 'MOTOR',
          optionCodeName: 'MOTOR_1',
          blockId: 1,
          blockName: 'Fermentation',
          ordering: 1,
        },
      ],
    },
    {
      id: 4,
      name: 'TEST_RECIPE_4',
      description: 'Seed recipe 1',
      locked: false,
      createdAt: new Date('2021-11-02T20:18:23.509Z'),
      updatedAt: new Date('2021-11-02T20:18:23.511Z'),
      Ingredients: [
        {
          id: 5,
          recipeId: 4,
          name: 'Some ingredient',
          amount: 5.6,
          type: 'Hops',
          units: 'Kg',
        },
        {
          id: 5,
          recipeId: 4,
          name: 'Some different ingredient ffqwf',
          amount: 999,
          type: 'Yeast',
          units: 'Pcs',
        },
        {
          id: 505,
          recipeId: 4,
          name: 'Some different ingredient',
          amount: 1,
          type: 'Hops',
          units: 'Pcs',
        },
      ],
      Instructions: [
        {
          id: 11,
          recipeId: 3,
          templateId: 2,
          codeName: 'SET_MOTOR_SPEED',
          param: 30,
          category: 'MOTOR',
          optionCodeName: 'MOTOR_1',
          blockId: 1,
          blockName: 'Fermentation',
          ordering: 1,
        },
      ],
    },
    {
      id: 5,
      name: 'TEST_RECIPE_5',
      description: 'Seed recipe 1',
      locked: false,
      createdAt: new Date('2021-11-02T20:18:23.509Z'),
      updatedAt: new Date('2021-11-02T20:18:23.511Z'),
      Ingredients: [
        {
          id: 5,
          recipeId: 5,
          name: 'Some ingredient',
          amount: 5.6,
          type: 'Hops',
          units: 'Kg',
        },
      ],
      Instructions: [
        {
          id: 11,
          recipeId: 3,
          templateId: 2,
          codeName: 'SET_MOTOR_SPEED',
          param: 30,
          category: 'MOTOR',
          optionCodeName: 'MOTOR_1',
          blockId: 1,
          blockName: 'Fermentation',
          ordering: 1,
        },
      ],
    },
    {
      id: 6,
      name: 'TEST_RECIPE_6',
      description: 'Seed recipe 1',
      locked: false,
      createdAt: new Date('2021-11-02T20:18:23.509Z'),
      updatedAt: new Date('2021-11-02T20:18:23.511Z'),
      Ingredients: [
        {
          id: 5,
          recipeId: 6,
          name: 'Some ingredient',
          amount: 5.6,
          type: 'Hops',
          units: 'Kg',
        },
        {
          id: 55,
          recipeId: 6,
          name: 'Some different ingredient',
          amount: 1,
          type: 'Fermented',
          units: 'Pcs',
        },
        {
          id: 505,
          recipeId: 6,
          name: 'Some different ingredient',
          amount: 1,
          type: 'Hops',
          units: 'Pcs',
        },
        {
          id: 5588,
          recipeId: 6,
          name: 'Some different ingredient',
          amount: 1,
          type: 'Fermented',
          units: 'Pcs',
        },
        {
          id: 505888,
          recipeId: 6,
          name: 'Some different ingredient',
          amount: 1,
          type: 'Hops',
          units: 'Pcs',
        },
      ],
      Instructions: [
        {
          id: 11,
          recipeId: 3,
          templateId: 2,
          codeName: 'SET_MOTOR_SPEED',
          param: 30,
          category: 'MOTOR',
          optionCodeName: 'MOTOR_1',
          blockId: 1,
          blockName: 'Fermentation',
          ordering: 1,
        },
      ],
    },
  ],
};
