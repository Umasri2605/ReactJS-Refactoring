import React from 'react'
import Todo from './Todo'

function Todolist() {
    var[todos,SetTodos]=React.useState(["Get Veggies","Join In Zym","Buy Groceries","Go To Trip","Pay Bills",])
  return (
    <div className='border border-2 border-warning-subtle m-3 p-3'>
      <h2>Todolist</h2>
       <ul className='list-unstyled'>
        {
            todos.map((todo)=>{
               return <Todo t={todo}></Todo>
            })
        }
       </ul>
    </div>
  )
}

export default Todolist
