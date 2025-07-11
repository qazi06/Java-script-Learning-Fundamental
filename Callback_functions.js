const onWord = function(str) {
    return str.replace(/ /g, '').toLowerCase();

};


const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher Order Function

const transformer = function(str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed String: ${fn(str)}`);
    console.log(`Transformed By: ${fn.name}`);
};

transformer('JavaScript Is the best!', upperFirstWord);
transformer('JavaScript Is the best!', onWord); 


const high5 = function() {
    console.log('👍');
};
document.body.addEventListener('click', high5);
['Jonas', 'Marthe','Adam'].forEach(high5);