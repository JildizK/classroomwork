import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getRestaurants } from '../store/restaurantsSlice'
import { useNavigate } from 'react-router-dom'
import RestaurantItem from './RestaurantItem'


const RestaurantsList = () => {
const navigate =useNavigate()
const dispatch = useDispatch()
const {restaurants} = useSelector((state)=>state.restaurants)
useEffect(()=>{
  dispatch(getRestaurants())
},[])
console.log(restaurants)
return (
    <>
    {restaurants.map((restaurant)=>( 
      <RestaurantItem key={restaurant.id} restaurant={restaurant}/>
    ))}
    </>
  )
}

export default RestaurantsList