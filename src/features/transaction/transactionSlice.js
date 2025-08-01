import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    history: null,
    error: null,
}

const transactionSlice = createSlice({
    name: 'history',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchHistory.fulfilled, (state, action) => {
            state.history = action.payload;
        })
        .addCase(fetchHistory.rejected, (state, action) =>{
            state.error = "Gagal";
        })
    }
            
})

export const fetchHistory = createAsyncThunk(
    'history/fetchHistory',
    async (data, {getState, rejectWithValue}) => {
        const token = getState().auth.user?.token

        try {
            const response = await fetch("https://take-home-test-api.nutech-integrasi.com/transaction/history",{
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

export default transactionSlice.reducer;