import React from 'react';
import RecepeState from '../types/RecepeState';
import ChamberInfo from '../types/ChamberInfo';
import Chamber from './Chamber';
import { ModuleData, Motor, Temperature } from '../types/SystemData';

const Chambers: React.FC<ModuleData> = ({
  TEMPERATURE,
  MOTOR,
  PUMP,
  UNLOADER,
}: ModuleData) => {
  return (
    <div className="container flex flex-row">
      {}
      {TEMPERATURE.map((tempO: Temperature) => (
        <Chamber
          device={tempO.DEVICE}
          temp={tempO.TEMP}
          rpm={10000000000}
          heating={tempO.STATE}
        />
      ))}
    </div>
  );
};

export default Chambers;
