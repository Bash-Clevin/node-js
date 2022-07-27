// object destructuring
//can be used in arrays/objects etc

const person = {
    name: 'Max',
    age: 20,
    greet() {
        console.log('Hi iam' + this.name);
    }
};

const printName = ({ age }) => {
    console.log(age);
}

printName(person);

const { name, age } = person;
console.log(name, age);