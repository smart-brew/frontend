import React from 'react';

import { DataContext } from '../../contexts/dataContext';
import imgPlaceholder from '../../assets/schema.svg';
import { moduleData } from '../../data/moduleData';
import { Unloader } from '../../types/SystemData';
import Item from './Item';
import BoxChamber from './BoxChamber';
import BoxUnloader from './BoxUnloader';

export type Unloaders = {
  unloadDevices: Array<Unloader>;
  name: string;
};

const Brewery: React.FC = () => {
  const data = React.useContext(DataContext)?.data || moduleData;

  return (
    <div className="h-screen overflow-hidden overscroll-none relative space-y-5">
      <img src={imgPlaceholder} className="h-4/5" alt="placeholder" />
      {/* There is no other way to connect the right temperature and motor values together  */}
      <BoxChamber
        NAME="Nadoba 1"
        TEMPERATURE={data.TEMPERATURE[0]}
        MOTOR={data.MOTOR[0]}
        positionX="left-52"
      />
      <BoxChamber
        NAME="Nadoba 2"
        TEMPERATURE={data.TEMPERATURE[1]}
        MOTOR={data.MOTOR[1]}
        positionX="right-96"
      />
      {/* If there is a possibility to add more pumps, it can be remade */}
      <Item
        name="Pumpa"
        itemValue={data.PUMP[0].ENABLED}
        codeName={data.PUMP[0].CODENAME}
      />
      <BoxUnloader unloadDevices={data.UNLOADER} name="Nasypniky" />

      <a href="https://www.freepik.com/vectors/vintage" className="App-credits">
        Vintage vector created by dgim-studio - www.freepik.com
      </a>
    </div>
  );
};

export default Brewery;
