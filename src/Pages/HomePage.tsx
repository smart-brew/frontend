import React from 'react';

import { Link } from 'react-router-dom';
import Brewery from '../components/Brewery';
import RecipeOverview from '../components/RecipeOverview/RecipeOverview';
import { DataContext } from '../contexts/dataContext';

const HomePage: React.FC = () => {
  const data = React.useContext(DataContext);

  return (
    <>
      <div className="flex flex-row justify-center">
        <Brewery />
        <RecipeOverview />
      </div>
      <div>
        Newest data from backend /api/brew/brewId : {JSON.stringify(data)}
      </div>
      {/* <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                type="button"
                onClick={() => setShow(true)}
              >
                Start brewing
              </button>
              <StartBrewingPopup show={show} onClose={() => setShow(false)} /> */}
      <Link
        to="/recipe"
        className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Pick a recipe
      </Link>
    </>
  );
};

export default HomePage;
