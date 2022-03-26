import React from 'react';
import { useLocation } from 'react-router-dom';
import Brewery from '../components/overview/Brewery';
import SplitPage from '../components/shared/SplitPage';
import RecipeProgress from '../components/sidebar/RecipeProgress';

export interface OverviewPageState {
  recipeId: number;
}

const OverviewPage: React.FC = () => {
  const location = useLocation();
  const state = location.state as OverviewPageState;

  return (
    <SplitPage>
      <Brewery />
      <RecipeProgress recipeId={state?.recipeId ?? null} />
    </SplitPage>
  );
};

export default OverviewPage;
