import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0);

  // let counter = 0;
  function addValue(){
    // console.log(counter);
    // counter++;
    setCounter((prevCounter) => Math.min(20, prevCounter + 1));
  }
  function removeValue(){
    // console.log(counter);
    // counter--;
    setCounter(Math.max(counter - 1, 0));
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button 
      onClick={addValue}
      >increase Counter {counter}</button>
      <button 
      onClick={removeValue}
      >decrease Counter {counter}</button>.
      <p>footer: {counter}</p>
    </>
  )
}

export default App
