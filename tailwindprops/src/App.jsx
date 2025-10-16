import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="bg-gray-100 text-gray-800 text-4xl font-bold rounded">KRATI GUPTA</h1>
      <Card userName="Krati Gupta" buttonText="click" />
      <Card userName="Radhika Gupta"  />
    </>
  )
}

export default App
