let arr= prompt("Enter your letters : ");

let array = arr.split('');

let letters=[];
for(let i =0; i < array.length; i++) {
    
    
    let letter = array[i];
   
    if(letters[letter])
    {
        letters[letter] = letters[letter]+1;
    }
    else
    {
        letters[letter] = 1;
    }
    
}

for(const [key, value] of Object.entries(letters)){
   
     console.log(`${key} is repeated in ${value} times`);  
    
};
