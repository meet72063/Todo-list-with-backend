import React from 'react'

const Error = ({error,setError})=>{
    const hadleClick = ()=>{
       setError('');
        
    }
    
  return  <>
      <h2>{error}</h2>
      <button onClick={hadleClick}>Back to crate Task</button>
    </>
}

export default Error