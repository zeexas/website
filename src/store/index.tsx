import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  showMenu: false,
};

const burgerSlice = createSlice({
  name: 'burger',
  initialState,
  reducers: {
    openMenu(state) {
      state.showMenu = true;
    },
    closeMenu(state) {
      state.showMenu = false;
    },
  },
});

const store = configureStore({
  reducer: burgerSlice.reducer,
});

export const burgerActions = burgerSlice.actions;

export default store;
