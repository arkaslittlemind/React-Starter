import { useState } from 'react';
import './App.css'

function App() {

  let [value, setValue] = useState(5); 
  
  // let counter = 5;

  const addValue = () => {
    if(value < 20) {
      setValue(value + 1);
    }
  }

  const decreaseValue = () => {
    if(value > 0) {
      setValue(value - 1);
    }
  }

  return (
    <>
      <h1>Late night React session!</h1>
      <h2>Counter Value: {value}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={decreaseValue}>Decrease Value</button>
    </>
  )
}

export default App
