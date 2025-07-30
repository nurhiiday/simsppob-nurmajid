import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: '',
    password: '',
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        updateAuthField: (state, action) => {
            const {field, value} = action.payload;
            state[field] = value;
        },
        resetAuthForm: () => initialState,
    }
});

export const { updateAuthField, resetAuthForm } = authSlice.actions;
export default authSlice.reducer;