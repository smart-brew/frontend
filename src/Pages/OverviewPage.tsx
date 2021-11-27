import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Brewery from '../components/Brewery';
import { recipeList } from '../data/recipe';
import RecipeOverview from '../components/RecipeOverview/RecipeOverview';
import { IngredientSection } from '../components/RecipeMaking/ConfirmBrewingStart/IngredientSection';
import RecipeType from '../types/RecipeData/RecipeType';
import SideBarOverviewPage from '../SideBars/SideBarOverviewPage';

interface CustomState {
  rId: number;
  setShowPage: string;
}

const OverviewPage: React.FC = () => {
  const location = useLocation();
  const state = location.state as CustomState;
  const [showPage, setShowPage] = useState('MainPage');

  console.log(showPage);

  // eslint-disable-next-line
  function returnSidePanel() {
    if (state) {
      return (
        <SideBarOverviewPage showPage={state.setShowPage} Id={state.rId} />
      );
    }
    return <div>This is the welcome page</div>;
  }

  return (
    <div className="flex flex-row justify-center h-full">
      <div className="picture h-screen w-2/3">
        <Brewery />
      </div>
      <div className="sidebar h-screen w-1/3 h-full border-l-2 border-gray-300">
        <div className="h-full">{returnSidePanel()}</div>;
      </div>
    </div>
  );
};

export default OverviewPage;
