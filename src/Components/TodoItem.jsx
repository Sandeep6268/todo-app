import React from 'react'
import { FcFullTrash } from 'react-icons/fc'

const TodoItem = ({name,date,deleteBtnHandler}) => {
  const deleteBtn = ()=>{ deleteBtnHandler(name)
  }
  return (
    <>
        <div className="main-todo-div">
            <div className="To-do-name">{name}</div>
            <div className="To-do-date">{date}</div>
            <button className='btn btn-dark' onClick={deleteBtn}><FcFullTrash /></button>
        </div>
    </>
  )
}

export default TodoItem