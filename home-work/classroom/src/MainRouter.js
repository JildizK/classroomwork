import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CreateRestaurant from './components/CreateRestaurant'
import RestaurantsList from './components/RestaurantsList'
import RestaurantsDetails from './components/RestaurantsDetails'

const MainRouter = () => {
  return (
   <Routes>
    <Route path='/' element={<RestaurantsList/>}/>
   <Route path='/create-restaurant' element={ <CreateRestaurant/> } />
   <Route path='/details-restaurant/:id' element={<RestaurantsDetails/>} />
   </Routes>
  )
}

export default MainRouter