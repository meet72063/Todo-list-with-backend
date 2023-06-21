import { useState } from "react";
import "./App.css";
import Form from "./components/form";
import Alltodos from "./components/Alltodos";
import './css/title.css'


function App() {
  
  const [err,setErr]=useState('')
  
 

  return <>
  <div>
    <h1 id="title">
      Todo list 
      <hr></hr>
    </h1>
    
    <Form />
  <Alltodos err={err} setErr={setErr}  />
    
  </div>
  </>
}

export default App;
