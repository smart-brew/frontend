import React, { useState } from 'react';
import { getBrews } from '../api/recipe';
import SplitPage from '../components/shared/SplitPage';

import HistorySidebar from '../components/sidebar/HistorySidebar';
import { BrewSimple } from '../types/BrewType';

import { HistoryOverview } from './HistoryOverviewPage';

const HistoryPage: React.FC = () => {
  const [brews, setBrews] = React.useState<BrewSimple[]>([]);
  const [brewId, setBrewId] = useState<number>(0);

  React.useEffect(() => {
    const f = async (): Promise<void> => {
      setBrews(await getBrews());
    };
    f();
  }, []);

  return (
    <SplitPage>
      <HistoryOverview recipeId={brewId} />
      <HistorySidebar brews={brews} brewId={brewId} setBrewId={setBrewId} />
    </SplitPage>
  );
};

export default HistoryPage;
