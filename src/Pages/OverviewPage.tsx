import React from 'react';
import { useLocation } from 'react-router-dom';
import Brewery from '../components/overview/Brewery';
import SplitPage from '../components/shared/SplitPage';
import RecipeProgress from '../SideBars/RecipeProgress';

export interface OverviewPageState {
  recipeId: number;
}

const OverviewPage: React.FC = () => {
  const location = useLocation();
  const state = location.state as OverviewPageState;

  return (
    <SplitPage>
      <Brewery />
      <RecipeProgress recipeId={state?.recipeId} />
    </SplitPage>
  );
};

export default OverviewPage;
