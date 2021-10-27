export type Status = 'WAITING' | 'IN_PROGRESS' | 'DONE' | 'ERROR';

export interface Temperature {
  TEMP: number;
  STATUS: Status;
}

export interface Motor {
  SPEED: number;
  STATE: string;
  RPM: number;
}

export interface Unloader {
  STATE: string;
}

export interface DataType {
  TEMP_1: Temperature;
  TEMP_2: Temperature;
  MOTOR_1: Motor;
  MOTOR_2: Motor;
  PUMP_1: string;
  FERMENTABLE: Unloader;
  HOPS: Unloader;
  OTHER: Unloader;
  YEAST: Unloader;
}
