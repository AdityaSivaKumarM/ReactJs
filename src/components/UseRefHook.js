import React, { useEffect, useState } from 'react'

const UseRefHook = () => {
  const [count,setCount] = useState(0);
  const [calculation,setCalculation] = useState(0);
  useEffect(()=>{
    setCalculation(()=>count*2);
  },[count]);
  
  return(
    <>
    <button onClick={()=>setCount((c)=>c+1)}>Count +</button>
    <button onClick={()=>setCount((c)=>c-1)}>Count -</button>
    <h1>count {count}</h1>
    <h1>calculation {calculation}</h1>
    </>
  )
}

export default UseRefHook
