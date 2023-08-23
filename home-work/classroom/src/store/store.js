import { configureStore } from "@reduxjs/toolkit";
import restaurantsReducer from "./restaurantsSlice";

export default configureStore({
    reducer: {
        restaurants: restaurantsReducer
    }
})