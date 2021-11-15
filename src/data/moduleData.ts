import { ModuleData } from '../types/SystemData';

export const moduleData: ModuleData = {
  TEMPERATURE: [
    {
      TEMP: 50,
      STATE: 'IN_PROGRESS',
      DEVICE: 'TEMP_1',
    },
    {
      TEMP: 21.5,
      STATE: 'WAITING',
      DEVICE: 'TEMP_2',
    },
  ],
  MOTOR: [
    {
      SPEED: 30,
      RPM: 25,
      STATE: 'WAITING',
      DEVICE: 'MOTOR_1',
    },
    {
      SPEED: 0,
      RPM: 0,
      STATE: 'WAITING',
      DEVICE: 'MOTOR_2',
    },
  ],
  UNLOADER: [
    {
      STATE: 'WAITING',
      DEVICE: 'FERMENTABLE',
    },
    {
      STATE: 'WAITING',
      DEVICE: 'YEAST',
    },
    {
      STATE: 'WAITING',
      DEVICE: 'HOPS',
    },
    {
      STATE: 'WAITING',
      DEVICE: 'OTHER',
    },
  ],
  PUMP: [
    {
      STATE: 'WAITING',
      DEVICE: 'PUMP_1',
    },
  ],
};
