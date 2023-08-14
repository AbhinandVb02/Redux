import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementby5 } from './Slice'

function Counter() {

    const value = useSelector((i)=>i.counter.value)
    const dispatch=useDispatch()
    
  return (
    <div>
      <h1>{value}</h1>
        <button onClick={()=>dispatch(increment())}>+</button>
        <button onClick={()=>dispatch(decrement())}>-</button><br />
        <button onClick={()=>dispatch(incrementby5())}>+5</button><br /><br />

       
    </div>
  )
}

export default Counter