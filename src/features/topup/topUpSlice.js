import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    amount: null,
};

const topUpSlice = createSlice({
    name: 'topup',
    initialState,
    reducers: {

    },
});

export const submitTopUP = createAsyncThunk(
    'topup/submitTopUp',
    async (data, { getState, rejectWithValue }) => {
        const token = getState().auth.user?.token

        try {
            const response = await fetch("https://take-home-test-api.nutech-integrasi.com/topup",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body:JSON.stringify({
                    top_up_amount: Number(data.top_up_amount)
                }),
            });

            const result = await response.json();
            console.log(JSON.stringify(result))

            if(!response.ok) {
                alert(JSON.stringify(result,null,2));
                return;
            }

            return result.data;
        } catch (error) {
            alert ("Terjadi kesalahan")
        }
    }
);

export default topUpSlice.reducer;