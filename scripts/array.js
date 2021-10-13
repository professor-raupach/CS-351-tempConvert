"use strict"

let animals = ['chicken', 'cat', 'goat', 'rabbit', 
    'cow', 'dog'];

console.log(animals.length);

console.log(animals[0]);

console.log(animals[animals.length - 1]);

animals.forEach((animal, index, array)=> {
    console.log(animal);
    console.log(index);
    console.log(array);
})
console.log("--------------------------------");
// act like a stack

const newLength = animals.push('rat');
console.log(newLength);
console.log(animals)

const popped = animals.pop();

console.log(popped);
console.log(animals);

// queue 

const shifted = animals.shift();
console.log(shifted);
console.log(animals);


// splicing

const removed_animals = animals.splice(1, 2);
console.log(removed_animals);
console.log(animals);

animals = animals.concat(removed_animals);
console.log(animals);

const short_name = animals.filter((animal)=>{
    return animal.length < 4;
})

console.log(short_name)
console.log(animals)


const upper_animals = animals.map((animal)=>{
    return animal.toUpperCase();
})

console.log(upper_animals);