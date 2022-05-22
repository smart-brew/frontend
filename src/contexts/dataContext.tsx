import React from 'react';
import { getBrewStatus } from '../api/dataEndpoint';
import { SystemData } from '../types/SystemData';

interface Props {
  enabled: boolean;
}

const emptyState: SystemData = {
  brewStatus: 'IDLE',
  data: {
    MOTOR: [],
    PUMP: [],
    TEMPERATURE: [],
    UNLOADER: [],
    RELAY: [],
  },
  instruction: {
    currentInstruction: -1,
    currentValue: -1,
    status: 'WAITING',
  },
};

const DataContext = React.createContext<SystemData>(emptyState);

const DataContextProvider: React.FC<Props> = ({ children, enabled }) => {
  const [data, setData] = React.useState<SystemData>(emptyState);

  if (!enabled) console.log('Data fetching is disabled (see App.tsx)');

  React.useEffect(() => {
    // periodic fetch to update current state of system
    const periodicFetch = setInterval(async () => {
      if (enabled) {
        const breweryStatus = await getBrewStatus();
        if (breweryStatus) setData(breweryStatus);
      }
    }, 1000);

    return () => clearInterval(periodicFetch);
  }, [enabled]);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export const useDataContext = (): SystemData => React.useContext(DataContext);

export default DataContextProvider;
