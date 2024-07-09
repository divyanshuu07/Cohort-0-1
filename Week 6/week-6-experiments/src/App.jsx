/*
this code for how to re render the component in react without
rerendering the whole parent element.
*/

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



/* 
This code is for adding todo to the website using react.
*/

let counter =4;

function App(){

  const [todos,setTodos]=useState([{
    id:1,
    title:"go to gym",
    description:"go to gym today"
  },{
    id:2,
    title:"go to gym",
    description:"go to gym today"
  },{
    id:3,
    title:"go to gym",
    description:"go to gym today"
  }])

  function addTodo(){
    setTodos([...todos, {
      id:counter++,
      title: Math.random(),
      description: Math.random()
    }])
  }

  return(
    <div>
      <button onClick={addTodo}>Add the Todo</button>
        {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description}/>)}
    </div>
  )
}

function Todo({title,description}){
  return <div>
    <h1>
      {title}
    </h1>

    <h5>
      {description}
    </h5>
  </div>
}


/* 
How to implement CardWrapper
*/

function App(){
  return <div>
  <CardWrapper> 
    <div>
    hi there
    </div>
  </CardWrapper>
  <CardWrapper> 
    <div>
    hi there22
    </div>
  </CardWrapper>
  </div>
}

function CardWrapper({children}){
  
  return <div style={{
      border: "2px solid black",
      padding:20,
      margin:20
    }}>
      {children}
  </div>

}


export default App