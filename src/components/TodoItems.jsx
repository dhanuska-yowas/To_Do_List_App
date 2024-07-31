import React from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import delete_icon from '../assets/delete.png'

const TodoItems = ({text,id,isComplete,deleteTodo,toggle}) => {
  return (
    <div onClick={()=>{toggle(id)}} className=' flex items-center my-3 gap-2'>
        {/* the text and icon in one line */}
        <div className='flex flex-1 items-center cursor-pointer'>
            <img className='w-7' src={ isComplete ? tick : not_tick}/>
            {/* this text will be get from prompt */}
            <p className={`tex-slate-700 ml-4 text-[17px] decoration-slate-500 ${isComplete ? "line-through" : ""}`}>{text}</p>  
        </div>

        <div>
            <img onClick={()=>{deleteTodo(id)}} src={delete_icon} className='w-3.5 cursor-pointer'/>
        </div>
    </div>
  )
}

export default TodoItems