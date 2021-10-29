import React from 'react';
import Brewery from '../Brewery';
import Block from '../recipe/Block';
import BlockType from '../../types/BlockType';
import RecipeOverview from '../RecipeOverview/RecipeOverview';
import { DataContext } from '../../contexts/dataContext';

const HomePage: React.FC = () => {
  // eslint-disable-next-line
  return (
    <div className="flex flex-row p-10 align-middle justify-center">
      <Brewery />
      <RecipeOverview />
    </div>
  );
};

export default HomePage;
