import React from 'react';
import Item from './Item';
import { OneChamberData } from '../../types/SystemData';

// bolo by treba namapovat ale pravdepodobne sa bude prerabat tak zatial len takto
const BoxChamber: React.FC<OneChamberData> = ({
  TEMPERATURE,
  MOTOR,
  NAME,
}: OneChamberData) => {
  // const heatingN = new UnitsMap().getUnit(heating);

  return (
    <div className="chamber w-1/2 content-center shadow rounded-3xl">
      <div>{NAME}</div>
      <Item
        itemValue={TEMPERATURE.TEMP}
        name={TEMPERATURE.CATEGORY}
        codeName={TEMPERATURE.CODENAME}
      />
      <Item
        itemValue={MOTOR.RPM}
        name={MOTOR.CATEGORY}
        codeName={MOTOR.CODENAME}
      />
    </div>
  );
};

export default BoxChamber;
