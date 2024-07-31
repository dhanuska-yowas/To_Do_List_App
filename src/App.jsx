import React from 'react'
import Todo from './components/Todo'



const App = () => {
  return (

    //the className can be use from tailwind classes
    <div className='bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% grid py-4 min-h-screen'>
        <Todo/>
    </div>
  )
}

export default App