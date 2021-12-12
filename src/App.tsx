import React from 'react';
import './App.css';
import DataContextProvider from './contexts/dataContext';
import InstructionsContextProvider from './contexts/instructionsContext';
import PopupContextProvider from './contexts/popupContext';
import SmartBrew from './Pages/SmartBrew';

const App: React.FC = () => {
  return (
    <InstructionsContextProvider enabled>
      <DataContextProvider enabled={false}>
        <PopupContextProvider>
          <SmartBrew />
        </PopupContextProvider>
      </DataContextProvider>
    </InstructionsContextProvider>
  );
};

export default App;
