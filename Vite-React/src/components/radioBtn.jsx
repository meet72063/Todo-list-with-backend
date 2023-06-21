import React, { useState } from 'react'

const CompletedTask = ({completed,setComplted})=>{

  const handleChange = ()=>{
    setComplted(!completed)
    
  }

    return <>
    <div>
        <input 
        type='checkbox'
        
        onChange={handleChange}
        />:completed
    </div>
    </>
}

export default CompletedTask

