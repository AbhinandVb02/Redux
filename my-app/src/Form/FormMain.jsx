import React from 'react'
import Formpage from './Formpage'
import { useSelector } from 'react-redux'

function FormMain() {

  const { names, ages } = useSelector((i) => i.Form)

  return (
    <div>
      <Formpage />
      <h1>name:{names}</h1>
      <h2>age:{ages}</h2>
    </div>
  )
}

export default FormMain