// // Remove falsy values from array
// let miscellaneous = ["🍎", false, "🥭", NaN, 0, undefined, "🍅", null, "🥝", "🥥", "🍏"];

// // passing Boolean to array.filter() will remove falsy values from array
// let fruits = miscellaneous.filter(Boolean);

// console.log(fruits);// 🍎🥭🍅🥝🥥🍏


// Convert any value to boolean
// console.log(!!"MD");//true
// console.log(!!"");//false
// console.log(!!1);//true
// console.log(!!0);//false
// console.log(!!undefined);//false


// We can also use Boolean() to achieve same
// console.log(Boolean("Md"));//true


// Resizing any array
// let animals = ["🙈", "🐕", "🦊", "🐖"];
// animals.length = 3;
// console.log(animals);//["🙈", "🐕", "🦊"]


// Flatten multi-dimensional array

// How to flattern a multi-dimensional array
// let smileys = ["😊", ["😃", "😄"], "😊", ["😁", "😆"]];

// We can use array.flat() method to flattern one level array
// console.log(smileys.flat()); // ['😊', '😃', '😄', '😊', '😁', '😆']

// Multi level array
// let smileys2 = ["😊", ["😃", "😄", ["😊", "😁"]], "😆"];

// We can pass 'Infinity' parameter to array.flat function
// console.log(smileys2.flat(Infinity)); // ['😊', '😃', '😄', '😊', '😁', '😆']


// Short conditionals
// const name = "MD";

// Instead of doing this
// if(name === "MD") {
//     console.log("❤️");
// }

// We can use &&
// name === "MD" && console.log("❤️");

// And instead of doing this
// if(name !== "MD") {
//     console.log("😡");
// }

// We can use ||
// name === "MD" || console.log("😡");


// Replace all occurances of a string
// const name = "MD";

// Replace all occurances of 'framework' with 'library'
// console.log(name.replace(/MD/g, "MD MD"));//MD MD



// Log values with variable names smartly
// const name1 = "MD";
// const name2 = "MD MD";

// Instead of doing this
// console.log(`name1 - ${name1}`); // MD
// console.log(`name2 - ${name2}`); // MD MD

// We can do this
// console.log({ name1 }); // MD
// console.log({ name2 }); // MD MD


// Know performance of a task
// We can wrap our task with performance.now()

// const startTime = performance.now();

// for(let i = 0; i <= 100; i++) {
//     console.log(i);
// }

// const endTime = performance.now();

// console.log(`loop took ${endTime - startTime} milliseconds to finish`);



// 1. Swaping values
// let array = [1, 2, 3, 4, 5];

// temp variable
// let temp = array[0];
// array[0] = array[4];
// array[4] = temp;

// console.log(array);


// array destructuring
// let array = [1, 2, 3, 4, 5];
// [array[0], array[4]] = [array[4], array[0]];
// console.log(array);


// let a = 1;
// let b = 2;
// [a, b] = [b, a];
// console.log(a, b);


// math
// let a = 1;
// let b = 2;
// b = a + (a = b) - b;
// console.log(a, b);



// 3. destructuring aliases

// const language = {
//   name: "JavaScript",
//   founded: 1995,
//   founder: "Brendan Eich",
// };

// const { name: languageName, founder: createrName } = language;

// console.log(languageName, createrName);