import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginModal: false,
};

export const loginModalSlice = createSlice({
  name: "loginModalReducer",
  initialState,
  reducers: {
    openLoginModal: (state) => {
      state.loginModal = true;
    },
    closeLoginModal: (state) => {
      state.loginModal = false;
    },
  },
});

export const { openLoginModal, closeLoginModal } = loginModalSlice.actions;
export const selectLoginModal = (state) => state.loginModal.loginModal;
export default loginModalSlice.reducer;
