import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Brewery from '../components/Brewery';
import RecipeOverview from '../components/RecipeOverview/RecipeOverview';

const OverviewPage: React.FC = () => {
  interface CustomState {
    rId: number;
  }

  const location = useLocation();
  const state = location.state as CustomState;

  if (location.state) {
    console.log(state.rId);
  }
  return (
    <div className="flex flex-row justify-center h-full">
      <Brewery />
      <RecipeOverview />
    </div>
  );
};

export default OverviewPage;
