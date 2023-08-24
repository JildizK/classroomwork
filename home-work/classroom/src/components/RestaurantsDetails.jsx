import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { getOneRestaurant } from '../store/restaurantsSlice'
import {useParams} from 'react-router-dom'
import RestaurantBooking from './RestaurantBooking'


const RestaurantsDetails = () => {
    const dispatch = useDispatch()
    const {oneRestaurant} = useSelector(state =>state.restaurants)
    const {id} = useParams()
    useEffect(()=>{
        dispatch(getOneRestaurant(id))
    },[])
    console.log(oneRestaurant)
  return (
    <>
{oneRestaurant ? (
    <div>
        <h3>{oneRestaurant.name}</h3>
        <RestaurantBooking booking={oneRestaurant.booking} /> 
    </div>
):(<h3>'loading'</h3>)}
    </>
  )
}

export default RestaurantsDetails