import { createSlice } from "@reduxjs/toolkit";

const date = new Date() ;
let month = date.getMonth() ;
let year = date.getFullYear() ;

let initialState = [month , year];


const dateSlice = createSlice({
    name: "date" ,
    initialState ,
    reducers:{
        changeDate(state , action){
            if (action.payload === 'reset') {
                return initialState ;
            }else{
                return action.payload ;
            }
        }
    }
})

export const {changeDate} = dateSlice.actions;

export default dateSlice.reducer;