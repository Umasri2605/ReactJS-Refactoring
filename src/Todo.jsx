import React from 'react'

function Todo(props) {
  return (
    <div className='border border-2 border-success-subtle m-3 p-3'>
        <li>
          <span style={props.t.status ? {textDecoration:"line-through"}:{}}>{props.t.title}</span>
          <button className='btn border-danger-subtle bg-danger-subtle m-2 p-2 ' onClick={()=>{props.deleteTodo(props.t.id)}}>Delete</button>
          <button className={(props.t.status) ? "btn bg-secondary-subtle border-secondary-subtle":"btn bg-info-subtle border-info-subtle"} onClick={()=>{props.toggleTodo(props.t.id)}}>{(props.t.status) ? "undo" :"done"}</button>
       </li>
    </div>
  )
}

export default Todo
