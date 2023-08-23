import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CreateRestaurant from './components/CreateRestaurant'
import RestaurantsList from './components/RestaurantsList'

const MainRouter = () => {
  return (
   <Routes>
    <Route path='/' element={<RestaurantsList/>}/>
   <Route path='/create-restaurant' element={ <CreateRestaurant/> } />
   </Routes>
  )
}

export default MainRouter