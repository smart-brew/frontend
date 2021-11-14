import React from 'react';
import { getBrewStatus } from '../api/dataEndpoint';
import { SystemData } from '../types/SystemData';

export const DataContext = React.createContext<SystemData | null>(null);

const DataContextProvider: React.FC = ({ children }) => {
  const [data, setData] = React.useState<SystemData | null>(null);

  React.useEffect(() => {
    // periodic fetch to update current state of system
    const periodicFetch = setInterval(async () => {
      setData(await getBrewStatus());
    }, 1000);

    return () => clearInterval(periodicFetch);
  }, []);

  React.useEffect(() => console.log('Got new data:', data), [data]);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default DataContextProvider;
