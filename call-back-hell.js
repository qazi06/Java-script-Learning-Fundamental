'use strict'

const bnt = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const renderCountry = function(data) {
    const html = `
    <article class="country">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region} </h4>
    <p class="country__row"><span>👩🏼‍🤝‍👩🏼</span>${(+data.population / 1000000)
   .toFixed(1)} people</p>
    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
   <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
  </article>
 `;
 countriesContainer.insertAdjacentHTML('beforeend', html);
 countriesContainer.style.opacity = 1;
}
const getCountryNeighbour = function(country){
const request = new XMLHttpRequest();
request.open('GET', `https://restcountries.eu/rest/v2/name/${pakistan}`);
request.send();

request.addEventListener('load', function(){
    const [data] = JSON.parse(this.resonseText);
    console.log(data);

    renderCountry(data);

    const [neighbour] = data.borders;
    if(!neighbour) return;

    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.eu/rest/v2/name/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function() {
        const data2 = JSON.parse(this.responseText);
        console.log(data2);

        renderCountry(data2, 'neighbour');
    });
    
});
}; 
getCountryNeighbour('pakistan');

setTimeout(() => {
    console.log('1 second passed');
    setTimeout(() => {
    console.log('2 second passed');
    setTimeout(() => {
    console.log('3 second passed');
    setTimeout(() => {
    console.log('4 second passed');
}, 1000);
}, 1000);
}, 1000);
}, 1000);