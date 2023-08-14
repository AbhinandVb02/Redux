import React from 'react'
import FormMain2 from './FormMain2'
import { useSelector } from 'react-redux'

function Formview() {

    const {name,age} = useSelector((i)=>i.Forms)
  return (
    <div>
        <FormMain2/>
        <h1>name :&nbsp;{name}</h1>
        <h1>age : &nbsp;{age}</h1>
    </div>
  )
}

export default Formview