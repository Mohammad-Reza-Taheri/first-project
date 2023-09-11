import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: 0,
    plan: 0,
    yr: false
}


const addArcade = (state) => {
    if (state.yr) {
        state.plan = 90
    } else {
        state.plan = 9
    }
}

const addAdvanced = (state) => {
    if (state.yr) {
        state.plan = 120
    } else {
        state.plan = 12
    }
}

const addPro = (state) => {
    if (state.yr) {
        state.plan = 150
    } else {
        state.plan = 15
    }
}

const yearToggle = (state) => {
    if (state.yr){
        state.yr = false
        state.plan=0
    }

    else {
        state.yr = true
        state.plan=0
    }
}

const total = (state) => {
    state.value += state.plan
    
}




const totalAmountSlice = createSlice({
    name: "total",
    initialState,
    reducers: {
        addArcade,
        addAdvanced,
        addPro,
        yearToggle,
        total
    }
})
export const { addArcade: addArcade_moAction, addAdvanced: addAdvanced_moAction, addPro: addProAction, yearToggle: yearToggleAction, total: totalAction, } = totalAmountSlice.actions
export default totalAmountSlice.reducer