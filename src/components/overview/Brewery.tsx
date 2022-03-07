import React from 'react';

import { DataContext } from '../../contexts/dataContext';
import imgPlaceholder from '../../assets/schema.svg';
import { moduleData } from '../../data/moduleData';
import { Unloader } from '../../types/SystemData';
import BoxChamber from './BoxChamber';
import BoxUnloader from './BoxUnloader';
import BoxPump from './BoxPump';

export type Unloaders = {
  unloadDevices: Array<Unloader>;
  name: string;
};

const Brewery: React.FC = () => {
  const data = React.useContext(DataContext)?.data || moduleData;

  return (
    <div className="h-full overflow-hidden overscroll-none relative space-y-5">
      <img src={imgPlaceholder} className="h-full" alt="placeholder" />
      {/* There is no other way to connect the right temperature and motor values together  */}
      <BoxChamber
        NAME="Nádoba 1"
        TEMPERATURE={data.TEMPERATURE[0]}
        MOTOR={data.MOTOR[0]}
        cssPositionClass="left-box"
      />
      <BoxChamber
        NAME="Nádoba 2"
        TEMPERATURE={data.TEMPERATURE[1]}
        MOTOR={data.MOTOR[1]}
        cssPositionClass="right-box"
      />
      {/* If there is a possibility to add more pumps, it can be remade */}
      <BoxPump
        name="Pumpa"
        itemValue={data.PUMP[0].ENABLED}
        codeName={data.PUMP[0].CODENAME}
      />
      <BoxUnloader unloadDevices={data.UNLOADER} name="Násypníky" />
    </div>
  );
};

export default Brewery;
