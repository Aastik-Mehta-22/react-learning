import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Chai from './Chai'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Chai />
      <h1>Chai aur code</h1>
      <p>test para</p>
    </>
  )
}

export default App
