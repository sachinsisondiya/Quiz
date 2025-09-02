import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Start from "./components/Start"
import Quiz from "./components/Quiz"

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
    {/* <Start/> */}
    <Quiz/>
    </>
  )
}

export default App
