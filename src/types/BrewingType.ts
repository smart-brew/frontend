import RecipeType from './RecipeData/RecipeType';

export interface InstructionLogApi {
  id: number;
  brewingId: number;
  instructionId: number;
  finished: boolean;
  startedAt: number;
}

export interface StatusLogApi {
  id: number;
  brewingId: number;
  status: string;
  params: string; // na BE je toto typu Prisma.JsonValue, ktory nemusi byt json ale z DB by mal prist vzdy validny json
  createdAt: number;
}

export type BrewState = 'Aborted' | 'Finished';

// array of base brewings sent by GET api/brew
export interface BaseBrewingApi {
  id: number;
  notes: string | null;
  evaluation: number | null;
  endState: BrewState;
  recipeName: string;
  startedAt: string;
  finishedAt: string;
}

// single brewing sent by GET api/brew/:brewId
export interface BrewingApi extends BaseBrewingApi {
  recipe: RecipeType;
  InstructionLogs: InstructionLogApi[];
  StatusLogs: StatusLogApi[];
}
