import React from 'react';
import './App.css';
import DataContextProvider, { DataContext } from './contexts/dataContext';
import Brewery from './components/Brewery';
import HomePage from './components/MainPage/HomePage';

const App: React.FC = () => {
  return (
    <DataContextProvider>
      <HomePage />
    </DataContextProvider>
  );
};

export default App;
