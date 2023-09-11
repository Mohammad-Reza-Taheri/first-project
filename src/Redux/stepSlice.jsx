import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: 0
}

const addStep = (state) => {
    if(state.value<4){
        state.value++
    }
}

const subtractStep=(state)=>{
    if(state.value>0){
        state.value--;
    }
    }


const stepSlice = createSlice({
    name: "step",
    initialState,
    reducers: {
        addStep,
        subtractStep

    }
})

export const { addStep: addStepAction,subtractStep:subtractStepAction } = stepSlice.actions
export default stepSlice.reducer;


// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     value: 0
// }

// const addStep = (state) => {
//     state.value++
// }


// const stepSlice = createSlice({
//     name:"step",
//     initialState,
//     reducers: {
//         addStep,
 
//     }
// })

// export const { addStep: addStepAction } = stepSlice.actions
// export default stepSlice.reducer;