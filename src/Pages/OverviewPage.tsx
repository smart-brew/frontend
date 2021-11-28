import React from 'react';
import { useLocation } from 'react-router-dom';
import Brewery from '../components/overview/Brewery';
import RecipeProgress from '../SideBars/RecipeProgress';

interface CustomState {
  rId: number;
}

const OverviewPage: React.FC = () => {
  const location = useLocation();
  const state = location.state as CustomState;

  return (
    <div className="flex flex-row justify-center h-full min-h-full max-h-full">
      <div className="picture h-full w-2/3">
        <Brewery />
      </div>
      <div className="sidebar w-1/3 h-full border-l-2 border-gray-300">
        <div className="h-full">
          {state ? (
            <RecipeProgress recipeId={state.rId} />
          ) : (
            <div>This is the welcome page</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;
