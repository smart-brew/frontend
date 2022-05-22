import React from 'react';
import { Relay } from '../../../types/SystemData';
import Item from './Item';

type Props = {
  name: string;
  relay1?: Relay;
  relay2?: Relay;
};

const Relay: React.FC<Props> = ({ name, relay1, relay2 }) => {
  return (
    <div className="chamber w-1/6 content-center rounded-3xl bg-gray-200 p-2 border-2 border-black space-y-5 -top-3 right-2 absolute">
      <p className="font-bold text-lg">{name}</p>

      {relay1 && (
        <div className={`${relay1.enabled && 'bg-green-100'} rounded-2xl`}>
          <Item value={relay1.enabled ? 'ON' : 'OFF'} name={relay1.DEVICE} />
        </div>
      )}
      {relay2 && (
        <div className={`${relay2.enabled && 'bg-green-100'} rounded-2xl`}>
          <Item value={relay2.enabled ? 'ON' : 'OFF'} name={relay2.DEVICE} />
        </div>
      )}
    </div>
  );
};

export default Relay;
