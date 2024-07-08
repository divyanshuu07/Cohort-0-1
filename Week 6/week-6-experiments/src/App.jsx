import React from "react"
import { useState } from "react"

function App() {

  return (
    <>
    <HeaderWithButton/>
      <Header title="divyanshu2"></Header>
    </>
  )
}

function HeaderWithButton(){

  const [title,setTitle] =useState("My name is Divyanshu Singh");

  function updateTitle(){
    setTitle("my name is " +Math.random())
  }

  return <div>
    <button onClick={updateTitle}>Update the title</button>
    <Header title={title}></Header>
  </div>
}

function Header({title}){
  return <div>
    {title}
  </div>
}

export default App
