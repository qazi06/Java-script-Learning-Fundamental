const calcAge3 = birthYear => 2025-birthYear;
const age3 = calcAge3(1999);
console.log(age3);
const yearUnitRetirement = (birthYear, firstName) => {
    const age = 2025-birthYear;
    const retirement = 65-age;
    return `${firstName} retires in ${retirement} years`;
}
console.log(yearUnitRetirement(1999,"John"));
console.log(yearUnitRetirement(1999, "Doe"));