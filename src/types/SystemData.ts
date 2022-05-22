// -----------------------------------------------------------
// DO NOT MODIFY THIS FILE - IT CONTAINS EXACT TYPES FROM API
// -----------------------------------------------------------

export type Status = 'WAITING' | 'IN_PROGRESS' | 'DONE' | 'ERROR';

export type BrewingStatus =
  | 'IDLE'
  | 'IN_PROGRESS'
  | 'ERROR'
  | 'PAUSED'
  | 'ABORT'
  | 'FINISHED';

export interface BasicData {
  STATE: Status;
  DEVICE: string;
  CATEGORY: string;
}

export type Temperature = BasicData & {
  temp0?: number;
  temp1?: number;
};

export type Motor = BasicData & {
  SPEED: number;
  RPM: number;
  enabled?: boolean;
};

export type Relay = BasicData & {
  enabled: number;
};

// eslint-disable-next-line @typescript-eslint/ban-types
export type Unloader = BasicData & {};

// eslint-disable-next-line @typescript-eslint/ban-types
export type Pump = BasicData & {
  ENABLED: string;
};

export interface ModuleData {
  TEMPERATURE: Array<Temperature>;
  MOTOR: Array<Motor>;
  UNLOADER: Array<Unloader>;
  PUMP: Array<Pump>;
  RELAY: Array<Relay>;
}

export interface InstructionStatus {
  currentInstruction: number;
  currentValue: number;
  status: Status;
}

export interface SystemData {
  data: ModuleData;
  instruction: InstructionStatus;
  brewStatus: BrewingStatus;
  errorMessage?: string;
}

export interface Instruction {
  type: 'instruction';
  moduleId: number;
  category: string;
  device: string;
  instruction: string;
  params: string;
}
