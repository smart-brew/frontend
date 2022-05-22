import React from 'react';
import Item from './Item';
import { formatNumToDefinedNumOfDecimal } from '../../../helpers/DataFormatter';
import { Motor } from '../../../types/SystemData';

interface OneChamberData {
  NAME: string;
  temperature: number | undefined;
  MOTOR: Motor | undefined;
  cssPositionClass?: string;
}

// bolo by treba namapovat ale pravdepodobne sa bude prerabat tak zatial len takto
const BoxChamber: React.FC<OneChamberData> = ({
  temperature,
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
        {temperature && (
          <Item
            value={formatNumToDefinedNumOfDecimal(temperature, 1)}
            name="TEMPERATURE"
          />
        )}
        {MOTOR && typeof MOTOR.RPM !== 'undefined' && (
          <Item
            value={formatNumToDefinedNumOfDecimal(MOTOR.RPM, 1)}
            name="MOTOR"
            device={MOTOR.DEVICE}
          />
        )}
        {MOTOR && typeof MOTOR.enabled !== 'undefined' && (
          <Item value={MOTOR.enabled ? 'ON' : 'OFF'} name="MOTOR" />
        )}
      </div>
    </div>
  );
};

export default BoxChamber;
