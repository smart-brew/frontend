import React from 'react';
import Block from '../recipe/Block';
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
    <div className="w-1/3">
      <Block
        id={brewBlock.id}
        name={brewBlock.name}
        instructions={brewBlock.instructions}
      />
    </div>
  );
};

export default RecipeOverview;
