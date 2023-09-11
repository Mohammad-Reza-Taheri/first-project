import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
}

const increment = (state) => {
    state.value++
}
const decrement = (state) => {
    state.value--
}
const setRefValue=(state,action)=>{
    // state.value=number;
    // state.value+=Number(action.payload.current.value);
    console.log(action.payload)
  
}

const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers: {
        increment,
        decrement,
        setRefValue,
    }
})

export const { increment: incrementAction, decrement: decrementAction, setRefValue :setValue } = counterSlice.actions
export default counterSlice.reducer;