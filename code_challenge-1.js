'use strict'

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia',

    players: [
    [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',      
    ],
    [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotzo',
    ],
    ],

    score: '4:0',
    scored: ['Lewandowski','Gnarby' ,'Lewandowski','Hummels'],
    date: 'Nov 9th, 2026',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },

};

const [player1, player2] = game.players;
console.log(player1, player2);

const [gk, ...fieldKeeper] = player1;
console.log(gk, fieldKeeper); 

const allPlayers = [...player1, ...player2];
console.log(allPlayers);

const player1Final = [...player1, 'Thiago','Cautinho','Perisic' ];
console.log(player1Final); 

const { 
    odds : { team1, x: draw, team2},
} = game;
console.log(team1, draw, team2);

const printGoals = function(...players) {
    console.log(players);
    console.log(`${players.lenght}were the scored`);  
};

//printGoals('Davies','Muller','Lewandowski','Kimmich');
//printGoals('Davis','Muller');

printGoals(...game.scored);

team1 < team2 && console.log('Team1 is more likely to win ');
team1 > team2 && console.log('Team2 is more likely to win'); 



// Looping arrays The for-of loop
console.log('..............Looping arrays The for-of loop..................');


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


const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
    console.log(`${i + 1}: ${el}`)
}

