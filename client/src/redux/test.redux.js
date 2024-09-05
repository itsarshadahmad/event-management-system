import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter: 0,
};

// Reducer
export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        addCounter: (state, action) => {
            state.counter = action.payload.counter + 1;
        },
    },
});
