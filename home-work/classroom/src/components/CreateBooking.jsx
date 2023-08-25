import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {createBooking } from '../store/restaurantsSlice'


const CreateBooking = ({day, day_num}) => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const [name, setName] = useState('')

  console.log(id)
  return (
    <div style={{
      position: 'absolute',
      backgroundColor: 'lightgrey',
      width: '50vw',
      height: '50vw'
    }}>
      <>
      {day[day_num].map(item => (
        <div>
          <h3>{item.name}</h3>
          <button>Cancel the booking</button>
        </div>
      ))}

      <input type="text" placeholder='Enter your name' onChange={(e) => setName(e.target.value) } />
      <button onClick={() => {
        dispatch(createBooking({
          restaurantId: id, 
          obj: {
            name: name,
            day: day_num
          } 
        }))
      }}>Book the table</button>
      </>
    </div>
  )
}

export default CreateBooking