import React from 'react'
import Todo from './Todo'

function Todolist() {
    var[todos,SetTodos]=React.useState(["Get Veggies","Join In Zym","Buy Groceries","Go To Trip","Pay Bills",])
    function DeleteTodo(index){
      var temp=[...todos];
      temp.splice(index,1)
      SetTodos([...temp]);
    }
  return (
    <div className='border border-2 border-warning-subtle m-3 p-3'>
      <h2>Todolist</h2>
       <ul className='list-unstyled'>
        {
            todos.map((todo,i)=>{
               return <Todo t={todo} i={i} deleteTodo={DeleteTodo}></Todo>
            })
        }
       </ul>
    </div>
  )
}

export default Todolist
