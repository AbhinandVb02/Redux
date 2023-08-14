import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { displaydata } from './Sliceform2'

function FormMain2() {

    const [name,setName] = useState(null)
    const [age,setAge] = useState(null)

    const dispatch = useDispatch()
  return (
    <div>
        <form onSubmit={(e)=>e.preventDefault()}>
            <label>Name : <></></label>
            <input type="text" onChange={(e)=>setName(e.target.value)} />
            <label>Age :<></></label>
            <input type="text" onChange={(e)=>setAge(e.target.value)} />
            <br />
            <button  onClick={()=>dispatch(displaydata({name,age}))}>Submit</button>
        </form>
    </div>
  )
}

export default FormMain2