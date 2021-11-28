import React from 'react';
import './App.css';
import DataContextProvider from './contexts/dataContext';
import SmartBrew from './Pages/SmartBrew';

const App: React.FC = () => {
  return (
    <DataContextProvider enabled={false}>
      <SmartBrew />
    </DataContextProvider>
  );
};

export default App;
