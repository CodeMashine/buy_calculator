import {createSlice} from "@reduxjs/toolkit";

const initialState = 'всё'  ;

export const categoryFilter = createSlice({
    name: "categoryFilter",
    initialState,
    reducers: {
        chooseCategory(state,action){
            return action.payload ;
        } ,

        // updateCategory(state , action)=>{
        // }

    }
})



export const { chooseCategory , updateCategory } = categoryFilter.actions ;
export default categoryFilter.reducer;