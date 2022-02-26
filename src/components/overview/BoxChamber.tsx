import React from 'react';
import Item from './Item';
import { OneChamberData } from '../../types/SystemData';
import { formatNumToDefinedNumOfDecimal } from '../../helpers/DataFormatter';

// bolo by treba namapovat ale pravdepodobne sa bude prerabat tak zatial len takto
const BoxChamber: React.FC<OneChamberData> = ({
  TEMPERATURE,
  MOTOR,
  NAME,
  positionX,
  positionY,
}: OneChamberData) => {
  // const heatingN = new UnitsMap().getUnit(heating);

  return (
    <div
      className={`chamber w-1/6 content-center rounded-3xl absolute top-1/4 ${positionX} p-2 bg-white border-2 border-black`}
    >
      <div className="space-y-5">
        <div className="font-bold text-lg">{NAME}</div>
        <Item
          itemValue={formatNumToDefinedNumOfDecimal(TEMPERATURE.TEMP, 1)}
          name={TEMPERATURE.CATEGORY}
          codeName={TEMPERATURE.CODENAME}
        />
        <Item
          itemValue={MOTOR.RPM}
          name={MOTOR.CATEGORY}
          codeName={MOTOR.CODENAME}
        />
      </div>
    </div>
  );
};

export default BoxChamber;
