import { createSlice } from "@reduxjs/toolkit";

const initialState2 ={
    value2 : 2
}

export const counterslice2 = createSlice(
    {
        name:'counter2',
        initialState:initialState2,
        reducers:
        {

            multiplication:(data)=>{
                data.value2 = data.value2*2
            },

            division:(data)=>{
                data.value2 = data.value2 /2
            }
        }
    }
) 

export const {multiplication,division} = counterslice2.actions

export default counterslice2.reducer