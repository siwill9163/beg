import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Conponents/Navbar/Navbar'
import Envelope from './Conponents/Envelope/Envelope'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar />
        <Envelope />
      </div>
     
    </>
  )
}

export default App
