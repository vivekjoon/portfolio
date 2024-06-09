import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducers/loginReducer";
import persistReducer from "redux-persist/es/persistReducer";
import storage from 'redux-persist/lib/storage';
import persistStore from "redux-persist/es/persistStore";


const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, authSlice)


export const store = configureStore({
  reducer: { auth: persistedReducer },
});

export const persistor = persistStore(store)
