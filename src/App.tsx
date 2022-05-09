import React from 'react';
import './App.css';
import { RecoilRoot } from 'recoil';
import RecoilNexus from 'recoil-nexus';
import DataContextProvider from './contexts/dataContext';
import InstructionsContextProvider from './contexts/instructionsContext';
import PopupContextProvider from './contexts/popupContext';
import SmartBrew from './pages/SmartBrew';

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <RecoilNexus />

      <InstructionsContextProvider enabled>
        <DataContextProvider enabled>
          <PopupContextProvider>
            <SmartBrew />
          </PopupContextProvider>
        </DataContextProvider>
      </InstructionsContextProvider>
    </RecoilRoot>
  );
};

export default App;
