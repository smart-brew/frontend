import React from 'react';
import './App.css';
import DataContextProvider from './contexts/dataContext';
import Brewery from './components/Brewery';

const App: React.FC = () => {
  return (
    <DataContextProvider>
      <Brewery />
    </DataContextProvider>
  );
};

export default App;
