import {configureStore } from "@reduxjs/toolkit";
import counterReducer from "./CounterReducer"
import { increament } from "./action";

const store = configureStore({
    reducer : counterReducer
});
export default store;






