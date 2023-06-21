import React, { useState } from "react";
import axios from "axios";
import CompletedTask from "./radioBtn";
import Error from "./Error";
import '../css/form.css'

const Form = ({err,setErr,}) => {
    const [name, setName] = useState('');
    const [completed,setComplted]=useState(false)
    
    

  const onChangeHandler = (e) => {
    setName(e.target.value);
  };

  const taskSubmitHandler = async () => {
    
   try {
   const  response= await axios.post("http://localhost:3000/api/v1/todo",{name,completed:Boolean(completed)})
   console.log(response)

   } catch (error) {
    // console.log(error)
    
   }
   
  };

  return (
    <>

    <form id="form" >
        <label htmlFor="Todo" id="create_todo">Create Todo:</label>
        <input name="Todo" value={name} onChange={onChangeHandler} id="input" />
        <CompletedTask id="completed" completed={completed} setComplted={setComplted}/>
        <button type="submit" onClick={taskSubmitHandler} id="btn">
         Add Task
        </button>
       
      </form>
      
    </>
  );
};


export default Form
