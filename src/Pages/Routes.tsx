import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import RecipePage from './RecipePage';
import HomePage from './HomePage';

const Routes: React.FC = () => {
  return (
    <Router>
      <div className="items-center content-center text-center">
        <Route path="/" exact component={HomePage} />
        <Route path="/recipe" component={RecipePage} />
      </div>
    </Router>
  );
};

export default Routes;
