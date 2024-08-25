import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)


  const addValue = () => {
    // console.log("Value added",Math.random());
    setCounter(counter+1); 
  }

  const removeValue = () => {
    // console.log("Value added",Math.random());
    if (counter > 0) {
      setCounter(counter-1); 
      
    }
  }
  return (
    <>
        <h1>Chai aur React</h1>
        <h2>Counter value: {counter}</h2>

        <button
        onClick={addValue}
        >Add value</button>
        <br />
        <button
        onClick={removeValue}
        >Remove value</button>
    </>
  )
}

export default App
