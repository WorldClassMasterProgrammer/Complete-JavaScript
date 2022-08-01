// JavaScript ES6 এ Var, Let এবং Const কি?
// `const` একটি সংকেত যে শনাক্তকারীকে পুনরায় বরাদ্দ করা হবে না। `লেট` হল একটি সংকেত যে ভেরিয়েবলটিকে পুনরায় বরাদ্দ করা হতে পারে, যেমন লুপে একটি কাউন্টার, বা অ্যালগরিদমে একটি মান অদলবদল। এটি এও সংকেত দেয় যে ভেরিয়েবলটি শুধুমাত্র যে ব্লকে এটি সংজ্ঞায়িত করা হয়েছে সেখানে ব্যবহার করা হবে, যা সর্বদা সম্পূর্ণ ধারণকারী ফাংশন নয়।

// জাভাস্ক্রিপ্ট Var, Let and Const
// অনুশীলন শুরু

// var পুনঃঘোষণার জন্য ব্যবহার করা হয়
// var name = "Hello";
// var name = "Hello World";
// console.log(name);

// let ব্যবহার করা হয় পুনরায় নিয়োগের জন্য
// let name = "Hello";
// name = "Hello World";
// console.log(name);

// const একবার ব্যবহার করা হয় যখন redeclaration, reassignment করা হবে না
// const name = "Hello World";
// console.log(name);

// let name = "Hello World";
// name = "Hello World";
// console.log(name);

// function sum() {
//     let number1 = 20;
//     let number2 = 10;
//     const total = number1 + number2;
//     return total;
// }

// console.log(sum());

// for (var i = 0; i < 5; i++) {
//     console.log("Inside Loop" + i);

// }
// console.log("Outside Loop" + i);

// for (var i = 0; i <= 5; i++) {
//     console.log("Inside Loop" + i);

// }
// console.log("Outside Loop" + i);

// const Obj = { name: "MD" };
// Obj.name = "MD MD";
// console.log(Obj.name);

// const Obj = { name: "MD" };
// Obj.name = "MD MD";
// console.log(Obj.name);

// const Obj = { name: "MD", country: "Bangladesh" };
// Obj.country = "Bangladesh(BD)";
// console.log(Obj.country);

// জাভাস্ক্রিপ্ট Var, Let and Const
// অনুশীলন শেষ

// জাভাস্ক্রিপ্ট ES6 এ ডিফল্ট ফাংশন প্যারামিটার কি?
// জাভাস্ক্রিপ্টে, ফাংশন প্যারামিটার ডিফল্ট অনির্ধারিত।

// জাভাস্ক্রিপ্ট Default Function Parameters
// অনুশীলন শুরু

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

// জাভাস্ক্রিপ্ট Default Function Parameters
// অনুশীলন শেষ

// জাভাস্ক্রিপ্ট ES6 এ রেস্ট প্যারামিটার কি?
// বাকি প্যারামিটার সিনট্যাক্স একটি ফাংশনকে একটি অ্যারে হিসাবে একটি অনির্দিষ্ট সংখ্যক আর্গুমেন্ট গ্রহণ করার অনুমতি দেয়, যা জাভাস্ক্রিপ্টে বৈচিত্র্যময় ফাংশনগুলিকে উপস্থাপন করার একটি উপায় প্রদান করে।

// জাভাস্ক্রিপ্ট Rest Parameters
// অনুশীলন শুরু

// function restParameters(...Name) {
// console.log(Name);
// }
// restParameters("Hello World", "Hello Earth", "Hello Universe", "Hello Globe");

// function restParameters(a,b, ...Name) {
// console.log(a,b, Name);
// }
// restParameters(1,2,3,4,5,6,);

// জাভাস্ক্রিপ্ট Rest Parameters
// অনুশীলন শেষ

// জাভাস্ক্রিপ্ট ES6 এ স্প্রেড অপারেটর কি?
// জাভাস্ক্রিপ্ট স্প্রেড অপারেটর (... ) আমাদেরকে একটি বিদ্যমান অ্যারে বা অবজেক্টের সমস্ত বা অংশ দ্রুত অন্য অ্যারে বা অবজেক্টে কপি করতে দেয়।

// জাভাস্ক্রিপ্ট Spread Operator
// অনুশীলন শুরু

// const array1 = [1, 2, 3, 4, 5, 6];
// const array2 = [array1, 7, 8, 9];
// console.log(array2);

// const array1 = [1, 2, 3, 4, 5, 6];
// const array2 = [...array1, 7, 8, 9];
// console.log(array2);

// জাভাস্ক্রিপ্ট Spread Operator
// অনুশীলন শেষ

// জাভাস্ক্রিপ্ট ES6 এ অবজেক্ট লিটারাল কি?
// অবজেক্ট প্রপার্টি ইনিশিয়ালাইজার শর্টহ্যান্ড
// ES6 এর আগে, একটি বস্তুর আক্ষরিক হল নাম-মান জোড়ার একটি সংগ্রহ। যেমন: ফাংশন createMachine(নাম, স্থিতি) { return { name: name, status: status }; } কোড ভাষা: জাভাস্ক্রিপ্ট (জাভাস্ক্রিপ্ট)

// জাভাস্ক্রিপ্ট Objects Literal
// অনুশীলন শুরু

// function say(message,name) {
//     return {
//         message,
//         name
//     }
// }
// console.log(say("Hello World", "Hello Earth"));

// জাভাস্ক্রিপ্ট Objects Literal
// অনুশীলন শেষ

// জাভাস্ক্রিপ্ট ES6 এ লুপে ফর বনাম কি?
// অবজেক্ট প্রপার্টি ইনিশিয়ালাইজার শর্টহ্যান্ড
// ES6 এর আগে, একটি বস্তুর আক্ষরিক হল নাম-মান জোড়ার একটি সংগ্রহ। যেমন: ফাংশন createMachine(নাম, স্থিতি) { return { name: name, status: status }; } কোড ভাষা: জাভাস্ক্রিপ্ট (জাভাস্ক্রিপ্ট)

// জাভাস্ক্রিপ্ট For of vs For in Loop
// অনুশীলন শুরু

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

// জাভাস্ক্রিপ্ট For of vs For in Loop
// অনুশীলন শেষ

// জাভাস্ক্রিপ্ট ES6 এ টেমপ্লেট স্ট্রিং কি?
// টেমপ্লেট লিটারেল হল একটি নতুন বৈশিষ্ট্য যা ECMAScript 2015/ ES6-এ চালু করা হয়েছে। এটি মাল্টিলাইন স্ট্রিং তৈরি এবং স্ট্রিং ইন্টারপোলেশন সঞ্চালনের একটি সহজ উপায় প্রদান করে। টেমপ্লেট লিটারাল হল স্ট্রিং লিটারাল এবং এমবেডেড এক্সপ্রেশনের অনুমতি দেয়। ES6 এর আগে, টেমপ্লেট লিটারেলকে টেমপ্লেট স্ট্রিং বলা হত।

// জাভাস্ক্রিপ্ট Template String
// অনুশীলন শুরু

// const templatestring = `Hello World "Hello Earth" "Hello Universe"`;
// console.log(templatestring);

// const name = `MD`;
// const country = "Bangladesh";

// console.log("My Name Is " + name + " I From " + country);

// const name = `MD`;
// const country = "Bangladesh";

// console.log(`My Name Is ${name} I am From ${country}`);

// জাভাস্ক্রিপ্ট Template String
// অনুশীলন শেষ

// জাভাস্ক্রিপ্ট ES6 এ অ্যারে ডিস্ট্রাকচারিং কি?
// ধ্বংস করা মানে একটি জটিল কাঠামোকে সরল অংশে ভেঙে ফেলা। বিনাশের সিনট্যাক্সের সাহায্যে, আপনি অবজেক্ট এবং অ্যারে থেকে ছোট টুকরা বের করতে পারেন। এটি অ্যাসাইনমেন্ট এবং একটি পরিবর্তনশীল ঘোষণার জন্য ব্যবহার করা যেতে পারে।

// জাভাস্ক্রিপ্ট Array Destructuring
// অনুশীলন শুরু

// const Array = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
// let [a, b, c, d] = Array;
// console.log(a);

// const Array = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
// let [a, b, c, d, ...z] = Array;
// console.log(a,b,c,d,z);

// জাভাস্ক্রিপ্ট Array Destructuring
// অনুশীলন শেষ

// জাভাস্ক্রিপ্ট ES6 এ অবজেক্ট ডিস্ট্রাকচারিং কি?
// Destructuring হল একটি জাভাস্ক্রিপ্ট এক্সপ্রেশন যা আমাদেরকে অ্যারে, অবজেক্ট এবং ম্যাপ থেকে ডেটা বের করে নতুন, স্বতন্ত্র ভেরিয়েবলে সেট করতে দেয়। Destructuring আমাদেরকে একটি অ্যারে থেকে একাধিক বৈশিষ্ট্য বা আইটেম বের করতে দেয়।

// জাভাস্ক্রিপ্ট Objects Destructuring
// অনুশীলন শুরু

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

// জাভাস্ক্রিপ্ট Objects Destructuring
// অনুশীলন শেষ

// জাভাস্ক্রিপ্ট ES6 এ ES6 মডিউল কি?
// ES6 মডিউলের ধারণার সাথে আপনার উদ্ধারে আসে। একটি মডিউল জাভাস্ক্রিপ্ট কোডের একটি সম্পর্কিত সেট সংগঠিত করে। একটি মডিউলে ভেরিয়েবল এবং ফাংশন থাকতে পারে। একটি মডিউল একটি ফাইলে লেখা জাভাস্ক্রিপ্ট কোডের একটি অংশ ছাড়া আর কিছুই নয়। ডিফল্টরূপে, একটি মডিউলের ভেরিয়েবল এবং ফাংশন ব্যবহারের জন্য উপলব্ধ নয়।

// জাভাস্ক্রিপ্ট ES6 এ ক্লাস কনস্ট্রাক্টর কি?
// কনস্ট্রাক্টর হল এমন একটি ফাংশন যা প্রতিবার একটি বস্তু তৈরি করার সময় বলা হয় (তাত্ক্ষণিক হিসাবেও উল্লেখ করা হয়)। ব্যবহারকারী কনস্ট্রাক্টর বস্তুর বৈশিষ্ট্য তৈরি করে (এই নাম, এই বয়স, এই। ইমেল) এবং তাদের কাছে পাস করা প্যারামিটারের মান নির্ধারণ করে (নাম, বয়স, ইমেল)।

// জাভাস্ক্রিপ্ট Class Constructor
// অনুশীলন শুরু

// class Book {
//     constructor(BookName, Price) {
//         this.BookName = BookName;
//         this.Price = Price;
//     }
// }

// let BookDetails = new Book("The Pragmatic Programmer", "300 tk");
// console.log(BookDetails);

// জাভাস্ক্রিপ্ট Class Constructor
// অনুশীলন শেষ

// জাভাস্ক্রিপ্ট ES6 এ ক্লাস এক্সপ্রেশন কি?
// ECMAScript 2015 (ES6) এ ক্লাস সংজ্ঞায়িত করার একটি উপায় হল ক্লাস এক্সপ্রেশন। ফাংশন এক্সপ্রেশনের অনুরূপ, ক্লাস এক্সপ্রেশন নাম বা নামহীন হতে পারে। নাম দেওয়া হলে, ক্লাসের নাম শুধুমাত্র ক্লাস বডি স্থানীয়। জাভাস্ক্রিপ্ট ক্লাস প্রোটোটাইপ-ভিত্তিক উত্তরাধিকার ব্যবহার করছে।

// জাভাস্ক্রিপ্ট Class Constructor
// অনুশীলন শুরু

// let person = class {
//     constructor(name,country,profession) {
//         this.name = name;
//         this.country = country;
//         this.profession = profession;
//     }
// }

// let newPerson = new person("MD", "Bangladesh", "Programmer");
// console.log(newPerson);

// let person = class {
//     constructor(name,country,profession) {
//         this.name = name;
//         this.country = country;
//         this.profession = profession;
//     }
// }

// let newPerson = new person("MD", "Bangladesh", "Programmer");
// console.log(newPerson.country);

// জাভাস্ক্রিপ্ট Class Constructor
// অনুশীলন শেষ

// জাভাস্ক্রিপ্ট ES6 এ স্ট্যাটিক পদ্ধতি কি?
// জাভাস্ক্রিপ্টে স্ট্যাটিক ক্লাস পদ্ধতি সাধারণত ইউটিলিটি ফাংশন সংজ্ঞায়িত করার জন্য ব্যবহৃত হয়। অবজেক্ট-ওরিয়েন্টেড প্রোগ্রামিং (OOP) এর জন্য জাভাস্ক্রিপ্ট ক্লাস-নির্দিষ্ট পদ্ধতি হিসাবে স্ট্যাটিক ক্লাস পদ্ধতিগুলি "ES6" এ এমবেড করা হয়েছিল। আপনি একটি স্ট্যাটিক ক্লাস পদ্ধতি তৈরি করতে পদ্ধতির নামের সাথে "স্থির" কীওয়ার্ড ব্যবহার করতে পারেন।

// জাভাস্ক্রিপ্ট Statics Methods
// অনুশীলন শুরু

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

// জাভাস্ক্রিপ্ট Statics Methods
// অনুশীলন শেষ

// সুপার কীওয়ার্ডটি পিতামাতার বৈশিষ্ট্য এবং পদ্ধতিগুলি অ্যাক্সেস করার জন্য তার পিতামাতার শ্রেণির কনস্ট্রাক্টরকে কল করতে ব্যবহৃত হয়। টিপ: "উত্তরাধিকার" ধারণা (পিতামাতা এবং শিশু ক্লাস) আরও ভালভাবে বুঝতে, আমাদের জাভাস্ক্রিপ্ট ক্লাস টিউটোরিয়াল পড়ুন।
// জাভাস্ক্রিপ্ট ES6-এ ইনহেরিটেন্স, সুপার কি?

// জাভাস্ক্রিপ্ট Inheritance, Super
// অনুশীলন শুরু

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

// জাভাস্ক্রিপ্ট Inheritance, Super
// অনুশীলন শেষ

// জাভাস্ক্রিপ্ট ES6 এ অ্যারো ফাংশন কি?
// তীর ফাংশন জাভাস্ক্রিপ্টের ES6 সংস্করণে প্রবর্তিত বৈশিষ্ট্যগুলির মধ্যে একটি। এটি আপনাকে নিয়মিত ফাংশনের তুলনায় একটি পরিষ্কার উপায়ে ফাংশন তৈরি করতে দেয়। উদাহরণস্বরূপ, এই ফাংশন // ফাংশন এক্সপ্রেশন let x = function(x, y) { রিটার্ন x * y; }

// জাভাস্ক্রিপ্ট Arrow Function
// অনুশীলন শুরু

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

// জাভাস্ক্রিপ্ট Arrow Function
// অনুশীলন শেষ

// জাভাস্ক্রিপ্ট ES6 এ জাভাস্ক্রিপ্ট চিহ্ন কি?
// চিহ্ন হল নতুন আদিম প্রকার যা ES6 এ চালু করা হয়েছে। প্রতীক সম্পূর্ণরূপে অনন্য শনাক্তকারী. ঠিক তাদের আদিম প্রতিরূপের মতো (সংখ্যা, স্ট্রিং, বুলিয়ান), তারা ফ্যাক্টরি ফাংশন Symbol() ব্যবহার করে তৈরি করা যেতে পারে যা একটি প্রতীক প্রদান করে। আপনি যখনই ফ্যাক্টরি ফাংশন কল করেন, একটি নতুন এবং অনন্য প্রতীক তৈরি হয়।

// জাভাস্ক্রিপ্ট JavaScript Symbols
// অনুশীলন শুরু

// let Sym = Symbol("MD");
// let Sym1 = Symbol("MD");
// console.log(Sym===Sym1);

// জাভাস্ক্রিপ্ট JavaScript Symbols
// অনুশীলন শেষ

// জাভাস্ক্রিপ্ট ES6 এ Iterators কি?
// জাভাস্ক্রিপ্টে একটি পুনরাবৃত্তিকারী এমন একটি বস্তু যা একটি ক্রম সংজ্ঞায়িত করে এবং এটির সমাপ্তির পরে সম্ভাব্য একটি রিটার্ন মান। বিশেষ করে, একটি ইটারেটর হল এমন যেকোন অবজেক্ট যা একটি নেক্সট() পদ্ধতি ব্যবহার করে ইটারেটর প্রোটোকল প্রয়োগ করে যা দুটি বৈশিষ্ট্য সহ একটি অবজেক্ট রিটার্ন করে: মান।

// জাভাস্ক্রিপ্ট Iterators
// অনুশীলন শুরু

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

// জাভাস্ক্রিপ্ট Iterators
// অনুশীলন শেষ

// জাভাস্ক্রিপ্ট ES6 এ কঠোর মোড কি?
// কঠোর মোড কিছু জাভাস্ক্রিপ্ট নীরব ত্রুটিগুলিকে ত্রুটি নিক্ষেপ করার জন্য পরিবর্তন করে দূর করে। স্ট্রিক্ট মোড এমন ভুলগুলি ঠিক করে যা জাভাস্ক্রিপ্ট ইঞ্জিনগুলির পক্ষে অপ্টিমাইজেশানগুলি সম্পাদন করা কঠিন করে তোলে: কঠোর মোড কোড কখনও কখনও অভিন্ন কোডের চেয়ে দ্রুত চালানোর জন্য তৈরি করা যেতে পারে যা কঠোর মোড নয়৷

// জাভাস্ক্রিপ্ট Strict Mode
// অনুশীলন শুরু

// "use strice"
// name = 3;

// জাভাস্ক্রিপ্ট Strict Mode
// অনুশীলন শেষ

// জাভাস্ক্রিপ্ট ES6 এ ForEach কি?
// ES6 অ্যারে চালু করেছে। forEach() পদ্ধতি অ্যারের মাধ্যমে লুপ করার জন্য। আপনি আপনার অ্যারেতে এই পদ্ধতিটি কল করুন এবং লুপের প্রতিটি পুনরাবৃত্তিতে চালানোর জন্য একটি কলব্যাক ফাংশনে পাস করুন। কলব্যাক দুটি আর্গুমেন্ট গ্রহণ করে। প্রথমটি লুপে বর্তমান আইটেমের মান এবং দ্বিতীয়টি সেই আইটেমের সূচক।

// জাভাস্ক্রিপ্ট ForEach
// অনুশীলন শুরু

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

// জাভাস্ক্রিপ্ট ForEach
// অনুশীলন শেষ

// জাভাস্ক্রিপ্ট ES6 এ ম্যাপ এবং ফিল্টার কি?
// মানচিত্র, হ্রাস এবং ফিল্টার জাভাস্ক্রিপ্টের সমস্ত অ্যারে পদ্ধতি। প্রত্যেকে একটি অ্যারের উপর পুনরাবৃত্তি করবে এবং একটি রূপান্তর বা গণনা করবে। প্রতিটি ফাংশনের ফলাফলের উপর ভিত্তি করে একটি নতুন অ্যারে প্রদান করবে। এই নিবন্ধে, আপনি শিখবেন কেন এবং কীভাবে প্রতিটি ব্যবহার করবেন।

// জাভাস্ক্রিপ্ট Map & Filter
// অনুশীলন শুরু

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

// জাভাস্ক্রিপ্ট Map & Filter
// অনুশীলন শেষ

// জাভাস্ক্রিপ্ট ES6 এ অ্যাসিঙ্ক্রোনাস বনাম সিঙ্ক্রোনাস কি?
// সিঙ্ক্রোনাস অপারেশনগুলিতে কাজগুলি একবারে একটি করে করা হয় এবং শুধুমাত্র যখন একটি সম্পূর্ণ হয়, নিম্নলিখিতটি আনব্লক করা হয়। অন্য কথায়, পরবর্তীতে যাওয়ার জন্য আপনাকে একটি কাজ শেষ হওয়ার জন্য অপেক্ষা করতে হবে। অ্যাসিঙ্ক্রোনাস অপারেশনে, অন্যদিকে, আপনি আগেরটি শেষ হওয়ার আগে অন্য টাস্কে যেতে পারেন।

// জাভাস্ক্রিপ্ট Asynchronous Vs Synchronous
// অনুশীলন শুরু

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

// জাভাস্ক্রিপ্ট Asynchronous Vs Synchronous
// অনুশীলন শেষ

// জাভাস্ক্রিপ্ট ES6 এ কলব্যাক এবং হায়ার অর্ডার ফান কি?
// জাভাস্ক্রিপ্টে, একটি কলব্যাক ফাংশন এমন একটি ফাংশন যা একটি আর্গুমেন্ট হিসাবে অন্য ফাংশনে পাস করা হয়। এই ফাংশনটি সেই উচ্চ ক্রম ফাংশনটি কার্যকর করার সময় আহ্বান করা যেতে পারে (যে এটি একটি যুক্তি)। যেহেতু, জাভাস্ক্রিপ্টে, ফাংশনগুলি হল অবজেক্ট, ফাংশনগুলি আর্গুমেন্ট হিসাবে পাস করা যেতে পারে।

// জাভাস্ক্রিপ্ট CallBack & Higher Order Fun
// অনুশীলন শুরু

// let Display = (Something) => {
//     console.log(Something);
// }

// let higherOrderFunction = (Name, Class, CallBackFunction) => {
//     const Details = `My name is ${Name} and I'm Complete my study ${Class}`;
//     CallBackFunction(Details)
// }
// higherOrderFunction("Md", "Doctor of Philosophy", Display)

// জাভাস্ক্রিপ্ট CallBack & Higher Order Fun
// অনুশীলন শেষ

// জাভাস্ক্রিপ্ট ES6 এ ত্রুটি হ্যান্ডলিং কি?
// ত্রুটি পরিচালনা জাভাস্ক্রিপ্টে রানটাইম ত্রুটিগুলি পরিচালনা করে। try হল কীওয়ার্ড চেষ্টা ব্লক তৈরি করে। এখানে যে কোডটি ব্যতিক্রম ঘটাতে পারে তা এই ব্লকের নিচে মোড়ানো। ক্যাচ হল কীওয়ার্ড ক্যাচ ব্লক তৈরি করে।
