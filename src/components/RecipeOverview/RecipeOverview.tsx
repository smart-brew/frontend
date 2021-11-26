import React from 'react';
import Block from '../recipe/Blocks/Block';
import BlockType from '../../types/BlockType';

const brewBlock: BlockType = {
  // the recipe select will send an array of blocks, each with id and name
  id: 0,
  name: 'Varenie jačmeňa',
  instructions: [
    {
      id: 0,
      name: 'Motor',
      parentBlockId: 0,
      currParam: 40,
      targetParam: 100,
      start: 54453453,
      end: 534535435,
      orderNum: 0,
      chamberId: 0,
    },
    {
      id: 1,
      name: 'Heat up',
      parentBlockId: 0,
      currParam: 50,
      targetParam: 70,
      start: 5454654656,
      end: null,
      orderNum: 1,
      chamberId: 0,
    },
    {
      id: 0,
      name: 'Motor',
      parentBlockId: 0,
      currParam: 40,
      targetParam: 0,
      start: null,
      end: null,
      orderNum: 2,
      chamberId: 0,
    },
  ],
};

const brewBlock2: BlockType = {
  // the recipe select will send an array of blocks, each with id and name
  id: 0,
  name: 'Fermentácia',
  instructions: [
    {
      id: 0,
      name: 'Motor',
      parentBlockId: 1,
      currParam: 10,
      targetParam: 30,
      start: null,
      end: null,
      orderNum: 3,
      chamberId: 1,
    },
    {
      id: 2,
      name: 'Wait',
      parentBlockId: 1,
      currParam: 2,
      targetParam: 10,
      start: null,
      end: null,
      orderNum: 4,
      chamberId: 1,
    },
    {
      id: 0,
      name: 'Motor',
      parentBlockId: 1,
      currParam: 40,
      targetParam: 0,
      start: null,
      end: null,
      orderNum: 5,
      chamberId: 1,
    },
  ],
};

const RecipeOverview: React.FC = () => {
  return (
    <div>
      <h2 className="font-bold text-3xl pb-10">Názov receptu</h2>
      <div className="h-5/6 overflow-y-auto overflow-x-hidden overscroll-contain space-y-5 pr-3 rounded-2xl  pl-20">
        <Block
          id={brewBlock.id}
          name={brewBlock.name}
          instructions={brewBlock.instructions}
        />
        <Block
          id={brewBlock2.id}
          name={brewBlock2.name}
          instructions={brewBlock2.instructions}
        />
      </div>
    </div>
  );
};

export default RecipeOverview;
