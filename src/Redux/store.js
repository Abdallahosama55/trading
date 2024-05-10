// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './LanguageReducer';

const store = configureStore({
  reducer: rootReducer,
});

export default store;
