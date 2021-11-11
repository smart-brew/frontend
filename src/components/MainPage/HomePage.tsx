import React, { useState } from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Brewery from '../Brewery';
import Block from '../recipe/Blocks/Block';
import BlockType from '../../types/BlockType';
import RecipeOverview from '../RecipeOverview/RecipeOverview';
import { DataContext } from '../../contexts/dataContext';
import RecipePage from './RecipePage';
import IngredientsForm from '../RecipeMaking/IngredientsForm';
import { StartBrewingPopup } from '../RecipeMaking/ConfirmBrewingStart/StartBrewingPopup';

const HomePage: React.FC = () => {
  const data = React.useContext(DataContext);
  const [show, setShow] = useState(false);
  // eslint-disable-next-line
  return (
    <Router>
      <div className="items-center content-center text-center">
        <Route
          path="/"
          exact
          render={(props) => (
            <>
              <div className="flex flex-row justify-center">
                <Brewery />
                <RecipeOverview />
              </div>
              <div>
                Newest data from backend /api/brew/brewId :{' '}
                {JSON.stringify(data)}
              </div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                type="button"
                onClick={() => setShow(true)}
              >
                Start brewing
              </button>
              <StartBrewingPopup show={show} onClose={() => setShow(false)} />
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
