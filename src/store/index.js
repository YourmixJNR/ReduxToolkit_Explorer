import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
    persistStore, persistReducer, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import authReducer from "./auth/reducer"
import userReducer from "./user/reducer"

export const rootReducer = combineReducers({
    Auth: authReducer,
    User: userReducer
})

const rootPersistConfig = {
    key: "root",
    storage,
    version: 1,
    whitelist: ['Auth']
}

const persistedReducer = persistReducer(rootPersistConfig, rootReducer)
const store = configureStore({
    reducer: persistedReducer, middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persistor = persistStore(store)
export default store