import React from 'react';
import Item from './Item';
import { formatNumToDefinedNumOfDecimal } from '../../helpers/DataFormatter';
import { Motor, Temperature } from '../../types/SystemData';

interface OneChamberData {
  NAME: string;
  TEMPERATURE: Temperature | undefined;
  MOTOR: Motor | undefined;
  cssPositionClass?: string;
}

// bolo by treba namapovat ale pravdepodobne sa bude prerabat tak zatial len takto
const BoxChamber: React.FC<OneChamberData> = ({
  TEMPERATURE,
  MOTOR,
  NAME,
  cssPositionClass = '',
}: OneChamberData) => {
  return (
    <div
      className={`chamber content-center rounded-3xl brewery-box ${cssPositionClass} p-2 bg-gray-200 border-2 border-black`}
    >
      <div className="space-y-5">
        <div className="font-bold text-lg">{NAME}</div>
        {TEMPERATURE && (
          <Item
            itemValue={formatNumToDefinedNumOfDecimal(TEMPERATURE.TEMP, 1)}
            name="TEMPERATURE"
            device={TEMPERATURE.DEVICE}
          />
        )}
        {MOTOR && (
          <Item
            itemValue={formatNumToDefinedNumOfDecimal(MOTOR.RPM, 1)}
            name="MOTOR"
            device={MOTOR.DEVICE}
          />
        )}
      </div>
    </div>
  );
};

export default BoxChamber;
