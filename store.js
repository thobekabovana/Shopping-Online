import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./src/features/itemsSlice";

export default configureStore({
    reducer: {
        items: itemsSlice
    }
})