'use strict'
const weekdays = ['mon','tue','wed','thu','fri','sat','sun']
const restaurant = {
    name: 'Classico Italiano',
    location: 'Firenzi, Italy',
    categories: ['Italian', 'pizzeria', 'organic', 'vegetarian'],
    starterMenu:['focaccia', 'garlic bread', 'salad'],
    mainMenu: ['pizza', 'pasta', 'Risotto'],
    days: {
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
if (restaurant.days && restaurant.days.mon) 
    console.log(restaurant.days.mon.open);

console.log(restaurant.days.mon?.open);
console.log(restaurant.days?.mon?.open);

//Example

const openingHours = ['mon','tue','wed','thu','fri','sat','sun'];

for(const day of openingHours) {
    const open = restaurant.days[day]?.open ?? 'closed';
    console.log(`On ${day} we open at ${open}`);
};

// Methods

console.log(restaurant.order?.(0, 1) ?? 'These are not Availables');
console.log(restaurant.orderRisotto?.(0, 2) ?? 'It\'s not available');

// Arrays

const users = [{name:'Jonas', email: 'jonas@gmail.com'}];

console.log(users?.name ?? 'They are not working');
console.log(users[0]?.name ?? 'They are not exist');