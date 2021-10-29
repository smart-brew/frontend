import React from 'react';
import imgPlaceholder from '../brewery_placeholder.svg';
import InstrType from '../types/InstrType';
import BlockType from '../types/BlockType';
import Block from './recipe/Block';
import { DataContext } from '../contexts/dataContext';

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

const Brewery: React.FC = () => {
  return (
    <div className="w-2/3">
      <img src={imgPlaceholder} className="w-full" alt="placeholder" />
      <a href="https://www.freepik.com/vectors/vintage" className="App-credits">
        Vintage vector created by dgim-studio - www.freepik.com
      </a>
    </div>
  );
};

export default Brewery;
