import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  const myObj = {
    course: "CSE",
    roll: 43
  }
  const myArr = [1, 2, 3];
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>
      {/* <Card myName="soumitra" someObj={myObj} arr={myArr}/> */}
      <Card cardName = "debit card"/>
      <Card cardName = "credit card"/>
    </>
  )
}

export default App
