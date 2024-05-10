// src/features/language/languageSlice.js
import { createSlice } from '@reduxjs/toolkit';

const languageSlice = createSlice({
  name: 'language',
  initialState: {
    isEnglish: true, // Assuming English is the default language
  },
  reducers: {
    setLanguage: (state, action) => {
      state.isEnglish = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
