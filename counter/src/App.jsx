import { useState } from 'react'
import './App.css'

function App() {
const addcount = () => {
  setcount(count + 1);
  if (count === 20){
    alert("Counter reached 20");
    setcount(20);
  }
}
const decreamentcount = () => {
  setcount(count - 1);
  if (count === 0){
    alert("Counter reached 0");
    setcount(0);
  }
}
let [count , setcount] = useState(5);
  return (
    <>
    <h1>HI KRATIGUPTA</h1>
    <h2>COUNTER VALUE : {count}</h2>
    <button onClick={addcount}>INCREMENT</button>
    <button onClick={decreamentcount}>DECREMENT</button>
    </>
  )
}

export default App
