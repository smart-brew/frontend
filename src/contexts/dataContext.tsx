import React from 'react';
import { getBrewStatus } from '../api/dataEndpoint';
import { SystemData } from '../types/SystemData';

interface Props {
  enabled: boolean;
}

export const DataContext = React.createContext<SystemData | null>(null);

const DataContextProvider: React.FC<Props> = ({ children, enabled }) => {
  const [data, setData] = React.useState<SystemData | null>(null);

  if (!enabled) console.log('Data fetching is disabled (see App.tsx)');

  React.useEffect(() => {
    // periodic fetch to update current state of system
    const periodicFetch = setInterval(async () => {
      if (enabled) setData(await getBrewStatus());
    }, 1000);

    return () => clearInterval(periodicFetch);
  }, [enabled]);

  // TODO delete
  React.useEffect(() => console.log('Got new data:', data), [data]);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default DataContextProvider;
