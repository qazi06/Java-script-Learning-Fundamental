'use strict'

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
   
   orderPasta: function (ing1, ing2 ,ing3) {
    console.log(`Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`)
   },

   orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
   },
};

const arr = [1, 2, ...[3, 4, 5]];

const [a, b, ... others] = [1, 2, 3, 4, 5];

console.log(a, b, others);
console.log(a, b, ...others);

const [pizza, , Risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, Risotto, otherFood);

//Objects

const {sat, ...weekdays} = restaurant.time;
console.log(weekdays);

// Functions 

const add = function(...numbers) {
    let sum = 0;
    for(let i = 0; i <numbers.length; i++) sum+= numbers[i];
    console.log(sum);
}

add(2, 3);
add(4, 3, 7);
add(9, 8, 6, 5, 3);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion','olives','spinach');
restaurant.orderPizza('mushrooms');