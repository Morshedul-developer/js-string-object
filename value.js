const person = {
    name: "Alice",
    age: 30,
    city: "New York",
    occupation: "Engineer",
    isMarried: true,
    'favorite color': "blue"
};

person.age = 31; // Updating age property

console.log(person.age); // Output: 31

const props = 'occupation';
person[props] = 'Senior Engineer'; // Updating occupation property using bracket notation

console.log(person[props]);
console.log(person);

const newProp = 'favorite color';
person[newProp] = 'green'; // Updating favorite color property

console.log(person);