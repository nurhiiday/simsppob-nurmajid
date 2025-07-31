import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    nominal: '',
};

const topUpSlice = createSlice({
    name: 'topup',
    initialState,
    reducers: {
        updateTopUpField: (state, action) => {
            const {field, value} = action.payload;
            state[field] = value;
        },
        resetTopUp: () => initialState,
    }
});

export const { updateTopUpField, resetTupUp } = topUpSlice.actions;
export default topUpSlice.reducer;