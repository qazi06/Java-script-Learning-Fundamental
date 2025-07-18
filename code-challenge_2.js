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

for(const [i, player] of game.scored.entries()) {
    console.log(`Goal ${i + 1} : ${player}`);
}

const odds = Object.values(game.odds);
let average = 0;
for(const odd of odds) average+= odd;
average/=odds.length;
console.log(average);

for(const [team, odd] of Object.entries(game.odds)) {
    const teamStr = team=== 'x' ? 'draw' : `victory ${game[team]}`;
    console.log(`Odd of ${teamStr} and ${odd}`);
};