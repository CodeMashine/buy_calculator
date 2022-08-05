import {createSlice} from "@reduxjs/toolkit";

const initialState = [-Infinity , Infinity]  ;

export const dateFilter = createSlice({
    name: "dateFilter",
    initialState,
    reducers: {
        chooseInterval(state,action){
            return action.payload ;
        },

        resetInterval(state , action){
            return initialState ;
        }
    }
})



export const { chooseInterval , resetInterval  } = dateFilter.actions ;
export default dateFilter.reducer;