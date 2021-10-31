import React from 'react';
import { getBrewStatus } from '../api/dataEndpoint';
import { ModuleData } from '../types/Data';

export const DataContext = React.createContext<ModuleData | null>(null);

const DataContextProvider: React.FC = ({ children }) => {
  const [data, setData] = React.useState<ModuleData | null>(null);

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
