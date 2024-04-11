import { combineReducers } from 'redux';
import userSlice from './slices/user/userSlice';
import storage from 'redux-persist/lib/storage';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';
//import { weatherApi } from "./services/weatherApi";
import { setupListeners } from '@reduxjs/toolkit/query';

const rootReducer = combineReducers({
  user: userSlice,
  /* userForm:userFormSlice,
  [weatherApi.reducerPath]:weatherApi.reducer */
});

const persistConfig = {
  key: 'storage',
  storage,
  version: 1,
  whitelist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
