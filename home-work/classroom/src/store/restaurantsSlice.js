import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = 'http://localhost:8000/restaurants'
export const getRestaurants= createAsyncThunk('restaurants/getRestaurants',
async ()=>{
    let res = await axios.get(API)
    return res.data
} )

export const createRestaurant = createAsyncThunk(
    'restaurants/createRestaurant',
    async (newObj) => {
        let res = await axios.post(API, newObj)
        return res; 
    }
)
export const getOneRestaurant = createAsyncThunk(
    'restaurants/getOneRestaurant',
    async (restaurantId) =>{
        let res = await axios.get(`${API}/${restaurantId}`)
        return res.data
    }
)

export const createBooking = createAsyncThunk(
    'restaurants/createBooking',
    async (bookingObj) => {
        let res = await axios.get(`${API}/${bookingObj.restaurantId}`)
        let restaurantObj = res.data
        restaurantObj.booking.push(bookingObj.obj)
        await axios.patch(`${API}/${bookingObj.restaurantId}`, restaurantObj)
    }
)

const restaurantsSlice = createSlice({
    name: 'restaurants',
    initialState: {
        restaurants: [],
        oneRestaurant:null,
    },
    reducers: {},
    extraReducers:(builder)=>{
        builder
        .addCase(getRestaurants.fulfilled,(state,action)=>{
            state.restaurants = action.payload
        })
        .addCase(getOneRestaurant.fulfilled,(state,action)=>{
            state.oneRestaurant = action.payload
        })
    }
}
)

export default restaurantsSlice.reducer