import React, { useState } from 'react'

export default function Counter() {


 // Define count state
 const [count, setCount] = useState(0)
 
 const handleClick = () => {
  setCount (count+1)
 }




  return (
    <>
    <div>This is counter {count}</div>
    <button type="button" onClick={handleClick}>Click</button>
    </>
    
  )
}
