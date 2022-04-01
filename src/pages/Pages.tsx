import React from 'react';

import { Route } from 'react-router-dom';
import RecipePage from './RecipePage';
import OverviewPage from './OverviewPage';
import RecipeInstructionsPage from './RecipeInstructionsPage';
import HistoryPage from './HistoryPage';
import RecipeIngredientsPage from './RecipeIngredientsPage';
import TesterPage from './TesterPage';

const Pages: React.FC = () => {
  return (
    <div className="items-center content-center text-center">
      <Route path="/" exact component={OverviewPage} />
      <Route path="/recipe" exact component={RecipePage} />
      <Route path="/recipe/instructions" component={RecipeInstructionsPage} />
      <Route path="/recipe/ingredients" component={RecipeIngredientsPage} />
      <Route path="/history" component={HistoryPage} />
      <Route path="/tester" component={TesterPage} />
    </div>
  );
};

export default Pages;
