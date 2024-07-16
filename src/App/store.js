import { configureStore } from "@reduxjs/toolkit";
import transactionReducer from "../feature/Transaction/TransactionSlice";
import filterReducer from "../feature/filter/filterSlice";

export const store = configureStore({
  reducer: { transaction: transactionReducer, filter: filterReducer },
  devTools: true,
});
