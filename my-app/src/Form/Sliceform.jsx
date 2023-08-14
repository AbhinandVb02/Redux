import { createSlice } from "@reduxjs/toolkit";



const initialvalue = {
  names: null,
  ages: null
}

export const Fromslice = createSlice(
  {
    name: 'Form',
    initialState: initialvalue,
    reducers:
    {
      userview: (state, action) => {
        state.names = action.payload.names
        state.ages = action.payload.ages
        { console.log(action.payload) }
      }
    }
  }
)

export const { userview } = Fromslice.actions

export default Fromslice.reducer