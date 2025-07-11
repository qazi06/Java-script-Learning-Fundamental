'use strict'

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],

   book(flightNum, name) {
    console.log(
        `${name} Booked the seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );

    this.bookings.push( { flight: `${this.iataCode}${flightNum}`, name });
   },
     
};
lufthansa.book(23, 'Jonas');
lufthansa.book(546, 'John');
console.log(lufthansa);

const euroWings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [], 
};

const book = lufthansa.book;

book.call(euroWings, 56, 'Samentha Larroso');
console.log(euroWings);

book.call(lufthansa, 43, 'Hawk');
console.log(lufthansa)

const swiss = {
    airline: 'Swiss Air Line',
    iataCode: "LX",
    bookings:[],
};

book.call(swiss, 76, 'Johny');
console.log(swiss)

const flightData = [65, 'Mery'];
book.apply(swiss, flightData);
console.log(swiss)

book.call(swiss, ...flightData)

 const bookEW = book.bind(euroWings);
 const bookLH = book.bind(lufthansa);
 const bookLX = book.bind(swiss);

 bookLH(55, 'Peter');
 bookEW(45, 'Miechal');
 bookLX(65, 'Steven');

  const bookEW33 = book.bind(euroWings, 33);
  bookEW33('John');

  // With evenlisteners

  lufthansa.planes = 300;
  lufthansa.buyPlane = function (){
    console.log(this);

    this.planes++;
    console.log(this.planes);
  };

  document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));


           // Partial Application

           const addTax = (rate, value) => value+value*rate;
           console.log(addTax(0.1, 200));

           const addVAT = addTax.bind(null, 0.23); 

           console.log(addVAT(100));