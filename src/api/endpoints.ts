import { BaseBrewingApi, BrewingApi } from '../types/BrewingType';
import InstructionTemplate from '../types/FunctionData/InstructionTemplate';
import RecipeType, { RecipeSimple } from '../types/RecipeData/RecipeType';
import { SystemData } from '../types/SystemData';
import { IdReturn } from './helpers';

export type Endpoints = {
  'GET /api/data': SystemData;
  'GET /api/function': InstructionTemplate[];
  'GET /api/recipe': RecipeSimple[];
  'GET /api/recipe/:id': RecipeType;
  'GET /api/brew': BaseBrewingApi[];
  'GET /api/brew/:brewId': BrewingApi;
  'POST /api/brew/:brewId/instruction/:instructionId/done': IdReturn;
  'POST /api/brew/:id/abort': IdReturn;
  'POST /api/brew/:id/pause': IdReturn;
  'POST /api/brew/:id/resume': IdReturn;
  'POST /api/recipe/:id/delete': IdReturn;
  'POST /api/recipe/:id/load': IdReturn;
  'POST /api/shutdown': void;
  'PUT /api/brew/0/start': IdReturn;
  'PUT /api/recipe': IdReturn;
  'PUT /api/recipe/:id/edit': IdReturn;
  'POST /api/instruction': IdReturn;
};
