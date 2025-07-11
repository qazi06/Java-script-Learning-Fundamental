'use strict'

const bookings = [];
const creatBooking = function(flightNum, passengerNum, price = 1000){
    const booking = {
       flightNum,
       passengerNum,
       price,
    };
    console.log(booking);
    bookings.push(booking);


}
creatBooking('Ar3s');
creatBooking('A58IR', 100, 12000);
creatBooking('U37CE', 46, 6500);