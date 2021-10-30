import React from 'react';
import './App.css';
import DataContextProvider, { DataContext } from './contexts/dataContext';
import Brewery from './components/Brewery';
import HomePage from './components/MainPage/HomePage';

const App: React.FC = () => {
  const data = React.useContext(DataContext);
  return (
    <DataContextProvider>
      <div className="items-center content-center text-center">
        <HomePage />
        <div>
          Newest data from backend /api/brew/brewId : {JSON.stringify(data)}
        </div>
      </div>
    </DataContextProvider>
  );
};

export default App;
