import React, { useEffect, useState } from "react";
import axios from "axios";
import Todo from "./Todo";
import EditTodo from './EditTodo'

const Alltodos = ({ err, setErr }) => {
  const [todo, setTodo] = useState([]);
  const [editUi,setEditUi]=useState('');
  const [editUiData,setEditUiData]=useState(false)
 
  useEffect(() => {
    const gettodo = async () => {
      try {
        const alltodos = await axios.get("http://localhost:3000/api/v1/todo");
       
        setTodo(alltodos.data);
       
      } catch (error) {
        console.log(error)
        setErr(error.message);
      }
    };
    gettodo()
  }, [todo])

  if(err){
    return  <h2>{err}</h2>
  }
 
  return (
    <>
      {editUi? (
       <EditTodo editUiData={editUiData}  />
      ) : (
        <div>
          <h2>All todos </h2>
          <ol>
             {todo.map((e) => {
            return <div key={e._id}>
                     <Todo 
                     name={e.name}
                     completed={e.completed}
                     setEditUiData={setEditUiData}
                     setEditUi={setEditUi}
                     editUiData={editUiData}
                     _id={e._id}
                     />
            </div>
           
          })}
          </ol>
         
        </div>
      )}
    </>
  );
};

export default Alltodos;
