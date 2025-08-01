import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    profile: null,
    balance: null,
    banner: null,
    service: null,
    error: null,
};

const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchProfile.fulfilled, (state, action) => {
            state.profile = action.payload;
        })
        .addCase(fetchProfile.rejected, (state, action) =>{
            state.error = "Gagal";
        })
        .addCase(fetchBanner.fulfilled, (state, action) => {
            state.banner = action.payload;
        })
        .addCase(fetchBanner.rejected, (state, action) =>{
            state.error = "Gagal";
        })
        .addCase(fetchService.fulfilled, (state, action) => {
            state.service = action.payload;
        })
        .addCase(fetchService.rejected, (state, action) =>{
            state.error = "Gagal";
        })
        .addCase(fetchBalance.fulfilled, (state, action) => {
            state.balance = action.payload;
        })
        .addCase(fetchBalance.rejected, (state, action) =>{
            state.error = "Gagal";
        })
    }
});

export const fetchProfile = createAsyncThunk(
    'home/fetchProfile',
    async (data, {getState, rejectWithValue}) => {
        const token = getState().auth.user?.token

        try {
            const response = await fetch("https://take-home-test-api.nutech-integrasi.com/profile",{
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            })

            const result = await response.json();
            // console.log(JSON.stringify(result))


            if (!response.ok) {
                return rejectWithValue(result);
            }

            return result.data;
        } catch (error) {
            alert ("Terjadi kesalahan")

        }
    }
)

export const fetchBalance = createAsyncThunk(
    'home/fetchBalance',
    async (data, {getState, rejectWithValue}) => {
        const token = getState().auth.user?.token

        try {
            const response = await fetch("https://take-home-test-api.nutech-integrasi.com/balance",{
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            })

            const result = await response.json();

            if (!response.ok) {
                return rejectWithValue(result);
            }

            return result.data;
        } catch (error) {
            alert ("Terjadi kesalahan")

        }
    }
)

export const fetchService = createAsyncThunk(
    'home/fetchService',
    async (data, {getState, rejectWithValue}) => {
        const token = getState().auth.user?.token

        try {
            const response = await fetch("https://take-home-test-api.nutech-integrasi.com/services",{
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            })

            const result = await response.json();

            if (!response.ok) {
                return rejectWithValue(result);
            }

            return result.data;
        } catch (error) {
            alert ("Terjadi kesalahan")

        }
    }
)

export const fetchBanner = createAsyncThunk(
    'home/fetchBanner',
    async (data, {getState, rejectWithValue}) => {

        try {
            const response = await fetch("https://take-home-test-api.nutech-integrasi.com/banner",{
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                }
            })

            const result = await response.json();
            // console.log(JSON.stringify(result))


            if (!response.ok) {
                return rejectWithValue(result);
            }

            return result.data;
        } catch (error) {
            alert ("Terjadi kesalahan")

        }
    }
)

export default homeSlice.reducer;