import React from 'react';

import Chambers from './Chambers';
import { DataContext } from '../contexts/dataContext';
import imgPlaceholder from '../brewery_placeholder.svg';
import { moduleData } from '../data/moduleData';

const Brewery: React.FC = () => {
  const data = React.useContext(DataContext)?.data || moduleData;

  return (
    <div className="">
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
