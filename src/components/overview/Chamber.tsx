import React from 'react';
import ChamberInfo from '../../types/ChamberInfo';
import UnitsMap from '../../helper_scripts/UnitsMap';

// bolo by treba namapovat ale pravdepodobne sa bude prerabat tak zatial len takto
const Chamber: React.FC<ChamberInfo> = ({
  temp,
  rpm,
  heating,
}: ChamberInfo) => {
  const heatingN = new UnitsMap().getUnit(heating);

  return (
    <div className="chamber w-1/2 content-center shadow rounded-3xl">
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
  );
};

export default Chamber;
