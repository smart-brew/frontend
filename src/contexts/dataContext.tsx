import React from 'react';
import { getBrewStatus } from '../api/dataEndpoint';
import { DataType } from '../types/Data';

export const DataContext = React.createContext({});

const DataContextProvider: React.FC<{}> = ({ children }) => {
  const [data, setData] = React.useState<DataType | {}>({});

  const brewId = 123456789; // TODO: toto ziskavat z niekade inakadial, parameter alebo inak - moze byt aj cez druhy contextProvider

  React.useEffect(() => {
    // periodic fetch to update current state of system
    const periodicFetch = setInterval(async () => {
      setData(await getBrewStatus(brewId));
    }, 1000);

    return () => clearInterval(periodicFetch);
  }, []);

  React.useEffect(() => console.log('change', data), [data]);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default DataContextProvider;
