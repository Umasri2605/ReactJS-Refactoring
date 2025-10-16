import React from 'react'
import Todo from './Todo'
import { v4 as uuidv4 } from 'uuid';

function Todolist() {
    var[todos,SetTodos]=React.useState([
      {
        title:"Get veggies",
        id: uuidv4(),
        status: true,
       },
      {
          title:"school Fee",
           id: uuidv4(),
           status: false,
         },
         {
          title:"Clean car",
           id: uuidv4(),
           status: false,
         },
         {
          title:"Go to vacation",
           id: uuidv4(),
           status: true,
         },
         {
          title:"Get Bike",
           id: uuidv4(),
           status: true,
         },
         {
          title:"New House",
           id: uuidv4(),
           status: false,
         },
         {
          title:"Purchase Grocery",
           id: uuidv4(),
           status: true,
         },
         {
          title:"Buy Clothes",
           id: uuidv4(),
           status: true,
         },
    ])
    function DeleteTodo(id){
      SetTodos((currentval)=>{
        return currentval.filter((todo)=>{
          if(todo.id==id){
            return false
          }
          else{
            return true
          }
        })
      })
      // alert(id);
    }
    function AddTodo(){
      var newtodo={
        title:document.getElementById("d1").value,
        id:uuidv4()
      }
      SetTodos((cv)=>{
        return[...cv,newtodo];
      })
    }
    function ToggleTodo(id){
      SetTodos((cv)=>{
       var x = cv.map((todo)=>{
        if(todo.id==id){
         todo.status=!todo.status
        }
         return todo;
        
        })
         return[...x]
       })
     }
  return (
    <div className='border border-2 border-warning-subtle m-3 p-3'>
      <h2>Todolist</h2>
      <input type="text" id="d1"/>
      <button onClick={()=>{AddTodo()}}>AddTodo</button>
       <ul className='list-unstyled'>
        {
          todos.map((todo,i)=>{
               return <Todo t={todo} deleteTodo={DeleteTodo} toggleTodo={ToggleTodo}></Todo>
            })
        }
       </ul>
    </div>
  )
}

export default Todolist
