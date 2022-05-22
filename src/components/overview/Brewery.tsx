import React from 'react';

import { useDataContext } from '../../contexts/dataContext';
import imgPlaceholder from '../../assets/schema.svg';
import { Unloader } from '../../types/SystemData';
import BoxChamber from './boxes/Chamber';
import BoxUnloader from './boxes/Unloader';
import Pump from './boxes/Pump';
import Relay from './boxes/Relay';

export type Unloaders = {
  unloadDevices: Array<Unloader>;
  name: string;
};

const Brewery: React.FC = () => {
  const { data } = useDataContext();

  const pump = data.RELAY?.find((device) => device.DEVICE === 'RELAY_3');
  const relay1 = data.RELAY?.find((device) => device.DEVICE === 'RELAY_1');
  const relay2 = data.RELAY?.find((device) => device.DEVICE === 'RELAY_2');

  return (
    <div className="h-full overflow-hidden overscroll-none relative space-y-5">
      <img src={imgPlaceholder} className="h-full" alt="placeholder" />
      {/* There is no other way to connect the right temperature and motor values together  */}
      <BoxChamber
        NAME="Chamber 1"
        temperature={data.TEMPERATURE[0]?.temp0}
        MOTOR={data.MOTOR[0]}
        cssPositionClass="left-box"
      />
      <BoxChamber
        NAME="Chamber 2"
        temperature={data.TEMPERATURE[0]?.temp1}
        MOTOR={data.MOTOR[1]}
        cssPositionClass="right-box"
      />
      {/* If there is a possibility to add more pumps, it can be remade */}
      <Pump name="Pump" value={pump?.enabled} device={pump?.DEVICE} />
      <Relay name="Relays" relay1={relay1} relay2={relay2} />
      <BoxUnloader unloadDevices={data.UNLOADER} name="Hoppers" />
    </div>
  );
};

export default Brewery;
