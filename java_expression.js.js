// Function Declarations

function calcAge1(birthYear) {
    return 2025-birthYear;
}
const age1 = calcAge1(1999);
console.log(age1);

// Function Expressions

const calcAge2 = function(birthYear) {
    return 2025-birthYear;
}
const age2 = calcAge2(1999);
console.log(age2);