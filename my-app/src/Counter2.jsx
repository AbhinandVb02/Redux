import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { division, multiplication } from './Slice2'

function Counter2() {
    const value2 = useSelector((i)=>i.counter2.value2)
    const dispatch2 = useDispatch()
  return (
    <div>
        <h1>{value2}</h1>
        <button onClick={()=>dispatch2(multiplication())}>*</button>
        <button onClick={()=>dispatch2(division())}>/</button><br />
    </div>
  )
}

export default Counter2