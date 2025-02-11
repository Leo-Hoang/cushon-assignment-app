import { configureStore } from "@reduxjs/toolkit";
import investmentReducer from "./investmentSlice";

const store = configureStore({
  reducer: {
    investment: investmentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
