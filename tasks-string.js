//* Task-1:
// Count how many times a string has the letter a or A.

// solution

// const str = "Hello I am learning javascript aAa.";
// let sum = 0;

// for(let i=0; i<str.length; i++) {
//     if(str[i].toLowerCase() === 'a'){
//         sum+=1;
//     }
// }
// console.log("Total number of a or A is :",sum);

//* Task-2:
// Check whether a string contains all the vowels a, e, i, o, u

// solution
// const str = "Hello I am very excited to know from you.";
// let isA = false;
// let isE = false;
// let isI = false;
// let isO = false;
// let isU = false;

// for(let i=0; i<str.length; i++) {
//     if(str[i].toLowerCase() === "a"){
//         isA = true;
//     }
//     else if(str[i].toLowerCase() === "e"){
//         isE = true;
//     }
//     else if(str[i].toLowerCase() === "i"){
//         isI = true;
//     }
//     else if(str[i].toLowerCase() === "o"){
//         isO = true;
//     }
//     else if(str[i].toLowerCase() === "u"){
//         isU = true;
//     }
// }

// if(isA && isE && isI && isU && isU) {
//     console.log("Yes, all vowels are present in this sentence.");
// }
// else{
//     console.log("No, all vowels are not present here.");
// }

// Task-3:
// If a given string has either x, replace x by y. if the given string has X, replace it by Y.

const str = "Hello xx to XX";
// const str = "Hello";

// if (str.includes("x")) {
//   const newStr = str.replace(/x/g, 'y').replace(/X/g, 'Y');
//   console.log(newStr);
// }
// else{
//     console.log("This string has no x or X.");
// }
if (str.includes("x")) {
  const newStr = str.split('x').join('y').split('X').join('Y');
  console.log(newStr);
}
else{
    console.log("This string has no x or X.");
}