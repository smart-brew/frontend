export type Status = 'WAITING' | 'IN_PROGRESS' | 'DONE' | 'ERROR';

export type BrewingStatus =
  | 'IDLE'
  | 'IN_PROGRESS'
  | 'ERROR'
  | 'PAUSED'
  | 'ABORTED'
  | 'FINISHED';

export interface BasicData {
  STATE: Status;
  DEVICE: string;
}

export type Temperature = BasicData & {
  TEMP: number;
};

export type Motor = BasicData & {
  SPEED: number;
  RPM: number;
};

// eslint-disable-next-line @typescript-eslint/ban-types
export type Unloader = BasicData & {};

// eslint-disable-next-line @typescript-eslint/ban-types
export type Pump = BasicData & {};

export interface ModuleData {
  TEMPERATURE: Array<Temperature>;
  MOTOR: Array<Motor>;
  UNLOADER: Array<Unloader>;
  PUMP: Array<Pump>;
}

export interface InstructionStatus {
  currentInstructionId: number;
  status: Status;
}

export interface SystemData {
  data: ModuleData;
  instruction: InstructionStatus;
  brewStatus: BrewingStatus;
}