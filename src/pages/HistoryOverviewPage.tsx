import React from 'react';
import { Route } from 'react-router-dom';
import { getRecipe } from '../api/recipe';
import Menu, { MENU_HEIGHT } from '../components/menu/MenuContainer';
import RecipePreview from '../components/recipe/RecipePreview';
import RecipeType from '../types/RecipeData/RecipeType';
import { HistoryOverviewStatsPage } from './HistoryOverviewStatsPage';

const menus = [
  { link: '/history', title: 'Recipe' },
  { link: '/history/stats', title: 'Stats' },
];

type Props = {
  recipeId: number | null;
};

export const HistoryOverview: React.FC<Props> = ({ recipeId }) => {
  // currently selected recipe
  const [selectedRecipe, setSelectedRecipe] = React.useState<RecipeType | null>(
    null
  );

  // if new selected recipe (by ID) -> fetch the entire recipe with details
  React.useEffect(() => {
    const f = async (): Promise<void> => {
      if (recipeId) setSelectedRecipe(await getRecipe(recipeId));
    };
    f();
  }, [recipeId]);

  return (
    <div
      className="h-full overflow-auto pb-2"
      style={{ maxHeight: `calc(100vh - ${MENU_HEIGHT * 2}px)` }}
    >
      <Menu menus={menus} matchPathnameExact />
      <Route path="/history" exact>
        TODO HEADING <br />
        <RecipePreview recipe={selectedRecipe} />
      </Route>
      <Route path="/history/stats" exact>
        TODO HEADING <br />
        <HistoryOverviewStatsPage brewStats={null} />
      </Route>
    </div>
  );
};
