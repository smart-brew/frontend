import React from 'react';
import ChamberInfo from '../types/ChamberInfo';
import UnitsMap from '../helper_scripts/UnitsMap';

// bolo by treba namapovat ale pravdepodobne sa bude prerabat tak zatial len takto
const Chamber: React.FC<ChamberInfo> = ({
  device,
  temp,
  rpm,
  heating,
}: ChamberInfo) => {
  const heatingN = new UnitsMap().getUnit(heating);
  // eslint-disable-next-line
  return (
    console.log(heatingN),
    (
      <div className="chamber w-1/2 content-center  border-2 border-gray-300 rounded-3xl ">
        <div>
          <p>Temperature</p>
          <p className="font-bold">{temp} °C</p>
        </div>
        <div>
          <p>Motor speed</p>
          <p className="font-bold">{rpm} RMD</p>
        </div>
        <div>
          <p>Heating</p>
          <p className="font-bold">{heatingN}</p>
        </div>
      </div>
    )
  );
};

export default Chamber;
