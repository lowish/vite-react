import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='text-bold text-3xl text-center mt-10'>
        My First React Project
      </div>
    </>
  )
}

export default App
