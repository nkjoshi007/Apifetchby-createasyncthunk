import { configureStore } from "@reduxjs/toolkit";
import LoremSlice from "./features/lorem/loremSlice";

const store = configureStore({
    reducer:{
        Lorem:LoremSlice.reducer,
    },
});

export default store;