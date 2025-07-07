'use strict'

// Destructuring Objects.

const restaurant = {
    name: 'Classico Italiano',
    location: 'Firenzi, Italy',
    categories: ['Italian', 'pizzeria', 'organic', 'vegetarian'],
    starterMenu:['focaccia', 'garlic bread', 'salad'],
    mainMenu: ['pizza', 'pasta', 'Risotto'],
    time: {
        thu: {
            open: 11,
            close: 23
        },
        fri: {
            open:12,
            close: 23
        },
        sat: {
            open: 0, // 24 hour's open
            close: 24
        }
    },

   order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
   },

   orderDelivery: function({starterIndex, mainIndex, time, address}) {
      console.log(`
        Order recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
   },
};

restaurant.orderDelivery({
    time: '10:20',
    address: 'via del sole, 21',
    starterIndex: 1,
    mainIndex: 0,

});

const {time, mainMenu, categories} = restaurant;

console.log(time, mainMenu, categories);

//const {name: restaurantName, mainManu: manu, categories: tags} = restaurant; 
//console.log(restaurantName, manu, tags);

const {menu = [], starterMenu: staters = []} = restaurant;
console.log(menu, staters);

// Mutating variables

let a = 214;
let b = 543;

const obj = {a: 3, b: 9, c: 6};
({a, b} = obj)
console.log(a, b);

// Nested Objects

const { fri } = time;
console.log(fri);

// Or

const { fri: {open : o, close: c}} = time;
console.log(o, c);
