import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    profileDetail: null,
    error: null,
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers:{

    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchProfileDetail.fulfilled, (state, action) => {
            state.profileDetail = action.payload;
        })
        .addCase(fetchProfileDetail.rejected, (state, action) =>{
            state.error = "Gagal";
        })
        .addCase(updateProfile.fulfilled, (state, action) => {
            state.isUpdating = false;
            state.profileDetail = action.payload;
        })
        .addCase(updateProfile.rejected, (state, action) => {
            state.isUpdating = false;
            state.error = "Gagal update profil";
        })
    }    
})

export const fetchProfileDetail = createAsyncThunk(
    'profile/fetchProfileDetail',
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

            if (!response.ok) {
                return rejectWithValue(result);
            }

            return result.data;
        } catch (error) {
            alert ("Terjadi kesalahan")

        }
    }
)

export const updateProfile = createAsyncThunk(
    'profile/updateProfile',
    async (data, { getState, rejectWithValue }) => {
        const token = getState().auth.user?.token;

        try {
            const response = await fetch("https://take-home-test-api.nutech-integrasi.com/profile/update", {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                return rejectWithValue(result);
            }

            return result.data;
        } catch (error) {
            alert ("Terjadi kesalahan")

        }
    }
);


export default profileSlice.reducer;