import { configureStore } from '@reduxjs/toolkit'
import counterdata from './Slice'
import counterdata2 from './Slice2'
import forms from './Form/Sliceform'
import Formsdatas from './Form2/Sliceform2'

export const store = configureStore({
  reducer: {
    counter: counterdata,
    counter2: counterdata2,
    Form: forms,
    Forms: Formsdatas
  },
})
