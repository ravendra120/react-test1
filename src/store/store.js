import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../feature/LoginSlice";
let store = configureStore({ reducer: { loginData: loginReducer } });
export default store;
