import { configureStore } from "@reduxjs/toolkit";
import registerReducer from '../features/register/registerSlice';
import authReducer from '../features/login/authSlice';
import topupReducer from '../features/topup/topUpSlice';

export const store = configureStore({
    reducer: {
        register: registerReducer,
        auth: authReducer,
        topup: topupReducer,
    }
});