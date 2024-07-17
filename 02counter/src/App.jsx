import { useState } from 'react';
import './App.css'

function App() {

  let [counter, setCounter] = useState(5); 
  
  // let counter = 5;

  const addValue = () => {
    if(counter == 20) return;
    setCounter(counter + 1);
  }

  const decreaseValue = () => {
    if(counter <= 0) {
      return;
    }
    else {
      setCounter(counter - 1);
    } 
  }

  return (
    <>
      <h1>Late night React session!</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={decreaseValue}>Decrease Value</button>
    </>
  )
}

export default App
