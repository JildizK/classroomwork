import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import CreateBooking from './CreateBooking';

const BookingItem = ({ day, day_num }) => {

    const [isBooking, setIsBooking] = useState(false)

    const navigate = useNavigate()
    console.log(day, day_num);
  return (
    <> 
    {isBooking ? (<CreateBooking day={day} day_num={day_num}/>) :
    (
 <div className='cal__day' onClick={() => setIsBooking(true)}>
 {day[day_num].length === 5 ? (
     <h3 style={{ color: 'red' }} >{day_num}</h3>
 ) : (
     <>
         {day[day_num].length === 0 ? (
         <h3 style={{ color: 'green' }}  >{day_num}</h3>
     ) : (
         <h3 style={{ color: 'darkgray' }} >{day_num}</h3>
     )}
     </>
     
 )}
</div>
    )}
    </>
   
  )
}

export default BookingItem