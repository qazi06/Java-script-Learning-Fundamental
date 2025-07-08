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


console.log('.............OR.............');

//Use any data type, return any data type,Short Circuiting

console.log( 3 || 'Jonas');
console.log( undefined || null);
console.log( 'ture' || 0);
console.log('' || 'Jonas');
console.log( undefined||  '' ||23 || true || 0 || null ||'Jonas');
restaurant.guestNumber = 20;
const guest1 = restaurant.guestNumber ? restaurant.guestNumber : 10;
console.log(guest1);

const guest2 = restaurant.guestNumber || 10;
console.log(guest2);


console.log('.............AND.............');

console.log(0 && 'Jonas');
console.log(7 && 'Jonas');
console.log(true && 'Jonas' && null && ''  && 7 && undefined);
if(restaurant.orderPizza) {
    restaurant.orderPizza && restaurant.orderPizza ('mushroom' ,'Spinach');
}
