import React,{useState} from "react"

const App=()=> {

  const handleClick=(event)=>{
    console.log("button id is :- button-a")
  }
  const handleClickTwo=(event)=>{
    console.log('button id is:-button-b')
  }
  return (
    <div id="main">
    <button onClick={handleClick} id="button-a">Button A</button>
    <button onClick={handleClickTwo} id="button-b">Button B </button>
</div>
  )
}
