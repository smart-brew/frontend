import React from 'react';
import InstrType from '../types/InstrType';
import { ModuleData } from '../types/SystemData';
import Chambers from './Chambers';
import BlockType from '../types/BlockType';
import Block from './recipe/Blocks/Block';
import { DataContext } from '../contexts/dataContext';
// import { data } from 'autoprefixer';
import imgPlaceholder from '../brewery_placeholder.svg';

const tempInstruction: InstrType = {
  id: 0,
  name: 'Heat up',
  parentBlockId: 0,
  currParam: 40,
  targetParam: 100,
  start: 12145,
  end: 212545,
  orderNum: 1,
  chamberId: 0,
};

const moduleData: ModuleData = {
  TEMPERATURE: [
    {
      TEMP: 50,
      STATE: 'IN_PROGRESS',
      DEVICE: 'TEMP_1',
    },
    {
      TEMP: 21.5,
      STATE: 'WAITING',
      DEVICE: 'TEMP_2',
    },
  ],
  MOTOR: [
    {
      SPEED: 30,
      RPM: 25,
      STATE: 'WAITING',
      DEVICE: 'MOTOR_1',
    },
    {
      SPEED: 0,
      RPM: 0,
      STATE: 'WAITING',
      DEVICE: 'MOTOR_2',
    },
  ],
  UNLOADER: [
    {
      STATE: 'WAITING',
      DEVICE: 'FERMENTABLE',
    },
    {
      STATE: 'WAITING',
      DEVICE: 'YEAST',
    },
    {
      STATE: 'WAITING',
      DEVICE: 'HOPS',
    },
    {
      STATE: 'WAITING',
      DEVICE: 'OTHER',
    },
  ],
  PUMP: [
    {
      STATE: 'WAITING',
      DEVICE: 'PUMP_1',
    },
  ],
};

const Brewery: React.FC = () => {
  const data = React.useContext(DataContext)?.data || moduleData;

  return (
    <div className="w-2/3">
      <img src={imgPlaceholder} className="w-full" alt="placeholder" />
      <Chambers
        TEMPERATURE={data.TEMPERATURE}
        MOTOR={data.MOTOR}
        UNLOADER={data.UNLOADER}
        PUMP={data.UNLOADER}
      />
      <a href="https://www.freepik.com/vectors/vintage" className="App-credits">
        Vintage vector created by dgim-studio - www.freepik.com
      </a>
    </div>
  );
};

export default Brewery;
