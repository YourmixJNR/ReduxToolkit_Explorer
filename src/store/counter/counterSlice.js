import { createSlice } from "@reduxjs/toolkit";

const name = "counter"
const initialState = {
    count: 3
}

const counterSlice = createSlice({
    name,
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count += 1
        }
    }
})

export const {increment, decrement} = counterSlice.actions

export default counterSlice.reducer