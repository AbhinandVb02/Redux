import { createSlice } from "@reduxjs/toolkit";

const initialvalue = {
    name:null,
    age:null
}


export const FormSlice2 = createSlice(
    {
        name:'Forms',
        initialState:initialvalue,
        reducers:{

            displaydata:(state,action)=>{
               state.name = action.payload.name
               state.age = action.payload.age
               console.log(action.payload);
            }
        }
    }
)

export const {displaydata} = FormSlice2.actions

export default FormSlice2.reducer