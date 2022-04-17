import React from 'react';
import { Route } from 'react-router-dom';
import { getBrew } from '../api/brew';
import Menu, { MENU_HEIGHT } from '../components/menu/MenuContainer';
import RecipePreview from '../components/recipe/RecipePreview';
import { BrewingApi } from '../types/BrewingType';

const menus = [
  { link: '/history', title: 'Recipe' },
  { link: '/history/stats', title: 'Stats' },
];

type Props = {
  brewId: number | null;
};

export const HistoryOverview: React.FC<Props> = ({ brewId }) => {
  // currently selected recipe
  const [selectedBrew, setSelectedBrew] = React.useState<BrewingApi | null>(
    null
  );

  // if new selected brew (by ID) -> fetch the entire brew with details
  React.useEffect(() => {
    const f = async (): Promise<void> => {
      if (brewId) setSelectedBrew(await getBrew(brewId));
    };
    f();
  }, [brewId]);

  return (
    <div
      className="h-full overflow-auto pb-2"
      style={{ maxHeight: `calc(100vh - ${MENU_HEIGHT * 2}px)` }}
    >
      <Menu menus={menus} matchPathnameExact />
      <Route path="/history" exact>
        TODO HEADING <br />
        <RecipePreview recipe={selectedBrew?.recipe ?? null} />
      </Route>
      <Route path="/history/stats" exact>
        TODO HEADING <br />
        TODO STATS
      </Route>
    </div>
  );
};
