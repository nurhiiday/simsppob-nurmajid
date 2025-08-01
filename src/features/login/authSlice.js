import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: '',
    password: '',
    user: null,
}

const authSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        resetAuthForm: () => initialState,
        logout: (state) => {
            state.user = null;
            state.email = "";
            state.password = "";
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(submitLogin.fulfilled, (state, action) => {
            state.user = action.payload;
        });
    }
});

export const submitLogin = createAsyncThunk(
    'login/submitLogin',
    async (FormData, { rejectWithValue }) => {
        try {
            const response = await fetch("https://take-home-test-api.nutech-integrasi.com/login",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body:JSON.stringify(FormData),
            });

            const result = await response.json();
            console.log(JSON.stringify(result))

            if(!response.ok) {
                alert(JSON.stringify(result,null,2));
                return;
            }

            return result.data;
            alert("Login berhasil!");
        } catch (error) {
            alert ("Terjadi kesalahan")
        }
    }
);

export const { resetAuthForm, logout } = authSlice.actions;
export default authSlice.reducer;