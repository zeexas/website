import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  showMenu: false,
  language: localStorage.getItem('lang') || 'en',
};

const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    openMenu(state) {
      state.showMenu = true;
    },
    closeMenu(state) {
      state.showMenu = false;
    },
    setLanguage(state, action) {
      state.language = action.payload
    }
  },
});

const store = configureStore({
  reducer: headerSlice.reducer,
});

export const burgerActions = headerSlice.actions;

export default store;
