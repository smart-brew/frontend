import React from 'react';
import img_placeholder from './brewery_placeholder.svg'
import './App.css';
import InstrType from "./types/InstrType";
import BlockType from "./types/BlockType";
import Block from "./components/recipe/Block";

var brewBlock: BlockType = {      // the recipe select will send an array of blocks, each with id and name
    id: 0,
    name: "Varenie jačmeňa",
    instructions: [
        {
            id: 0,
            name: "Motor",
            parentBlockId: 0,
            currParam: 40,
            targetParam: 100,
            start: 54453453,
            end: 534535435,
            orderNum: 0,
            chamberId: 0
        },
        {
            id: 1,
            name: "Heat up",
            parentBlockId: 0,
            currParam: 50,
            targetParam: 70,
            start: 1351315513,
            end: null,
            orderNum: 1,
            chamberId: 0
        },
        {
            id: 0,
            name: "Motor",
            parentBlockId: 0,
            currParam: 40,
            targetParam: 0,
            start: null,
            end: null,
            orderNum: 2,
            chamberId: 0
        }
    ]
}


var tempInstruction:InstrType = {
    id: 0,
    name: "Heat up",
    parentBlockId: 0,
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
        {/*<Instruction id={tempInstruction.id} name={tempInstruction.name} parentBlockId={tempInstruction.parentBlockId} currParam={tempInstruction.currParam} targetParam={tempInstruction.targetParam} start={tempInstruction.start} end={tempInstruction.end} orderNum={tempInstruction.orderNum} chamberId={tempInstruction.chamberId}/>*/}
        <Block id={brewBlock.id} name={brewBlock.name} instructions={brewBlock.instructions} />
        <a href="https://www.freepik.com/vectors/vintage" className="App-credits">Vintage vector created by dgim-studio - www.freepik.com</a>
    </div>
  );
}

export default App;
