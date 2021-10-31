export type Status = 'WAITING' | 'IN_PROGRESS' | 'DONE' | 'ERROR';

export interface Temperature {
  TEMP: number;
  STATE: Status;
  DEVICE: string;
}

export interface Motor {
  SPEED: number;
  STATE: Status;
  RPM: number;
  DEVICE: string;
}

export interface Unloader {
  STATE: Status;
  DEVICE: string;
}

export interface Pump {
  STATE: Status;
  DEVICE: string;
}

export interface DataType {
  TEMPERATURE: Array<Temperature>;
  MOTOR: Array<Motor>;
  UNLOADER: Array<Unloader>;
  PUMP: Array<Pump>;
  // TEMP_1: Temperature;
  // TEMP_2: Temperature;
  // MOTOR_1: Motor;
  // MOTOR_2: Motor;
  // PUMP_1: string;
  // FERMENTABLE: Unloader;
  // HOPS: Unloader;
  // OTHER: Unloader;
  // YEAST: Unloader;
}
