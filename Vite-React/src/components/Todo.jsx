import axios from "axios";
import React from "react";

const Todo = ({ name, completed ,_id,setEditUi,setEditUiData,editUiData}) => {
const path = `http://localhost:3000/api/v1/todo/${_id}`

  const deleteTodoHandler = async ()=>{
    try {
      const response = await axios.delete(path)
    } catch (error) {
      console.log(error)
    }
  }



  const editBtn= async ()=>{
    
   try {
    console.log(_id)
    const response = await axios.get(`http://localhost:3000/api/v1/todo/${_id}`)
   console.log(response.data)//logged data successfully
    
   setEditUiData(response.data)//why state not being changed?
   console.log(editUiData)
   } catch (error) {
    console.log(error)
   }
   setEditUi(true)
 
}
 

  return (
    <>
      <li>
        <h2>{name}</h2>
        <h4>Status:{completed? "Completed":"pending"}</h4>
        <button onClick={deleteTodoHandler}>Delete Task</button>
        <button onClick={editBtn} >Edit Task</button>
        </li>
    </>
  );
};

export default Todo;
