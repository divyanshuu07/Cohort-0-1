import React from "react"
import { useState } from "react"

function App() {

  const [title,setTitle] =useState("My name is Divyanshu Singh");

  function updateTitle(){
    setTitle("my name is " +Math.random())
  }

  return (
    <>
    <button onClick={updateTitle}>Update the title</button>
      <Header title={title}></Header>
      <Header title="divyanshu2"></Header>
    </>
  )
}

function Header({title}){
  return <div>
    {title}
  </div>
}

export default App
