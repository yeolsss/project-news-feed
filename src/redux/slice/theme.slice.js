import { createSlice } from "@reduxjs/toolkit";

const THEME_KEY = "new_feed_theme";

const initialState = {
  theme: JSON.parse(localStorage.getItem(THEME_KEY) || "false"),
};

export const themeSlice = createSlice({
  name: "themeReducer",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = !state.theme;
      localStorage.setItem(THEME_KEY, JSON.stringify(state.theme));
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export const themeSelector = (state) => state.theme;

export default themeSlice.reducer;
