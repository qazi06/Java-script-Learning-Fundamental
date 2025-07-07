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
   }
};

const arr = [7, 8, 9];
const badNewArr = [1, 2 , arr[0], arr[1], arr[2]];
console.log(badNewArr);
const newArr = [1, 2,...arr];
console.log(newArr);
console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'gnocci'];
console.log(newMenu);

//Main Menu Copy

const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 arrays

const joinMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(joinMenu);

// Iterables: arrays, strings, maps, sets. NOT ojects

const str = 'Jonas';
const letter = [...str, '', 's'];
console.log(letter);
console.log(...str);

const ingredients = [
    prompt("Let\'s make your pasta ingredient ?"), 
    prompt("Ingredients 2 ?"), 
    prompt("Ingredients 3 ?"),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[3]);
restaurant.orderPasta(...ingredients);