import React from 'react';

import SplitPage from '../components/shared/SplitPage';
import { HistorySidebar } from '../components/sidebar/HistorySidebar';
import { HistoryOverview } from './HistoryOverviewPage';

const HistoryPage: React.FC = () => {
  // currently selected recipeId
  const [recipeId, setRecipeId] = React.useState<number | null>(null);

  return (
    <SplitPage>
      <HistoryOverview recipeId={recipeId} />
      <HistorySidebar handleSelectRecipe={setRecipeId} />
    </SplitPage>
  );
};

export default HistoryPage;
