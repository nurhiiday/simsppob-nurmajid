import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    passwordVal: '',
};

const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        updateField: (state, action) => {
            const {field, value} = action.payload;
            state[field] = value;
        },
        resetForm: () => initialState,
    }
});

export const { updateField, resetForm } = registerSlice.actions;
export default registerSlice.reducer;