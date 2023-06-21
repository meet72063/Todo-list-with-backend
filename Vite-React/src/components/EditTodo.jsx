import React, { useState } from 'react'


const EditTodo = ({name,completed,_id})=>{
    
  const [todoname,settodoName]=useState(name)
  const [todocompleted,settodoComplted]=useState(completed)
 
    const handleChange = ()=>{
        settodoComplted(!completed)}

    const onChangeHandler =(e)=>{
        settodoName(e.target.value)
    }

    return <>
     <label htmlFor="TodoEdit" id="create_todo">EditTodo:</label>
        <input name="TodoEdit" value={todoname} onChange={onChangeHandler} id="input" />
    <div>
        <input  type='checkbox' value={todocompleted} onChange={handleChange}/>:completed
    </div>
        <button type="submit"  id="btn"> Save</button>
    </>
    
}

export default EditTodo