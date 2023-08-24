import React from 'react';
import BookingItem from './BookingItem';

const RestaurantBooking = ({ booking }) => {
    // console.log(booking);
    const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // [{1: [{}, {}]}, {2: []}]
    

    function getBookingDays(booking, days) {
        const data = days.map(day => {
            let booking_days = booking.filter(item => item.day === day);
            return { [day]: booking_days }
        });
        return data;
    }


  return (
    <div>
        helloo
        {getBookingDays(booking, days).map((day, index) => (
            <BookingItem key={index} day={day} day_num={index + 1} />
        ))}
    </div>
  )
}

export default RestaurantBooking