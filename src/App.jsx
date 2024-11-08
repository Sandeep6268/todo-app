import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './App.css'
import Logo from './Components/Logo'
import Container from './Components/Container'
import AddTodo from './Components/Add-To-do'
import TodoItems from './Components/TodoItems'



export const App = () => {
  
  const [todoitems,settodoitems]=useState([]);
  const addHandler = (name,date)=>{
    const newTodoItems=[
      {
        todoName:name,
        todoDate:date,
      },...todoitems
    ]
    settodoitems(newTodoItems)
  }
  const deleteBtnHandler =(name)=>{
    const newTodoItems= todoitems.filter((items)=>
      items.todoName !== name
    )
    settodoitems(newTodoItems)
  }
  // const todoitems=[
  //   {todoName:'Go To Market',todoDate:'07-11-24'},
  //   {todoName:'Go To garba',todoDate:'08-11-24'},
  //   {todoName:'Go To indore',todoDate:'09-11-24'}
  // ]
  return (
    <Container>
      <Logo />
      <AddTodo addHandler={addHandler} />
      <TodoItems deleteBtnHandler={deleteBtnHandler} todoitem={todoitems}/>
    </Container>
  )
}

export default App