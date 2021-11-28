import React from 'react';

import { Route } from 'react-router-dom';
import RecipePage from './RecipePage';
import OverviewPage from './OverviewPage';
import RecipeInstructionsPage from './RecipeInstructionsPage';
import { MENU_HEIGHT } from '../components/Menu/MenuContainer';
import HistoryPage from './HistoryPage';

const Pages: React.FC = () => {
  return (
    <div
      className="items-center content-center text-center"
      style={{ height: `calc(100vh - ${MENU_HEIGHT}px)` }}
    >
      <Route path="/" exact component={OverviewPage} />
      <Route path="/recipe" component={RecipePage} />
      <Route path="/recipe/instructions" component={RecipeInstructionsPage} />
      <Route path="/history" component={HistoryPage} />
    </div>
  );
};

export default Pages;
