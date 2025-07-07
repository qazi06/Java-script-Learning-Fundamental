'use strict'

// Destructuring Arrays

const restaurant = {
    name: 'Classico Italiano',
    location: 'Firenzi, Italy',
    categories: ['Italian', 'pizzeria', 'organic', 'vegetarian'],
    starterManu:['focaccia', 'garlic bread', 'salad'],
    mainManu: ['pizza', 'pasta', 'Risotto'],

   order: function(starterIndex, mainIndex) {
    return [this.starterManu[starterIndex], this.mainManu[mainIndex]];
   }
};

const arr = [2, 3, 4];
const a = [0];
const b = [1];
const c = [2];

const [x, y, z] = arr;
console.log(x, y, z);

console.log(arr);

let [main, secondery, third] = restaurant.categories;

console.log(main,third);
console.log(restaurant.categories);

const temp = main;
main = secondery;
secondery = temp;

console.log(main, secondery);

//or 

[main, secondery] = [secondery, main];

console.log(main, secondery);

const [starter, maincourse] = restaurant.order(1 , 0);
console.log (starter, maincourse);

const Nested = [2, 4 ,[5, 6]];

const [t, w , [ u, v ]] = Nested;
console.log(t, v);

const [ p=1, q=1, r=1 ] = [8, 9, 7];
console.log(p, q, r);
