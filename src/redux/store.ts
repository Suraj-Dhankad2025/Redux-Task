import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice";
import AuthSlice from "./slices/AuthSlice";
import SearchSlice from "./slices/SearchSlice";
import FilterSlice from "./slices/FilterSlice";
const store = configureStore({
    reducer:{
        auth:AuthSlice,
        cart:CartSlice,
        search:SearchSlice,
        filter:FilterSlice,
    }, 
})
export default store;