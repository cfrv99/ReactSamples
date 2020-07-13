import React from 'react';
import './App.css';
import DiceRoll from './DiceRoll';
import AddIcon from './AddIcon';
import CoinContainer from './CoinContainer';
import BoxList from './SizeBoxes/BoxList';
import ToDoList from './ToDoApp/ToDoList';

function App() {
  return (

    <div className="App">
      <DiceRoll/>
      <hr></hr>
      <AddIcon/>
      <hr></hr>
      <CoinContainer/>
      <hr></hr>
      <BoxList/>
      <hr></hr>
      <ToDoList/>
    </div>
  );
}

export default App;
