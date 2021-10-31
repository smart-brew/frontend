import React from 'react';
import RecipeState from '../types/RecipeState';
import ChamberInfo from '../types/ChamberInfo';
import Chamber from './Chamber';
import { DataType, Motor, Temperature } from '../types/Data';

const Chambers: React.FC<DataType> = ({
  TEMPERATURE,
  MOTOR,
  PUMP,
  UNLOADER,
}: DataType) => {
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
