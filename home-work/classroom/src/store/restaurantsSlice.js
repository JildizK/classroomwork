import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = 'http://localhost:8000/restaurants'

export const createRestaurant = createAsyncThunk(
    'restaurants/createRestaurant',
    async (newObj) => {
        let res = await axios.post(API, newObj)
        return res; 
    }
)

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