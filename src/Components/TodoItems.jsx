import React from 'react'
import TodoItem from './TodoItem'

const TodoItems = ({todoitem,deleteBtnHandler}) => {
  return (
    <>
        {todoitem.map((items)=>{
            // console.log(items);
            return<TodoItem name={items.todoName} date={items.todoDate} key={items.todoName} deleteBtnHandler={deleteBtnHandler}/>
        })}
    </>
  )
}

export default TodoItems