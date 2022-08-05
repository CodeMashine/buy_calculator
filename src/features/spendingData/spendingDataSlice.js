import {createSlice} from "@reduxjs/toolkit";

export const spendingData = createSlice({
    name: "spending",
    initialState: [{
        timestamp:1641006420000 ,
        date: [7,6,2022],
        name: "banana",
        category: "food",
        cost: '355'
    },
    {
        timestamp:1641006420000 ,
        date: [7,6,2022],
        name: "apple",
        category: "fruit",
        cost: '258'
    }
],
    reducers: {
        addSpend(state,action){
            state.push({
                timestamp: new Date(`${action.payload[0][2]}:${action.payload[0][1]}:${action.payload[0][0]}`).getTime() ,
                date : action.payload[0] ,
                name : action.payload[1] ,
                category : action.payload[2] ,
                cost : action.payload[3] ,
            }) ;
        },

        sortSpend(state){
            state.sort((a,b)=>{
                return b.timestamp - a.timestamp ;
        })
        } ,

        deleteSpend(state , action){
            let newState =  state.filter((spend,index)=>index!==action.payload)
            return newState ;
        } ,

        updateSpendings (state , action){
            return action.payload ;
        }
    }
})



export const { addSpend ,sortSpend,deleteSpend , updateSpendings } = spendingData.actions ;
export default spendingData.reducer;