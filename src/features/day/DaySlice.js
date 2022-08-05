import { createSlice } from "@reduxjs/toolkit";

const date = new Date() ;
let day = date.getDate() ;
let month = date.getMonth() ;
let year = date.getFullYear() ;


// if (String(day).length===1) {day = "0" + day} ;
// if (String(month).length===1) {month = "0" + month} ;


// let initialState = `${day}:${month}:${year}`;
let initialState = [day,month,year];


const daySlice = createSlice({
    name: "day" ,
    initialState ,
    reducers:{
        changeDay(state , action){
            if (action.payload === "reset"){
                return initialState ;
            }else{
                return action.payload ;
            }
        }
    }
})

export const {changeDay} = daySlice.actions;

export default daySlice.reducer;