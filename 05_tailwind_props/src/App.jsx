import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <h1 className='bg-red-400 text-black p-7 rounded-xl'>Hello Tailwind CSS TEST</h1>

 <Card  channel='Chaiaurcode' />
 <Card />
 <Card />


    </>
  )
}

export default App
