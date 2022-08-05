import {configureStore} from '@reduxjs/toolkit' ;

import spendingData from "../features/spendingData/spendingDataSlice" ;
import dateFilter from '../features/Filter/dateFilter';
import categoryFilter from '../features/Filter/categoryFilter';


export default configureStore ({
    reducer:{
        spending: spendingData ,
        dateFilter :dateFilter ,
        categoryFilter :categoryFilter ,
    }
})