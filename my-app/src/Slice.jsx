import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value: 0
}

export const CounterSlice = createSlice(
    {
        name:'counter',
        initialState:initialState,
        reducers:{
          
            increment:(data)=>{
               data.value = data.value+1
            },

            decrement:(data)=>{
               data.value = data.value-1
            },

            incrementby5:(data)=>{
                data.value = data.value+5
            }
        }
    }
)

export const {increment,decrement,incrementby5} = CounterSlice.actions

export default CounterSlice.reducer