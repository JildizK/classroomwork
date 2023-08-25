import React from 'react'

const BookingItem = ({ day, day_num }) => {
    console.log(day, day_num);
  return (
    <div className='cal__day'>
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
  )
}

export default BookingItem