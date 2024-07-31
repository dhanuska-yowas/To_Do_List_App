import React, { useEffect, useRef, useState } from 'react'
import todo_icon from '../assets/todo_icon.png'
import TodoItems from './TodoItems'

const Todo = () => {

    const [todoList,setTodoList] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []);

    const inputRef =useRef();

    const add=()=>{
        const inputText = inputRef.current.value.trim();

        if(inputText === "") {
            return null;
        }
        
        // if the input feild is empty it will ignore this part

        const newTodo = {
            //create objects
            id: Date.now(),
            text: inputText,
            isComplete:false,

        }

        setTodoList((prev)=>[...prev,newTodo]);

        // to clear the list

        inputRef.current.value = "";

    }

    const deleteTodo = (id)=>{
        // store using setTodoList 
        setTodoList((prvTodos)=>{
            // check each toDo item if there id same is same the filter will return other all items
            return prvTodos.filter((todo)=>todo.id !== id)
            //then pass the deleteTodo fun using  props where??  todoList.map
        })
    }

    const toggle = (id)=>{
        setTodoList((prevTodos)=>{
            return prevTodos.map((todo)=>{
                if(todo.id === id){
                    return {...todo, isComplete: !todo.isComplete}
                }

                return todo;
            })
        })
    }

    useEffect(()=>{
        // console.log(todoList);
        // strore item on local storage
        localStorage.setItem("todos", JSON.stringify(todoList))
    },[todoList])
    //then go to todoitems <img tick>   add onclick={} fun on the div
    // then pass this in todolist.map

  return (
    // [] here you can add own value
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'> 
        
        
        {/* title */}

        <div className='flex items-center mt-7 gap-2'>

            <img className='w-8 ' src={todo_icon}/>
            <h1 className='text-3xl font-semibold'>To-Do List</h1>

        </div>

        {/* input box */}

        <div className='flex items-center my-7 bg-gray-200 rounded-full'>
            <input ref={inputRef} className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' type="text" placeholder='Add your task' />
            <button onClick={add} className='border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer'>ADD + </button>
        </div>

        {/* todo list */}

        <div>
            {todoList.map((item, index) => {
                return <TodoItems key={index} text={item.text} id={item.id} isComplete={item.isComplete} deleteTodo={deleteTodo} toggle={toggle}/>
                //then pass thesse variables into TodoItems
            })}
          
        </div>
    </div>
  )
}

export default Todo