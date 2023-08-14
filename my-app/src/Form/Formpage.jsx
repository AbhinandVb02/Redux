import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { userview } from './Sliceform'

function Formpage() {

  const dispatch = useDispatch()

  const [names, setName] = useState(null)
  const [ages, setAge] = useState(null)

  return (
    <div>
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <label>Name : <></></label>
          <input type="text" onChange={(e) => setName(e.target.value)} />
          <></>
          <label>Age</label>
          <input type="number" onChange={(e) => setAge(e.target.value)} />
          <br />
          <br />
          <button onClick={() => dispatch(userview({ names, ages }))}>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Formpage