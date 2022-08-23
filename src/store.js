import { configureStore } from "@reduxjs/toolkit";
import resumeReducer from './features/Resume/resumeSlice';
import storage from "redux-persist/lib/storage";
import { combineReducers } from 'redux';
import { persistReducer } from "redux-persist";
import thunk from 'redux-thunk';

const reducers = combineReducers({
    resume: resumeReducer,
});
const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig,reducers);
export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_EVE !== 'production',
    middleware: [thunk],
});
