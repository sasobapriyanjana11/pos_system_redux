import { configureStore, combineReducers } from '@reduxjs/toolkit';
import customerSlice from "../slice/CustomerSlice";
import itemSlice from "../slice/ItemSlice.tsx";

const rootReducer = combineReducers({
    customers: customerSlice,
    items: itemSlice,
});

export const store = configureStore({
    reducer: rootReducer,
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;