import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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

export const submitRegister = createAsyncThunk(
    'register/submitRegister',
    async (formData, { rejectWithValue }) => {
        try {       
            const response = await fetch("https://take-home-test-api.nutech-integrasi.com/registration",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if(!response.ok) {
                alert(JSON.stringify(result,null,2));
                return;
            }

            console.log("Registrasi berhasil: ", result);
            alert("Registrasi berhasil!");
        } catch (error) {
            console.error("Terjadi kesalahan: ", error);
            alert("Terjadi kesalahan saat mengirim data.");
        }
    }
);

export const { updateField, resetForm } = registerSlice.actions;
export default registerSlice.reducer;