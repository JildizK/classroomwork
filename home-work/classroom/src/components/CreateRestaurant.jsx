import React, { useState, useEffect } from "react"; 
import axios from "axios"; 
import { useDispatch, useSelector } from "react-redux"; 
import { createRestaurant } from "../store/restaurantsSlice"; 
import { useNavigate } from "react-router-dom"; 
 
import Box from "@mui/material/Box"; 
import TextField from "@mui/material/TextField"; 
import Stack from "@mui/material/Stack"; 
import Button from "@mui/material/Button"; 
 
const CreateRestaurant = () => { 
    const dispatch = useDispatch(); 
    const navigate = useNavigate(); 
 
    const [restaurant, setRestaurant] = useState({ 
        name: "", 
        address: "", 
        url: "", 
        rating: 0, 
        booking:[]
    }); 
 
    return ( 
        <> 
        <div className="create__res">
            <TextField onChange={(e) => setRestaurant({...restaurant, name:e.target.value})} id="standard-basic" label="Name" variant="standard" /> 
            <TextField onChange={(e) => setRestaurant({...restaurant, address:e.target.value})} id="standard-basic" label="Adress" variant="standard" /> 
            <TextField onChange={(e) => setRestaurant({...restaurant, url:e.target.value})} id="standard-basic" label="image" variant="standard" /> 
            <Stack spacing={2} direction="row"> 
                <Button variant="outlined" id="a" onClick={() => dispatch(createRestaurant(restaurant))}>Create</Button> 
            </Stack> 
            </div>
        </> 
    ); 
}; 

export default CreateRestaurant;