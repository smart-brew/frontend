import React from 'react';
import './App.css';
import DataContextProvider from './contexts/dataContext';
import InstructionsContextProvider from './contexts/instructionsContext';
import PopupContextProvider from './contexts/popupContext';
import SmartBrew from './pages/SmartBrew';

const App: React.FC = () => {
  return (
    <InstructionsContextProvider enabled>
      <DataContextProvider enabled>
        <PopupContextProvider>
          <SmartBrew />
        </PopupContextProvider>
      </DataContextProvider>
    </InstructionsContextProvider>
  );
};

export default App;
