import React, { useState } from 'react';
import SplitPage from '../components/shared/SplitPage';
import HistorySidebar from '../components/sidebar/HistorySidebar';

import { HistoryOverview } from './HistoryOverviewPage';

const HistoryPage: React.FC = () => {
  const [brewId, setBrewId] = useState<number>(0);

  return (
    <SplitPage>
      <HistoryOverview brewId={brewId} />
      <HistorySidebar onSelectBrewId={setBrewId} />
    </SplitPage>
  );
};

export default HistoryPage;
