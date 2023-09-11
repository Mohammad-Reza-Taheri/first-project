import { configureStore } from "@reduxjs/toolkit";
// import counterSlice from "./counterSlice";
import totalAmountSlice from "./totalAmountSlice";
import stepSlice from "./stepSlice";

export default configureStore({
    reducer:{
        // counter:counterSlice,
        step:stepSlice,
        total:totalAmountSlice,
    }
}) 