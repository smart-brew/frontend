import React from 'react';
import Chamber from './Chamber';
import { ModuleData } from '../../types/SystemData';

const Chambers: React.FC<ModuleData> = ({ TEMPERATURE }: ModuleData) => {
  return (
    <div className="container flex flex-row">
      {TEMPERATURE.map((tempO) => (
        <Chamber
          key={tempO.DEVICE}
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
