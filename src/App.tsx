import React from 'react';
import img_placeholder from './brewery_placeholder.svg'
import './App.css';
import InstrType from "./types/InstrType";
import Instruction from "./components/recipe/Instruction";

var tempInstruction:InstrType = {
    id: 0,
    name: "Heat up",
    currParam: 40,
    targetParam: 100,
    start: 12145,
    end: 212545,
    orderNum: 1,
    chamberId: 0
};


function App() {
  return (
    <div className="App">
        <header className="App-header">
            <img src={img_placeholder}  className="w-72" alt="placeholder" />
        </header>
        <Instruction id={tempInstruction.id} name={tempInstruction.name} currParam={tempInstruction.currParam} targetParam={tempInstruction.targetParam} start={tempInstruction.start} end={tempInstruction.end} orderNum={tempInstruction.orderNum} chamberId={tempInstruction.chamberId}/>
        <a href="https://www.freepik.com/vectors/vintage" className="App-credits">Vintage vector created by dgim-studio - www.freepik.com</a>
    </div>
  );
}

export default App;
