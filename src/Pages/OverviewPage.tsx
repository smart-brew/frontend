import React from 'react';

import Brewery from '../components/Brewery';
import RecipeOverview from '../components/RecipeOverview/RecipeOverview';

const OverviewPage: React.FC = () => {
  return (
    <div className="flex flex-row justify-center h-full">
      <Brewery />
      <RecipeOverview />
    </div>
  );
};

export default OverviewPage;
