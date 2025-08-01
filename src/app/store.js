import { configureStore } from "@reduxjs/toolkit";
import registerReducer from '../features/register/registerSlice';
import authReducer from '../features/login/authSlice';
import topupReducer from '../features/topup/topUpSlice';
import storage from 'redux-persist/lib/storage';
import homeReducer from '../features/home/homeSlice';
import paymentReducer from '../features/payment/paymentSlice';
import historyReducer from '../features/transaction/transactionSlice';
import profileReducer from '../features/profile/profileSlice';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

const persistConfig = {
    key: 'auth',
    storage,
};

const persistAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
    reducer: {
        register: registerReducer,
        auth: persistAuthReducer,
        topup: topupReducer,
        home: homeReducer,
        payment: paymentReducer,
        history: historyReducer,
        profile: profileReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            }
        })
});

export const persistor = persistStore(store);
