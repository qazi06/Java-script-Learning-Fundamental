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

const rest1 = {
    name:'Capri',
    numGuests: 20,
};

const rest2 = {
    name: 'La piazza',
    owner : 'Jonas Rossi',
}

//rest1.numGuests = rest1.numGuests || 10;
//rest2.numGuests = rest2.numGuests || 10;

//rest1.numGuests ||= 10;
//rest2.numGuests ||= 9;

rest1.numGuests ??= 10;
rest2.numGuests ??= 9;

rest1.owner = rest1.owner && '<ANONYMOUS>';
rest2.owner = rest2.owner && '<ANONYMOUS>';

rest1.owner ??= '<ANONYMOUS>';
rest2.owner ??= '<ANONYMOUS>';


console.log(rest1);
console.log(rest2);