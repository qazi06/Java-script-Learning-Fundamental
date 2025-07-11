const flight = 'UA3741';
const jonas = {
    name: 'Jonas',
  passport: 37869232
}
const checkIn = function (flightName, passenger) {
    flightName = 'CA593D';
    passenger.name ='Mr'+ passenger.name;
    
    if(passenger.passport===37869232){
        alert('Checked in ');
        
    } else {
        alert('Wrong Passport')
    }
}
checkIn(flight, jonas);
console.log(flight);
console.log(jonas);


flightName = flight;
passenger.name = jonas;

const newPassport = function(person) {
    person.passport = Math.trunc(Math.random()*10000);
}
newPassport(jonas);
checkIn(flight, jonas);