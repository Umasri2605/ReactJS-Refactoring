import React from 'react'

function Todo(props) {
  return (
    <div className='border border-2 border-warning-subtle m-3 p-3'>
        <li>
            {props.t}
               <button className='btn border-danger-subtle bg-danger-subtle m-2 p-2 '>Delete</button>
        </li>
    </div>
  )
}

export default Todo
