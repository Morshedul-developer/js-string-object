// const book = "Chemistry";
// const subject = "chemistry";

// if (book.toLowerCase() === subject.toLowerCase()) {
//     console.log("The book subject matches the subject.");
// }
// else {
//     console.log("The book subject does not match the subject.");
// }

const book = "    chemistry";
const subject = "   chemistry   ";

if (book.trim().toLowerCase() === subject.trim().toLowerCase()) {
    console.log("The book subject matches the subject.");
}
else {
    console.log("The book subject does not match the subject.");
}