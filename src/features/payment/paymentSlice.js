import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    service: null,
    service_code: null,
};

const paymentSlice = createSlice({
    name: "payment",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchService.fulfilled, (state, action) =>{
            state.service = action.payload;
            state.service_code = action.payload.service_code;
        })
    }
})

export const fetchService = createAsyncThunk(
    'payment/fetchService',
    async (service_code, {getState, rejectWithValue}) => {
        const token = getState().auth.user?.token

        try {
            const response = await fetch("https://take-home-test-api.nutech-integrasi.com/services", {
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

            const selectedService = result.data.find(service => service.service_code === service_code);

            if (!selectedService) {
                return rejectWithValue({message: "Tidak ditemukan"});
            }

            return selectedService;
        } catch (error) {
            alert ("Terjadi kesalahan")
        }
    }
)

export const submitPayment = createAsyncThunk(
    'topup/submitPayment',
    async (data, { getState, rejectWithValue }) => {
        const token = getState().auth.user?.token

        try {
            const response = await fetch("https://take-home-test-api.nutech-integrasi.com/transaction",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body:JSON.stringify(data),
            });

            const result = await response.json();
            console.log(JSON.stringify(result))

            if(!response.ok) {
                alert(JSON.stringify(result,null,2));
                return;
            }
            
            alert("Top Up berhasil!");
            return result.data;
        } catch (error) {
            alert ("Terjadi kesalahan")
        }
    }
);

export default paymentSlice.reducer;