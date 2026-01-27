// slice
let str = "Hello, World!";
console.log(str.slice(7, 12)); // Output: World

// substring
console.log(str.substring(7, 12)); // Output: World

// substr
console.log(str.substr(7, 5)); // Output: World

// concat
let str1 = "Hello, ";
let str2 = "World!";
console.log(str1.concat(str2)); // Output: Hello, World!

// join
console.log(str.join(", ")); // Output: Hello, World!

// split
console.log(str.split(", ")); // Output: [ 'Hello', 'World!' ]

// includes
console.log(str.includes("x")); // Output: false