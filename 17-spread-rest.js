// spread & rest operators

// spread operators
const hobbies = ['sports', 'cooking'];
const copiedArray = [...hobbies];
console.log(copiedArray);

// rest operator
const toArray = (...args) =>{
    return args;
};

console.log(toArray(1,2,2,4));