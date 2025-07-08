'use strict'
const weekdays = ['mon','tue','wed','thu','fri','sat','sun']
const restaurant = {
    name: 'Classico Italiano',
    location: 'Firenzi, Italy',
    categories: ['Italian', 'pizzeria', 'organic', 'vegetarian'],
    starterMenu:['focaccia', 'garlic bread', 'salad'],
    mainMenu: ['pizza', 'pasta', 'Risotto'],
    openingHours: {
        [weekdays[3]]: {
            open: 11,
            close: 23
        },
        [weekdays[4]]: {
            open:12,
            close: 23
        },
        [weekdays[5]]: {
            open: 0, // 24 hour's open
            close: 24
        }
    },
    

   order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
   
},
   orderDelivery({starterIndex, mainIndex, time, address}) {
      console.log(`
        Order recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
   },
   
   orderPasta(ing1, ing2 ,ing3) {
    console.log(`Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`)
   },

   orderPizza(mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
   },
   
};

// Property Names

const properties = Object.keys(restaurant.openingHours);
let openStr = `We are open in ${properties.length} days: `;

for(const day of properties) {
    openStr += `${day}, `;
};
console.log(openStr);

//Property Values

const values = Object.values(restaurant.openingHours);
console.log(values);

//Property Entries

const entries = Object.entries(restaurant.openingHours);
console.log(entries);

for(const [day, {open, close}] of entries) {
    console.log(`On ${day} we open at ${open} and close ${close}`)
};