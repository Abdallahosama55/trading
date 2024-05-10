// src/app/rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';
import languageReducer from './LanguageSlice';

const rootReducer = combineReducers({
  language: languageReducer,
  // Add other reducers here
});

export default rootReducer;
