import React from 'react';
import Brewery from '../Brewery';
import Block from '../recipe/Blocks/Block';
import BlockType from '../../types/BlockType';
import RecipeOverview from '../RecipeOverview/RecipeOverview';
import { DataContext } from '../../contexts/dataContext';

const HomePage: React.FC = () => {
  const data = React.useContext(DataContext);
  // eslint-disable-next-line
  return (
    <div className="items-center content-center text-center">
      <div className="flex flex-row justify-center">
        <Brewery />
        <RecipeOverview />
      </div>
      <div>
        Newest data from backend /api/brew/brewId : {JSON.stringify(data)}
      </div>
    </div>
  );
};

export default HomePage;
