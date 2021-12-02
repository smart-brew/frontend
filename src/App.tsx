import React from 'react';
import './App.css';
import DataContextProvider from './contexts/dataContext';
import InstructionsContextProvider from './contexts/instructionsContext';
import SmartBrew from './Pages/SmartBrew';

const App: React.FC = () => {
  return (
    <InstructionsContextProvider enabled>
      <DataContextProvider enabled={false}>
        <SmartBrew />
      </DataContextProvider>
    </InstructionsContextProvider>
  );
};

export default App;
