// what is Var, Let and Const in JavaScript ES6?
// `const` is a signal that the identifier won't be reassigned. `let` is a signal that the variable may be reassigned, such as a counter in a loop, or a value swap in an algorithm. It also signals that the variable will be used only in the block it's defined in, which is not always the entire containing function.

// JavaScript Var, Let and Const
// Practice begins

// var is used for redeclaration
// var name = "Hello";
// var name = "Hello World";
// console.log(name);

// let is used for reassignment
// let name = "Hello";
// name = "Hello World";
// console.log(name);

// const is used once when redeclaration, reassignment will not be done
// const name = "Hello World";
// console.log(name);

// JavaScript Var, Let and Const
// Practice is over

// what is Default Function Parameters in JavaScript ES6?
// In JavaScript, function parameters default to undefined .

// JavaScript Default Function Parameters
// Practice begins

// function say(message) {
//     console.log(message);
// }
// say("Hello World")

// function say(message = "Hello World") {
//     console.log(message);
// }
// say()

// function say(message = "Hello World") {
//     console.log(message);
// }
// say("Hello Earth")

// JavaScript Default Function Parameters
// Practice is over

// what is Rest Parameters in JavaScript ES6?
// The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript.

// JavaScript Rest Parameters
// Practice begins

// function restParameters(...Name) {
// console.log(Name);
// }
// restParameters("Hello World", "Hello Earth", "Hello Universe", "Hello Globe");

// function restParameters(a,b, ...Name) {
// console.log(a,b, Name);
// }
// restParameters(1,2,3,4,5,6,);

// JavaScript Rest Parameters
// Practice is over

// what is Spread Operator in JavaScript ES6?
// The JavaScript spread operator ( ... ) allows us to quickly copy all or part of an existing array or object into another array or object.

// JavaScript Spread Operator
// Start practice

// const array1 = [1, 2, 3, 4, 5, 6];
// const array2 = [array1, 7, 8, 9];
// console.log(array2);

// const array1 = [1, 2, 3, 4, 5, 6];
// const array2 = [...array1, 7, 8, 9];
// console.log(array2);

// JavaScript Spread Operator
// end of practice

// what is Objects Literal  in JavaScript ES6?
// Object property initializer shorthand
// Prior to ES6, an object literal is a collection of name-value pairs. For example: function createMachine(name, status) { return { name: name, status: status }; } Code language: JavaScript (javascript)

// JavaScript Objects Literal
// Start practice

// function say(message,name) {
//     return {
//         message,
//         name
//     }
// }
// console.log(say("Hello World", "Hello Earth"));

// JavaScript Objects Literal
// end of practice

// what is For of vs For in Loop in JavaScript ES6?
// Object property initializer shorthand
// Prior to ES6, an object literal is a collection of name-value pairs. For example: function createMachine(name, status) { return { name: name, status: status }; } Code language: JavaScript (javascript)

// Javascript For of vs For in Loop
// Start practice

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// const array = [1, 2, 3, 4, 5]

// for (newarray of array){
// console.log(newarray);
// }

// const array = [6, 7, 8, 9, 10]

// for (newarray in array){
// console.log(newarray);
// }

// const Obj = {
//     name: "MD",
//     country: "Bangladesh",
//     Profession: "Programmer"
// }

// for (thatObj in Obj){
// console.log(thatObj);
// }

// Javascript For of vs For in Loop
// end of practice

// what is Template String in JavaScript ES6?
// Template literals are a new feature introduced in ECMAScript 2015/ ES6. It provides an easy way to create multiline strings and perform string interpolation. Template literals are the string literals and allow embedded expressions. Before ES6, template literals were called as template strings.

// JavaScript Template String
// Start practice

// const templatestring = `Hello World "Hello Earth" "Hello Universe"`;
// console.log(templatestring);

// const name = `MD`;
// const country = "Bangladesh";

// console.log("My Name Is " + name + " I From " + country);

// const name = `MD`;
// const country = "Bangladesh";

// console.log(`My Name Is ${name} I am From ${country}`);

// JavaScript Template String
// end of practice

// what is Array Destructuring in JavaScript ES6?
// Destructuring means to break down a complex structure into simpler parts. With the syntax of destructuring, you can extract smaller fragments from objects and arrays. It can be used for assignments and declaration of a variable.

// JavaScript Array Destructuring
// Start practice

// const Array = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
// let [a, b, c, d] = Array;
// console.log(a);

// const Array = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
// let [a, b, c, d, ...z] = Array;
// console.log(a,b,c,d,z);

// JavaScript Array Destructuring
// end of practice

// what is Objects Destructuring in JavaScript ES6?
// Destructuring is a JavaScript expression that allows us to extract data from arrays, objects, and maps and set them into new, distinct variables. Destructuring allows us to extract multiple properties, or items, from an array​ at a time.

// Destructuring JavaScript Objects
// Start practice

// const Obj = {
//     name: "MD",
//     country: "Bangladesh",
//     ID: 1,
// }
// console.log(Obj.name);
// console.log(Obj.country);
// console.log(Obj.ID);

// const Obj = {
//     name: "MD",
//     country: "Bangladesh",
//     ID: 1,
// }
// const { name, country, ID } = Obj;
// console.log(name);

// Destructuring JavaScript Objects
// end of practice

// what is ES6 Modules in JavaScript ES6?
// ES6 comes to your rescue with the concept of Modules. A module organizes a related set of JavaScript code. A module can contain variables and functions. A module is nothing more than a chunk of JavaScript code written in a file. By default, variables and functions of a module are not available for use.

// what is Class Constructor in JavaScript ES6?
// A constructor is a function that is called each time an object is created (also referred to as instantiated). The User constructor creates the properties of the object (this.name, this. age, this. email) and assigns them the value of the parameters passed to it (name, age, email).

// JavaScript Class Constructor
// Start practice

// class Book {
//     constructor(BookName, Price) {
//         this.BookName = BookName;
//         this.Price = Price;
//     }
// }

// let BookDetails = new Book("The Pragmatic Programmer", "300 tk");
// console.log(BookDetails);

// JavaScript Class Constructor
// end of practice

// what is Class Expression in JavaScript ES6?
// The class expression is one way to define a class in ECMAScript 2015 (ES6). Similar to function expressions, class expressions can be named or unnamed. If named, the name of the class is local the class body only. JavaScript classes are using prototype-based inheritance.

// what is Static Methods  in JavaScript ES6?
// Static class methods in JavaScript are commonly used for defining the utility functions. Static class methods were embedded in the “ES6” as a JavaScript class-specific method for object-oriented programming (OOP). You can utilize the “static” keyword with the name of the method to create a static class method.

// JavaScript Statics Methods
// Start practice

// class Book {
//      Fun() {
//          console.log("Hello World");
//     }
// }
// let newObj = new Book()
// newObj.Fun()

// class Book {
//     static Fun() {
//          console.log("Hello World");
//     }
// }
// Book.Fun()

// JavaScript Statics Methods
// end of practice

// what is Inheritance, Super in JavaScript ES6?
// The super keyword is used to call the constructor of its parent class to access the parent's properties and methods. Tip: To understand the "inheritance" concept (parent and child classes) better, read our JavaScript Classes Tutorial.

// JavaScript Inheritance, Super
// Start practice

// class parent{
//     Assets1() {
//         console.log("that my grand father assets");
//     }

//     Assets2() {
//         console.log("that my father assets");
//     }
// }
// class i extends parent {

// }
// let myAssets = new i();
// myAssets.Assets1();
// myAssets.Assets2();

// JavaScript Inheritance, Super
// end of practice

// what is Arrow Function in JavaScript ES6?
// Arrow function is one of the features introduced in the ES6 version of JavaScript. It allows you to create functions in a cleaner way compared to regular functions. For example, This function // function expression let x = function(x, y) { return x * y; }

// JavaScript Arrow Function
// Start practice

// let fun = function (x,y) {
//     return x + y
// }

// console.log(fun("a", "b"));

// let fun = (x,y) => {
//     return x + y
// }
// console.log(fun(20, 10));

// let fun = x => x + 10;

// console.log(fun(20));

// let fun = (x, y) => x + y;
// console.log(fun(50,30));

// JavaScript Arrow Function
// end of practice

// what is JavaScript Symbols in JavaScript ES6?
// Symbols are new primitive type introduced in ES6. Symbols are completely unique identifiers. Just like their primitive counterparts (Number, String, Boolean), they can be created using the factory function Symbol() which returns a Symbol. Every time you call the factory function, a new and unique symbol is created.

// JavaScript JavaScript Symbols
// Start practice

// let Sym = Symbol("MD");
// let Sym1 = Symbol("MD");
// console.log(Sym===Sym1);

// JavaScript JavaScript Symbols
// end of practice

// what is Iterators in JavaScript ES6?
// In JavaScript an iterator is an object which defines a sequence and potentially a return value upon its termination. Specifically, an iterator is any object which implements the Iterator protocol by having a next() method that returns an object with two properties: value.

// JavaScript Iterators
// Start practice

// let array = [1, 2, 3, 4, 5, 6];
// for (let i = 0; i < array.length; i++){
// console.log(array[i]);
// }

// let array = ["a", "b", "c", "d"];
// for (let i = 0; i < array.length; i++){
// console.log(array[i]);
// }

// let array = [1, 2, 3 , 4, 5, 6];

// for (Element of array){
// console.log(Element);
// }

// let array = ["a", "b", "c", "d"];

// for (Element of array){
// console.log(Element);
// }

// JavaScript Iterators
// end of practice

// what is Strict Mode in JavaScript ES6?
// Strict mode eliminates some JavaScript silent errors by changing them to throw errors. Strict mode fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that's not strict mode.

// JavaScript Strict Mode
// Start practice

// "use strice"
// name = 3;

// JavaScript Strict Mode
// end of practice

// what is ForEach in JavaScript ES6?
// ES6 introduced the Array. forEach() method for looping through arrays. You call this method on your array, and pass in a callback function to run on each iteration of the loop. The callback accepts two arguments. The first is the value of the current item in the loop, and the second is the index of that item.

// Javascript ForEach
// Start practice

// let number = [2, 5, 10, 20, 30]
// for (i = 0; i < number.length; i++){
//     console.log(number[i]);
// }

// let number = [2, 5, 10, 20, 30];

// for (forOf of number){
// console.log(forOf);
// }

// let number = [2, 5, 10, 20, 30];

// for (number1 of number){
// console.log(number1);
// }

// let number = [1, 2, 3, 4, 5, 6]
// number.forEach((x) => console.log(x))

// Javascript ForEach
// end of practice

// what is Map & Filter in JavaScript ES6?
// Map, reduce, and filter are all array methods in JavaScript. Each one will iterate over an array and perform a transformation or computation. Each will return a new array based on the result of the function. In this article, you will learn why and how to use each one.

// Javascript Map & Filter
// Start practice

// let number = [2, 4, 6, 10, 20, 30];
// let number1 = [];

// number.forEach(myFunction)

// function myFunction(x) {
//     number1.push(x)
// }
// console.log(number1);

// let number = [2, 4, 6, 10, 20, 30];
// let number1 = [];

// number.forEach(myFunction)

// function myFunction(x) {
//     number1.push(x * 3)
// }
// console.log(number1);

// let number = [2, 4, 6, 10, 20, 30];
// let number1 = number.map(myfun)

// function myfun (x) {
//     return x;
// }
// console.log(number1);

// let number = [2, 4, 6, 10, 20, 30];
// let number1 = number.map(myfun)

// function myfun (x) {
//     return x * 3;
// }
// console.log(number1);

// let number = [2, 4, 6, 10, 20, 30];
// let number2 = number.filter(myfun);
// function myfun(x) {
//     return x > 4
// }
// console.log(number2);

// let number = [2, 4, 6, 10, 20, 30];
// let number2 = number.filter(myfun);
// function myfun(x) {
//     return x < 4
// }
// console.log(number2);

// let number = [2, 4, 6, 10, 20, 30];
// let number2 = number.filter(myfun);
// function myfun(x) {
//     return x > 4
// }
// console.log(number2);

// Javascript Map & Filter
// end of practice

// what is Asynchronous Vs Synchronous in JavaScript ES6?
// In synchronous operations tasks are performed one at a time and only when one is completed, the following is unblocked. In other words, you need to wait for a task to finish to move to the next one. In asynchronous operations, on the other hand, you can move to another task before the previous one finishes.

// JavaScript Asynchronous Vs Synchronous
// Start practice

// let function1 = () => {
//     console.log("function1");
// }

// let LoadingTime = () => {
//     console.log("function2");
// }

// let function2 = () => {
//     setTimeout(LoadingTime, 2000)
// }

// let function3 = () => {
//     console.log("function3");
// }
// function1()
// function2()
// function3()

// JavaScript Asynchronous Vs Synchronous
// end of practice

// what is CallBack and Higher Order Fun in JavaScript ES6?
// In JavaScript, a callback function is a function that is passed into another function as an argument. This function can then be invoked during the execution of that higher order function (that it is an argument of). Since, in JavaScript, functions are objects, functions can be passed as arguments.

// JavaScript CallBack & Higher Order Fun
// Start practice

// let Display = (Something) => {
//     console.log(Something);
// }

// let higherOrderFunction = (Name, Class, CallBackFunction) => {
//     const Details = `My name is ${Name} and I'm Complete my study ${Class}`;
//     CallBackFunction(Details)
// }
// higherOrderFunction("Md", "Doctor of Philosophy", Display)

// JavaScript CallBack & Higher Order Fun
// end of practice

// JavaScript Error Handling
// Start practice

// JavaScript Error Handling
// end of practice
