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
      start: 1351315513,
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

const RecipeOverview: React.FC = () => {
  return (
    <div className="w-2/5 h-screen mb-10 py-4 pr-6 pl-20 bg-gray-50 border-l-2 border-gray-300 overflow-hidden">
      <h2 className="font-bold text-3xl pb-10">Názov receptu</h2>
      <div className="h-5/6 overflow-y-auto overflow-x-hidden overscroll-contain space-y-5 pr-3 rounded-2xl">
        <Block
          id={brewBlock.id}
          name={brewBlock.name}
          instructions={brewBlock.instructions}
        />
        <Block
          id={brewBlock.id}
          name={brewBlock.name}
          instructions={brewBlock.instructions}
        />
      </div>
    </div>
  );
};

export default RecipeOverview;
