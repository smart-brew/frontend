import { ModuleData } from '../types/SystemData';

export const moduleData: ModuleData = {
  TEMPERATURE: [
    {
      TEMP: 50,
      STATE: 'IN_PROGRESS',
      DEVICE: 'TEMP_1',
      CODENAME: 'SET_TEMPERATURE',
      CATEGORY: 'TEMPERATURE',
    },
    {
      TEMP: 21.5,
      STATE: 'WAITING',
      DEVICE: 'TEMP_2',
      CODENAME: 'SET_TEMPERATURE',
      CATEGORY: 'TEMPERATURE',
    },
  ],
  MOTOR: [
    {
      SPEED: 30,
      RPM: 25,
      STATE: 'WAITING',
      DEVICE: 'MOTOR_1',
      CODENAME: 'SET_MOTOR_SPEED',
      CATEGORY: 'MOTOR',
    },
    {
      SPEED: 0,
      RPM: 0,
      STATE: 'WAITING',
      DEVICE: 'MOTOR_2',
      CODENAME: 'SET_MOTOR_SPEED',
      CATEGORY: 'MOTOR',
    },
  ],
  UNLOADER: [
    {
      STATE: 'WAITING',
      DEVICE: 'FERMENTABLE',
      CODENAME: 'UNLOAD',
      CATEGORY: 'UNLOADER',
    },
    {
      STATE: 'WAITING',
      DEVICE: 'YEAST',
      CODENAME: 'UNLOAD',
      CATEGORY: 'UNLOADER',
    },
    {
      STATE: 'WAITING',
      DEVICE: 'HOPS',
      CODENAME: 'UNLOAD',
      CATEGORY: 'UNLOADER',
    },
    {
      STATE: 'WAITING',
      DEVICE: 'OTHER',
      CODENAME: 'UNLOAD',
      CATEGORY: 'UNLOADER',
    },
  ],
  PUMP: [
    {
      STATE: 'WAITING',
      DEVICE: 'PUMP_1',
      CODENAME: 'TRANSFER_LIQUIDS',
      CATEGORY: 'PUMP',
      ENABLED: 'false',
    },
  ],
};
