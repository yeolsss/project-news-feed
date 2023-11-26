import { configureStore } from "@reduxjs/toolkit";
import dropDownSlice from "./slice/dropDown.slice";
import loadingModalSlice from "./slice/loadingModal.slice";
import loginModalSlice from "./slice/loginModal.slice";
import themeSlice from "./slice/theme.slice";

const store = configureStore({
  reducer: {
    theme: themeSlice,
    loginModal: loginModalSlice,
    loadingModal: loadingModalSlice,
    dropDownMenu: dropDownSlice,
  },
});

export default store;
