import { ModuleData } from '../types/SystemData';

export const moduleData: ModuleData = {
  TEMPERATURE: [
    {
      temp1: 50,
      STATE: 'IN_PROGRESS',
      DEVICE: 'TEMP_1',
      CATEGORY: 'TEMPERATURE',
    },
    {
      temp1: 21.5,
      STATE: 'WAITING',
      DEVICE: 'TEMP_1',
      CATEGORY: 'TEMPERATURE',
    },
  ],
  MOTOR: [
    {
      SPEED: 30,
      RPM: 25,
      STATE: 'WAITING',
      DEVICE: 'MOTOR_1',
      CATEGORY: 'MOTOR',
    },
    {
      SPEED: 0,
      RPM: 0,
      STATE: 'WAITING',
      DEVICE: 'MOTOR_2',
      CATEGORY: 'MOTOR',
    },
  ],
  UNLOADER: [
    {
      STATE: 'WAITING',
      DEVICE: 'FERMENTABLE',
      CATEGORY: 'UNLOADER',
    },
    {
      STATE: 'WAITING',
      DEVICE: 'YEAST',
      CATEGORY: 'UNLOADER',
    },
    {
      STATE: 'WAITING',
      DEVICE: 'HOPS',
      CATEGORY: 'UNLOADER',
    },
    {
      STATE: 'WAITING',
      DEVICE: 'OTHER',
      CATEGORY: 'UNLOADER',
    },
  ],
  PUMP: [
    {
      STATE: 'WAITING',
      DEVICE: 'PUMP_1',
      CATEGORY: 'PUMP',
      ENABLED: 'false',
    },
  ],
  RELAY: [
    {
      STATE: 'WAITING',
      DEVICE: 'RELAY_1',
      CATEGORY: 'RELAY',
      enabled: 0,
    },
  ],
};
