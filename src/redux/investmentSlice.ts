import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialState, Investment } from "../types";

const initialState: InitialState = {
  email: "leo.hoang@cushon.com",
  name: "Leo Hoang",
  investments: [],
};

const investmentSlice = createSlice({
  name: "investment",
  initialState,
  reducers: {
    setInvestment: (state, action) => {
      state.investments = action.payload;
    },
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    addInvestment: (state, action: PayloadAction<Investment>) => {
      state.investments.push(action.payload);
    },
  },
});

export const { setInvestment, setUser, addInvestment } =
  investmentSlice.actions;
export default investmentSlice.reducer;
