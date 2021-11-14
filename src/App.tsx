import React from 'react';
import './App.css';
import DataContextProvider from './contexts/dataContext';
import Routes from './Pages/Routes';

const App: React.FC = () => {
  return (
    <DataContextProvider>
      <Routes />
    </DataContextProvider>
  );
};

export default App;
