import './App.css';
import DataContextProvider from './contexts/dataContext';
import Brewery from './components/Brewery';

const App = () => {
  return (
    <DataContextProvider>
      <Brewery />
    </DataContextProvider>
  );
};

export default App;
