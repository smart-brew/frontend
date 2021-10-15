import React from 'react';
import img_placeholder from './brewery_placeholder.svg'
import './App.css';

function App() {
  return (
    <div className="App">
        <header className="App-header">
            {/*<h1>SmartBrew</h1>*/}
            <img src={img_placeholder}  className="App-placeholder" alt="placeholder" />
        </header>
        <a href="https://www.freepik.com/vectors/vintage" className="App-credits">Vintage vector created by dgim-studio - www.freepik.com</a>
    </div>
  );
}

export default App;
