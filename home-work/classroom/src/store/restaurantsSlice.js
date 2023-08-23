import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const restaurantsSlice = createSlice({
    name: 'restaurants',
    initialState: {
        restaurants: []
    },
    reducers: {},
    extraReducers: {}
}
)

export default restaurantsSlice.reducer