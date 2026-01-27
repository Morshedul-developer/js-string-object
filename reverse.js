// Reverse way to string 1:

// const sentence = 'I am learning JavaScript';

// let reverse = '';

// for (const letter of sentence) {
    // reverse = letter + reverse;
// }

// console.log(reverse); // tpircSavaJ gninrael ma I


// Reverse way to string 2:

// const sentence2 = 'I am learning JavaScript';

// let rev = '';

// for (let i=0; i<sentence2.length; i++) {
    // const letter = sentence2[i];
    // rev = letter + rev;
// }

// console.log(rev); // tpircSavaJ gninrael ma I


// Reverse way to string 3:

const sentence3 = 'I am learning JavaScript';

const reversed = sentence3.split('').reverse().join('');

console.log(reversed);