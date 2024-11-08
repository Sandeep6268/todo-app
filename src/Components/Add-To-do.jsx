import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa6'

const AddTodo = ({addHandler}) => {
    const [name,setName]=useState('');
    const [date,setDate]=useState('');
    
    const nameHandler=((e)=>{
        setName(e.target.value)
    })
    const dateHandler=((e)=>{
        setDate(e.target.value)
    })
    const clickBtnHandler =()=>{
        addHandler(name,date)
        setName('')
        setDate('')
    }
  return (
    <div className='add-Todo'>
        <input className='form-control' value={name} onChange={nameHandler} placeholder='Add To-Do ' />
        <input className='form-control' value={date} onChange={dateHandler} type='date' />
        <button className='btn btn-success' onClick={clickBtnHandler}> <FaPlus /> </button>
    </div>
  )
}

export default AddTodo