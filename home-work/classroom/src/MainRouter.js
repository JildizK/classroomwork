import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CreateRestaurant from './components/CreateRestaurant'
import RestaurantsList from './components/RestaurantsList'
import RestaurantsDetails from './components/RestaurantsDetails'
import CreateBooking from './components/CreateBooking'

const MainRouter = () => {
  return (
   <Routes>
    <Route path='/' element={<RestaurantsList/>}/>
   <Route path='/create-restaurant' element={ <CreateRestaurant/> } />
   <Route path='/details-restaurant/:id' element={<RestaurantsDetails/>} />
   <Route path='/booking-create' element={<CreateBooking />} />
   </Routes>
  )
}

export default MainRouter