import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  phone: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
    changePhoneFilter: (state, action) => {
      state.phone = action.payload;
    },
  },
});

const filtersReducer = filtersSlice.reducer;

export const { changeFilter, changePhoneFilter } = filtersSlice.actions;
export default filtersReducer;
