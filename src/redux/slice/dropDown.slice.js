import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  dropDownMenu: false,
};
export const dropDownSlice = createSlice({
  name: "dropDownMenuReducer",
  initialState,
  reducers: {
    toggleDropDownMenu: (state, action) => {
      state.dropDownMenu = action.payload;
    },
  },
});

export const { toggleDropDownMenu } = dropDownSlice.actions;
export const selectDropDownMenu = (state) => state.dropDownMenu.dropDownMenu;
export default dropDownSlice.reducer;
