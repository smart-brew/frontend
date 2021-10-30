import React from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Brewery from '../Brewery';
import Block from '../recipe/Blocks/Block';
import BlockType from '../../types/BlockType';
import RecipeOverview from '../RecipeOverview/RecipeOverview';
import { DataContext } from '../../contexts/dataContext';
import RecipePage from './RecipePage';

const HomePage: React.FC = () => {
  const data = React.useContext(DataContext);
  // eslint-disable-next-line
  return (

    <Router>
      <div className="items-center content-center text-center">
        <Route
          path="/"
          exact
          render={(props) => (
            <>
              <div className="flex flex-row p-10 align-middle justify-center">
                <Brewery />
                <RecipeOverview />
              </div>
              <div>
                Newest data from backend /api/brew/brewId :{' '}
                {JSON.stringify(data)}
              </div>
              <Link
                to="/recipe"
                className=" underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
              >
                Recipe click me
              </Link>
            </>
          )}
        />
        <Route path="/recipe" component={RecipePage} />
      </div>
    </Router>

  );
};

export default HomePage;
