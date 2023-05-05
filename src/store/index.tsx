import { configureStore, createSlice } from '@reduxjs/toolkit';

export type storeState = {
  showMenu: boolean,
  language: string,
  mode: string,
}

const initialState: storeState = {
  showMenu: false,
  language: localStorage.getItem('lang') || 'en',
  mode: localStorage.getItem('mode') || 'dark'
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
    },
    setMode(state, action) {
      state.mode = action.payload
    }
  },
});

const store = configureStore({
  reducer: headerSlice.reducer,
});

export const headerActions = headerSlice.actions;

export default store;
