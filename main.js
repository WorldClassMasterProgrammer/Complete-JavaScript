// জাভাস্ক্রিপ্ট কি?
//     জাভাস্ক্রিপ্ট(প্রায়শই JS - এ সংক্ষিপ্ত করা হয়) হল একটি হালকা ওজনের, ব্যাখ্যা করা, প্রথম শ্রেণীর ফাংশন সহ অবজেক্ট - ভিত্তিক ভাষা, এবং এটি ওয়েব পৃষ্ঠাগুলির জন্য স্ক্রিপ্টিং ভাষা হিসাবে সর্বাধিক পরিচিত, তবে এটি অনেক অ - ব্রাউজার পরিবেশেও ব্যবহৃত হয়।

// জাভাস্ক্রিপ্ট প্রথম প্রোগ্রাম

// console.log("Hello World");

// জাভাস্ক্রিপ্ট ভেরিয়েবল কি?
// একটি জাভাস্ক্রিপ্ট ভেরিয়েবল কেবল স্টোরেজ অবস্থানের একটি নাম। জাভাস্ক্রিপ্টে দুই ধরনের ভেরিয়েবল আছে: লোকাল ভেরিয়েবল এবং গ্লোবাল ভেরিয়েবল। জাভাস্ক্রিপ্ট ভেরিয়েবল ঘোষণা করার সময় কিছু নিয়ম রয়েছে (এটি সনাক্তকারী হিসাবেও পরিচিত)। নাম অবশ্যই একটি অক্ষর (a থেকে z বা A থেকে Z), আন্ডারস্কোর( _ ), বা ডলার($) চিহ্ন দিয়ে শুরু করতে হবে।

// জাভাস্ক্রিপ্ট ভেরিয়েবল অনুশীলন করা শুরু

// var alphabetList =
//   "A,   B ,  C,   D,   E,   F,   G,   H,   I,   J,   K,   L,   M,   N,   O,   P,   Q,   R,   S,   T,   U,   V,   W,   X,   Y,   Z";
// console.log(alphabetList);

// var number = 123;

// console.log(number);

// জাভাস্ক্রিপ্ট ভেরিয়েবল অনুশীলন শেষ

// জাভাস্ক্রিপ্টে স্ট্রিং টাইপ ভেরিয়েবল কি?
// জাভাস্ক্রিপ্টের স্ট্রিং টাইপ পাঠ্য তথ্য উপস্থাপন করতে ব্যবহৃত হয়। এটি 16-বিট স্বাক্ষরবিহীন পূর্ণসংখ্যা মানের "উপাদান" এর একটি সেট। স্ট্রিং-এর প্রতিটি উপাদান স্ট্রিং-এ একটি অবস্থান দখল করে। প্রথম উপাদানটি সূচক 0 এ, পরেরটি সূচক 1 এ এবং আরও অনেক কিছু।

// স্ট্রিং টাইপ ভেরিয়েবল ' '," ", `` এর ভিতরে টেক্সট থাকবে

// জাভাস্ক্রিপ্ট স্ট্রিং টাইপ ভেরিয়েবল অনুশীলন শুরু

// var stringTypeVariable = "Apple Orange Banana";
// console.log(stringTypeVariable);

// var stringTypeVariable = "Apple Orange Banana";
// console.log(stringTypeVariable);

// var stringTypeVariable = `Apple Orange Banana`;
// console.log(stringTypeVariable);

// var stringTypeVariable = `Apple Orange Banana`;
// console.log(typeof stringTypeVariable);

// জাভাস্ক্রিপ্ট স্ট্রিং টাইপ ভেরিয়েবল অনুশীলন শেষ

// জাভাস্ক্রিপ্টে একটি সংখ্যা পরিবর্তনশীল কি?
// JavaScript ভেরিয়েবল 100 এর মত সংখ্যা এবং "John Doe" এর মত টেক্সট মান ধারণ করতে পারে। প্রোগ্রামিং-এ টেক্সট ভ্যালুকে টেক্সট স্ট্রিং বলা হয়। জাভাস্ক্রিপ্ট অনেক ধরনের ডেটা পরিচালনা করতে পারে, কিন্তু আপাতত, শুধু সংখ্যা এবং স্ট্রিং নিয়ে চিন্তা করুন। স্ট্রিংগুলি ডবল বা একক উদ্ধৃতির ভিতরে লেখা হয়। সংখ্যা উদ্ধৃতি ছাড়া লেখা হয়.

// নাম্বার টাইপ ভ্যারিয়েবল এ সরাসরি সংখ্যা লিখতে হয়

// জাভাস্ক্রিপ্ট নাম্বার  টাইপ ভেরিয়েবল অনুশীলন শুরু

// var numberTypeVariable = 123;
// console.log(numberTypeVariable);

// var numberTypeVariable = 123;
// console.log(typeof numberTypeVariable);

// জাভাস্ক্রিপ্ট নাম্বার  টাইপ ভেরিয়েবল অনুশীলন শেষ

// জাভাস্ক্রিপ্টে বুলিয়ান ভেরিয়েবল কি?
// জাভাস্ক্রিপ্টে, একটি বুলিয়ান মান হল যেটি সত্য বা মিথ্যা হতে পারে। আপনি যদি কিছু সম্পর্কে "হ্যাঁ" বা "না" জানতে চান, তাহলে আপনি বুলিয়ান ফাংশনটি ব্যবহার করতে চান। এটি অত্যন্ত সহজ শোনাচ্ছে, তবে জাভাস্ক্রিপ্ট প্রোগ্রামিংয়ে বুলিয়ানগুলি সর্বদা ব্যবহৃত হয় এবং সেগুলি অত্যন্ত দরকারী।

// জাভাস্ক্রিপ্ট বুলিয়ান  টাইপ ভেরিয়েবল অনুশীলন শুরু

// var booleanTypeVariable = true;
// console.log(booleanTypeVariable);

// var booleanTypeVariable = false;
// console.log(booleanTypeVariable);

// var booleanTypeVariable = true;
// console.log(typeof booleanTypeVariable);

// জাভাস্ক্রিপ্ট বুলিয়ান  টাইপ ভেরিয়েবল অনুশীলন শেষ

// toLowerCase এবং toUpperCase পদ্ধতির ব্যবহার কি?
// জাভা স্ট্রিং toLowerCase() পদ্ধতি

// toLowerCase() পদ্ধতি একটি স্ট্রিংকে ছোট হাতের অক্ষরে রূপান্তর করে। দ্রষ্টব্য: toUpperCase() পদ্ধতি একটি স্ট্রিংকে বড় হাতের অক্ষরে রূপান্তর করে।

// জাভাস্ক্রিপ্ট ToUpperCase() and ToLowerCase() অনুশীলন শুরু

// var text =
//     "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit aliquam voluptatibus, fugit quae esse facilis aspernatur cupiditate eum accusamus beatae. Tempore quo, modi dolor voluptates unde perferendis delectus quam porro autem exercitationem cumque ipsam ratione veniam explicabo quos enim fuga optio adipisci sit aliquam veritatis suscipit reiciendis sequi. Qui ullam, quod minus molestias suscipit, consectetur ut dolore fuga rem aliquid, debitis doloribus ipsa autem nostrum! Perferendis blanditiis voluptatibus eveniet eaque, repellendus corrupti architecto ipsum inventore repellat perspiciatis veniam nisi totam vel pariatur minus illum mollitia qui quidem! Voluptates officiis culpa labore dicta ratione. Quas delectus autem quibusdam blanditiis nisi assumenda.";
// console.log(text.toUpperCase());

// var text =
//     "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit aliquam voluptatibus, fugit quae esse facilis aspernatur cupiditate eum accusamus beatae. Tempore quo, modi dolor voluptates unde perferendis delectus quam porro autem exercitationem cumque ipsam ratione veniam explicabo quos enim fuga optio adipisci sit aliquam veritatis suscipit reiciendis sequi. Qui ullam, quod minus molestias suscipit, consectetur ut dolore fuga rem aliquid, debitis doloribus ipsa autem nostrum! Perferendis blanditiis voluptatibus eveniet eaque, repellendus corrupti architecto ipsum inventore repellat perspiciatis veniam nisi totam vel pariatur minus illum mollitia qui quidem! Voluptates officiis culpa labore dicta ratione. Quas delectus autem quibusdam blanditiis nisi assumenda.";
//   console.log(text.toLowerCase());

// জাভাস্ক্রিপ্ট ToUpperCase() এবং  ToLowerCase() অনুশীলন শেষ

// জাভাস্ক্রিপ্টে indexOf কি?
// জাভাস্ক্রিপ্ট স্ট্রিং ইনডেক্স অফ()

// indexOf() পদ্ধতিটি একটি স্ট্রিং-এ একটি মানের প্রথম উপস্থিতির অবস্থান প্রদান করে। মান পাওয়া না গেলে indexOf() পদ্ধতিটি -1 প্রদান করে। indexOf() পদ্ধতিটি কেস সংবেদনশীল।

// জাভাস্ক্রিপ্টে স্প্লিট কি?
// split() পদ্ধতি একটি স্ট্রিংকে সাবস্ট্রিং এর একটি অ্যারেতে বিভক্ত করে। split() পদ্ধতি নতুন অ্যারে প্রদান করে। split() পদ্ধতি মূল স্ট্রিং পরিবর্তন করে না। যদি ("") বিভাজক হিসাবে ব্যবহৃত হয়, স্ট্রিংটি শব্দের মধ্যে বিভক্ত হয়।

// জাভাস্ক্রিপ্ট Indexof() & Split()
//  অনুশীলন শুরু

// var foodList = "Apple, Banana, Orange";
// console.log(foodList.split("Apple"));

// var foodList = "Apple, Banana, Orange";
// console.log(foodList.indexOf("B"));

// var foodList = "Apple, Banana, Orange";
// console.log(foodList.indexOf("Orange"));

// জাভাস্ক্রিপ্ট Indexof() & Split()
//  অনুশীলন শেষ

// জাভাস্ক্রিপ্টে ParseFloat() কি?
//     parseFloat() ফাংশনটি স্ট্রিং গ্রহণ করতে এবং এটিকে একটি ফ্লোটিং - পয়েন্ট নম্বরে রূপান্তর করতে ব্যবহৃত হয়। যদি স্ট্রিংটিতে একটি সংখ্যার মান না থাকে বা যদি স্ট্রিংটির প্রথম অক্ষরটি একটি সংখ্যা না হয় তবে এটি NaN প্রদান করে অর্থাৎ একটি সংখ্যা নয়।

// জাভাস্ক্রিপ্টে ParseInt() কি?
// parseInt() ফাংশন একটি স্ট্রিং আর্গুমেন্ট পার্স করে এবং নির্দিষ্ট রেডিক্সের একটি পূর্ণসংখ্যা প্রদান করে (গাণিতিক সংখ্যা পদ্ধতিতে ভিত্তি)।

// জাভাস্ক্রিপ্ট ParseFloat() & ParseInt()
//  অনুশীলন শুরু

// var number1 = "3";
// var number2 = 3;
// number1 = parseFloat(number1);
// console.log(typeof number1);

// var number1 = "3";
// var number2 = 3;
// number1 = parseFloat(number1);
// var total = number1 + number2;
// console.log(total);

// var number1 = "3.123";
// var number2 = 3;
// number1 = parseFloat(number1);
// var total = number1 + number2;
// console.log(total);

// var number1 = "3.123";
// var number2 = 3;
// number1 = parseInt(number1);
// var total = number1 + number2;
// console.log(total);

// var number1 = "3";
// var number2 = 3;
// number1 = "" + number1;
// console.log(typeof number1);

// var number1 = "3";
// var number2 = 3;
// number1 = "" + number1;
// var total = number1 + number2;
// console.log(total);

// জাভাস্ক্রিপ্ট ParseFloat() & ParseInt()
//  অনুশীলন শেষ

// জাভাস্ক্রিপ্টে জেএস অপারেটর কি?
// জাভাস্ক্রিপ্ট অন্যান্য ভাষার মত অপারেটর অন্তর্ভুক্ত. একজন অপারেটর একক বা একাধিক অপারেন্ডে (ডেটা মান) কিছু অপারেশন করে এবং ফলাফল তৈরি করে। উদাহরণস্বরূপ, 1 + 2-এ, + চিহ্নটি একটি অপারেটর এবং 1 বাম পাশের অপারেন্ড এবং 2টি ডান পাশের অপারেন্ড।

// জাভাস্ক্রিপ্ট JS Operators
//  অনুশীলন শুরু

// var number1 = 2;
// var number2 = 1;
// var total = number1 + number2;
// console.log(total);

// var number1 = 2;
// var number2 = 1;
// console.log(number1 + number2);

// var number1 = 2;
// var number2 = 1;
// var total = number1 - number2;
// console.log(total);

// var number1 = 2;
// var number2 = 1;
// console.log(number1 - number2);

// var number1 = 2;
// var number2 = 3;
// var total = number1 * number2;
// console.log(total);

// var number1 = 2;
// var number2 = 3;
// console.log(number1 * number2);

// var number1 = 2;
// var number2 = 3;
// var total = number1 / number2;
// console.log(total);

// var number1 = 2;
// var number2 = 3;
// console.log(number1 / number2);

// var number1 = 2;
// var number2 = 3;
// var total = number1 ** number2;
// console.log(total);

// var number1 = 2;
// var number2 = 3;
// console.log(number1 ** number2);

// var number1 = 3;
// var number2 = 2;
// var total = number1 % number2;
// console.log(total);

// var number1 = 3;
// var number2 = 2;
// console.log(number1 % number2);

// জাভাস্ক্রিপ্ট JS Operators
//  অনুশীলন শেষ

// জাভাস্ক্রিপ্টে পূর্বনির্ধারিত ফাংশন কি?
// জাভাস্ক্রিপ্টের অনেকগুলি পূর্ব-নির্ধারিত ফাংশন এবং ফাংশন রয়েছে যা ব্যাপকভাবে ব্যবহৃত হয়। রূপান্তর এবং তুলনা - ডেটা রূপান্তর এবং তুলনার জন্য ব্যবহৃত ফাংশন। এস্কেপ(স্ট্রিং) - এইচটিএমএল প্রসেসিংয়ের জন্য একটি ISO ল্যাটিন-1 (ISO 8859-1) অক্ষর সেটে ASCII থেকে একটি স্ট্রিং এনকোড করে।

// জাভাস্ক্রিপ্ট Predefined Function
//  অনুশীলন শুরু

// var number1 = -30;
// var sum = Math.abs(number1);
// console.log(sum);

// গণিত round() পদ্ধতি একটি সংখ্যাকে নিকটতম পূর্ণসংখ্যাতে রাউন্ড করে। 2.49 বা 0.4 রাউন্ড ডাউন(2), এবং 2.5 বা 0.5 রাউন্ড আপ করা হবে(3)।

// var totalMember = 30;
// var yourVote = 0.5;
// var yourFriendVote = 0.4;
// var sum = Math.round(yourFriendVote);
// console.log(sum);

// var totalMember = 30;
// var yourVote = 0.5;
// var yourFriendVote = 0.4;
// var sum = Math.round(yourVote);
// console.log(sum);

// var number1 = 0.0001;
// var sum = Math.ceil(number1);
// console.log(sum);

// var number1 = 0.000;
// var sum = Math.ceil(number1);
// console.log(sum);

// var number1 = 0.0001;
// var sum = Math.floor(number1);
// console.log(sum);

// var sum = Math.random();
// console.log(sum);

// var sum = Math.random() * 300;
// console.log(sum);

// জাভাস্ক্রিপ্ট Predefined Function
//  অনুশীলন শেষ

// জাভাস্ক্রিপ্টে শর্তসাপেক্ষ বিবৃতি কি?
// শর্তসাপেক্ষ বিবৃতি জাভাস্ক্রিপ্টে আচরণ নিয়ন্ত্রণ করে এবং কোডের টুকরো চলতে পারে কিনা তা নির্ধারণ করে। জাভাস্ক্রিপ্টে বিভিন্ন ধরনের শর্তাবলী রয়েছে যার মধ্যে রয়েছে: "যদি" বিবৃতি: যেখানে একটি শর্ত সত্য হলে এটি কোডের একটি ব্লকের জন্য এক্সিকিউশন নির্দিষ্ট করতে ব্যবহৃত হয়।

// জাভাস্ক্রিপ্টে যদি স্টেটমেন্ট কি?
// সংজ্ঞা এবং ব্যবহার. যদি একটি নির্দিষ্ট শর্ত সত্য হয় তাহলে if/else স্টেটমেন্ট কোডের একটি ব্লক কার্যকর করে। শর্ত মিথ্যা হলে, কোডের অন্য ব্লক কার্যকর করা যেতে পারে। if/else স্টেটমেন্ট জাভাস্ক্রিপ্টের "শর্তাধীন" স্টেটমেন্টের একটি অংশ, যেটি বিভিন্ন শর্তের উপর ভিত্তি করে বিভিন্ন ক্রিয়া সম্পাদন করতে ব্যবহৃত হয়।

// জাভাস্ক্রিপ্ট If Statement
//  অনুশীলন শুরু

// var a = 10;
// var b = 20;
// if (a > b) {
//     console.log("Hello World");
// }

// var a = 10;
// var b = 20;
// if (a < b) {
//     console.log("Hello World");
// }

// var a = 10;
// if (a < 20) {
//     console.log("Hello World");
// }

// var a = 10;
// var b = 20;
// if (a > b) {
//     console.log("Hello World");
// }

// var a = 10;
// var b = 20;
// if (a < b) {
//     console.log("Hello Earth");
// }

// জাভাস্ক্রিপ্ট If Statement
//  অনুশীলন শেষ

// জাভাস্ক্রিপ্টে অন্য স্টেটমেন্ট কি?
// যদি একটি নির্দিষ্ট শর্ত সত্য হয় তাহলে if/else স্টেটমেন্ট কোডের একটি ব্লক কার্যকর করে। শর্ত মিথ্যা হলে, কোডের অন্য ব্লক কার্যকর করা যেতে পারে। if/else স্টেটমেন্ট জাভাস্ক্রিপ্টের "শর্তাধীন" স্টেটমেন্টের একটি অংশ, যেটি বিভিন্ন শর্তের উপর ভিত্তি করে বিভিন্ন ক্রিয়া সম্পাদন করতে ব্যবহৃত হয়।

// জাভাস্ক্রিপ্ট Else Statement
//  অনুশীলন শুরু

// var a = 10;
// var b = 1;

// if (a > b) {
//     console.log("Hello World");
// }

// if (a < b) {
//     console.log("Hello Earth");
// }

// var a = 10;
// var b = 1;

// if (a > b) {
//     console.log("Hello World");
// }

// else {
//     console.log("Hello Earth");
// }

// var a = 10;
// var b = 1;

// if (a < b) {
//     console.log("Hello World");
// }

// else {
//     console.log("Hello Earth");
// }

// জাভাস্ক্রিপ্ট Else Statement
//  অনুশীলন শেষ

// জাভাস্ক্রিপ্ট Else If Statement
//  অনুশীলন শুরু

// var x = 30;
// var y = 3;

// if (x > y) {
// console.log("x");
// }

// else if (x < y) {
// console.log("y");
// }
// else {
//     console.log("They are both the same");
// }

// var x = 3;
// var y = 30;

// if (x > y) {
// console.log("x");
// }

// else if (x < y) {
// console.log("y");
// }
// else {
//     console.log("They are both the same");
// }

// var x = 30;
// var y = 30;

// if (x > y) {
// console.log("x");
// }

// else if (x < y) {
// console.log("y");
// }
// else {
//     console.log("They are both the same");
// }

// জাভাস্ক্রিপ্ট Else If Statement
//  অনুশীলন শেষ

// জাভাস্ক্রিপ্টে সুইচ স্টেটমেন্ট কি?
// সুইচ স্টেটমেন্ট হল জাভাস্ক্রিপ্টের "কন্ডিশনাল" স্টেটমেন্টের একটি অংশ, যা বিভিন্ন অবস্থার উপর ভিত্তি করে বিভিন্ন ক্রিয়া সম্পাদন করতে ব্যবহৃত হয়। কার্যকর করার জন্য কোডের অনেক ব্লকের একটি নির্বাচন করতে সুইচ ব্যবহার করুন। এটি দীর্ঘ, নেস্টেড if/else স্টেটমেন্টের জন্য নিখুঁত সমাধান।

// বিরতি কীওয়ার্ডটি সুইচ ব্লক থেকে বেরিয়ে আসে। এটি ব্লকের অভ্যন্তরে কোড এবং / অথবা কেস টেস্টিং এর আরো এক্সিকিউশন করা বন্ধ করবে। যদি বিরতি বাদ দেওয়া হয়, সুইচ স্টেটমেন্টের পরবর্তী কোড ব্লকটি কার্যকর করা হয়। কোনো কেস ম্যাচ না থাকলে ডিফল্ট কীওয়ার্ড চালানোর জন্য কিছু কোড নির্দিষ্ট করে।

// জাভাস্ক্রিপ্ট Switch Statement
//  অনুশীলন শুরু

// var number1 = 300;
// switch (number1) {
//     case 300:
// console.log("Hello World");
//         break;
//     case 3:
//         console.log("Hello Earth");
//         break;
//     case 30:
//         console.log("Hello Universe");
//         break;
//     default:
//         console.log("Hello globe");
// }

// var number1 = 300;
// switch (number1) {
//     case 3000:
// console.log("Hello World");
//         break;
//     case 3:
//         console.log("Hello Earth");
//         break;
//     case 30:
//         console.log("Hello Universe");
//         break;
//     default:
//         console.log("Hello globe");
// }

// var number1 = 300;
// switch (number1) {
//     case 300:
// console.log("Hello World");

//     case 3:
//         console.log("Hello Earth");
//     case 30:
//         console.log("Hello Universe");
//     default:
//         console.log("Hello globe");
// }

// জাভাস্ক্রিপ্ট Switch Statement
//  অনুশীলন শেষ

// জাভাস্ক্রিপ্টে তারিখ অবজেক্ট কি?
// জাভাস্ক্রিপ্ট তারিখ অবজেক্ট একটি প্ল্যাটফর্ম-স্বাধীন বিন্যাসে সময়ের একটি একক মুহূর্ত উপস্থাপন করে। তারিখের বস্তুতে একটি সংখ্যা থাকে যা 1 জানুয়ারী 1970 UTC থেকে মিলিসেকেন্ডের প্রতিনিধিত্ব করে। তারিখ অবজেক্ট জাভাস্ক্রিপ্ট ভাষার একটি অন্তর্নির্মিত ডেটাটাইপ। এটি তারিখ এবং সময়ের সাথে কাজ করতে ব্যবহৃত হয়। তারিখ অবজেক্টটি নতুন কীওয়ার্ড ব্যবহার করে তৈরি করা হয়, যেমন নতুন তারিখ()। তারিখ বস্তুটি 1/1/1970 এর আগে বা পরে 100 মিলিয়ন দিনের মধ্যে মিলিসেকেন্ড নির্ভুলতার পরিপ্রেক্ষিতে তারিখ এবং সময় ব্যবহার করা যেতে পারে।

// জাভাস্ক্রিপ্ট Date Objects
//  অনুশীলন শুরু

// var myDate = new Date();
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toLocaleDateString());

// জাভাস্ক্রিপ্টে getMonth() পদ্ধতি কি?
// Javascript date getMonth() পদ্ধতি স্থানীয় সময় অনুযায়ী নির্দিষ্ট তারিখে মাস ফেরত দেয়। getMonth() দ্বারা প্রত্যাবর্তিত মান হল 0 এবং 11-এর মধ্যে একটি পূর্ণসংখ্যা। 0 জানুয়ারী, 1 থেকে ফেব্রুয়ারী ইত্যাদির সাথে মিলে যায়।

// console.log(myDate.getMonth());

// জাভাস্ক্রিপ্টে getDate () পদ্ধতি কি?
// getDate() getDate() পদ্ধতি স্থানীয় সময় অনুযায়ী নির্দিষ্ট তারিখের জন্য মাসের দিন প্রদান করে।

// getMonth 0 ভিত্তিক কেন?
// কারণ getMonth পদ্ধতিটি 0 এবং 11 এর মধ্যে একটি শূন্য-ভিত্তিক সংখ্যা প্রদান করে। উদাহরণস্বরূপ, জানুয়ারী হল 0, ফেব্রুয়ারী হল 1, মার্চ হল 2, ইত্যাদি৷ আপনার যদি মাসের জন্য একটি এক-ভিত্তিক মান পেতে হয়, তাহলে ফলাফলে 1 যোগ করুন৷

// console.log(myDate.getDate());
// console.log(myDate.getMinutes());
// console.log(myDate.getSeconds());

// জাভাস্ক্রিপ্ট Date Objects
//  অনুশীলন শেষ

// জাভাস্ক্রিপ্টে অ্যারে কি?
// জাভাস্ক্রিপ্টে, অ্যারে একটি একক পরিবর্তনশীল যা বিভিন্ন উপাদান সংরক্ষণ করতে ব্যবহৃত হয়। এটি প্রায়শই ব্যবহৃত হয় যখন আমরা উপাদানগুলির তালিকা সংরক্ষণ করতে চাই এবং একটি একক পরিবর্তনশীল দ্বারা তাদের অ্যাক্সেস করতে চাই।

// জাভাস্ক্রিপ্ট Array
//  অনুশীলন শুরু

// var number = [123, 456, 789, 46565418, 54654694854, 6489498];
// console.log(number);

// var foodNames = ["Apple","Banana","Orange"];
// console.log(foodNames);

// var foodNames = ["Apple","Banana","Orange"];
// console.log(foodNames[0]);

// var foodNames = ["Apple","Banana","Orange"];
// console.log(foodNames[0] = "Mango");

// জাভাস্ক্রিপ্ট Array
//  অনুশীলন শেষ

// জাভাস্ক্রিপ্টে পুশ() পদ্ধতি কি?
// push() push() পদ্ধতি একটি অ্যারের শেষে এক বা একাধিক উপাদান যোগ করে এবং অ্যারের নতুন দৈর্ঘ্য প্রদান করে।

// জাভাস্ক্রিপ্টে পপ() পদ্ধতি কি?
// pop() pop() পদ্ধতি একটি অ্যারে থেকে শেষ উপাদানটি সরিয়ে দেয় এবং সেই উপাদানটি ফেরত দেয়। এই পদ্ধতি অ্যারের দৈর্ঘ্য পরিবর্তন করে।

// জাভাস্ক্রিপ্টে Shift() পদ্ধতি কি?
// shift() পদ্ধতি একটি অ্যারে থেকে প্রথম উপাদানটিকে সরিয়ে দেয় এবং সেই অপসারিত উপাদানটি ফেরত দেয়। এই পদ্ধতি অ্যারের দৈর্ঘ্য পরিবর্তন করে।

// জাভাস্ক্রিপ্টে Unshift() পদ্ধতি কি?
// unshift() পদ্ধতি একটি অ্যারের শুরুতে এক বা একাধিক উপাদান যোগ করে এবং অ্যারের নতুন দৈর্ঘ্য প্রদান করে।

// জাভাস্ক্রিপ্ট Push() Pop() Shift() & Unshift()
//  অনুশীলন শুরু

// var foodNames = ["Apple", "Banana", "Orange"];
// foodNames.push("Mango")
// console.log(foodNames);

// var foodNames = ["Apple", "Banana", "Orange"];
// foodNames.pop()
// console.log(foodNames);

// var foodNames = ["Apple", "Banana", "Orange"];
// foodNames.push("dfjfjo hyh fhfh")
// foodNames.pop()
// console.log(foodNames);

// var foodNames = ["Apple", "Banana", "Orange"];
// foodNames.shift()
// console.log(foodNames);

// var foodNames = ["Apple", "Banana", "Orange"];
// foodNames.unshift("Mango")
// console.log(foodNames);

// জাভাস্ক্রিপ্ট Push() Pop() Shift() & Unshift()
//  অনুশীলন শেষ

// জাভাস্ক্রিপ্টে স্লাইস() পদ্ধতি কি?
// slice() slice() পদ্ধতিটি একটি অ্যারের একটি অংশের একটি অগভীর অনুলিপি শুরু থেকে শেষ পর্যন্ত নির্বাচিত একটি নতুন অ্যারে অবজেক্টে ফেরত দেয় (শেষ অন্তর্ভুক্ত নয়) যেখানে শুরু এবং শেষ সেই অ্যারের আইটেমগুলির সূচী উপস্থাপন করে। মূল অ্যারে পরিবর্তন করা হবে না.

// জাভাস্ক্রিপ্টে Splice() পদ্ধতি কি?
// স্প্লাইস() পদ্ধতি বিদ্যমান উপাদানগুলিকে সরিয়ে বা প্রতিস্থাপন করে এবং/অথবা জায়গায় নতুন উপাদান যোগ করে একটি অ্যারের বিষয়বস্তু পরিবর্তন করে। এটি পরিবর্তন না করে একটি অ্যারের অংশ অ্যাক্সেস করতে, slice() দেখুন।

// জাভাস্ক্রিপ্ট Slice() এবং Splice()
//  অনুশীলন শুরু

// var foodNames = ["Apple", "Banana", "Orange"];
// console.log(foodNames.slice(0, 1));

// var foodNames = ["Apple", "Banana", "Orange"];
// console.log(foodNames.slice(1));

// var foodNames = ["Apple", "Banana", "Orange"]
// foodNames.splice(0, 1, "Mango");
// console.log(foodNames);

// var foodNames = ["Apple", "Banana", "Orange"]
// foodNames.splice(0, 1,);
// console.log(foodNames);

// জাভাস্ক্রিপ্ট Slice() এবং Splice()
//  অনুশীলন শেষ

// জাভাস্ক্রিপ্টে লুপের জন্য কি?
// লুপের জন্য একটি জাভাস্ক্রিপ্ট কোডের একটি ব্লক কার্যকর করে যতক্ষণ পর্যন্ত একটি নির্দিষ্ট শর্ত সত্য হয়। লুপের জন্য জাভাস্ক্রিপ্ট তিনটি আর্গুমেন্ট নেয়: ইনিশিয়ালাইজেশন, কন্ডিশন এবং ইনক্রিমেন্ট। কন্ডিশন এক্সপ্রেশন প্রতিটি লুপে মূল্যায়ন করা হয়। এক্সপ্রেশনটি সত্য হলে একটি লুপ চলতে থাকে।

// জাভাস্ক্রিপ্ট For Loop
// অনুশীলন শুরু

// for (var sum = 1; sum < 3; sum++){
// console.log("Hello World");
// }

// for (var sum = 1; sum <= 3; sum++){
// console.log("Hello World");
// }

// var Number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (var i = 0; i < Number.length; i++){
// console.log(Number[i]);
// }

// জাভাস্ক্রিপ্ট For Loop
// অনুশীলন শেষ

// জাভাস্ক্রিপ্ট এ যখন লুপ কি?
// while স্টেটমেন্ট একটি লুপ তৈরি করে যা একটি নির্দিষ্ট বিবৃতি কার্যকর করে যতক্ষণ না পরীক্ষার শর্তটি সত্য হিসাবে মূল্যায়ন করা হয়। বিবৃতি কার্যকর করার আগে শর্তটি মূল্যায়ন করা হয়।

// জাভাস্ক্রিপ্ট While Loop
// অনুশীলন শুরু

// var i = 0;
// while (i < 10) {
//     console.log(i);
//     i++
// }

// var i = 0;
// while (i <= 10) {
//     console.log(i);
//     i++
// }

// জাভাস্ক্রিপ্ট While Loop
// অনুশীলন শেষ

// জাভাস্ক্রিপ্টে ফাংশন কি?
// জাভাস্ক্রিপ্টের একটি ফাংশন একটি পদ্ধতির অনুরূপ - বিবৃতির একটি সেট যা একটি কার্য সম্পাদন করে বা একটি মান গণনা করে, তবে একটি পদ্ধতিকে একটি ফাংশন হিসাবে যোগ্যতা অর্জনের জন্য, এটি কিছু ইনপুট নিতে হবে এবং একটি আউটপুট প্রদান করবে যেখানে এর মধ্যে কিছু সুস্পষ্ট সম্পর্ক রয়েছে। ইনপুট এবং আউটপুট।

// জাভাস্ক্রিপ্ট Function
// অনুশীলন শুরু

// function Fun() {
//     var number1 = 30;
//     var number2 = 10;
// console.log(number1 * number2);
// }
// Fun();
// Fun();
// Fun();

// function Fun(Number1, Number2) {
//     var total = Number1 + Number2;
//     console.log(total);
// }
// Fun(10, 20);

// function Fun(Number1) {
//     var total = Number1 * 30;
//     return total;
// }
// var a = Fun(10);
// var b = Fun(10);
// console.log(a + b);

// জাভাস্ক্রিপ্ট Function
// অনুশীলন শেষ

// জাভাস্ক্রিপ্টে অবজেক্ট কি?
// জাভাস্ক্রিপ্টে, একটি বস্তু হল একটি স্বতন্ত্র সত্তা, বৈশিষ্ট্য এবং প্রকার সহ। উদাহরণস্বরূপ, এটি একটি কাপের সাথে তুলনা করুন। একটি কাপ বৈশিষ্ট্য সহ একটি বস্তু। একটি কাপের একটি রঙ, একটি নকশা, ওজন, এটি তৈরি করা উপাদান ইত্যাদি রয়েছে৷ একইভাবে, জাভাস্ক্রিপ্ট বস্তুর বৈশিষ্ট্য থাকতে পারে, যা তাদের বৈশিষ্ট্যগুলিকে সংজ্ঞায়িত করে৷

// জাভাস্ক্রিপ্ট Objects
// অনুশীলন শুরু

// var myInfo = { yourName: "MD", Country: "Bangladesh", phoneNumber: 12345678910 }
// console.log(myInfo);

// var myInfo = { yourName: "MD", Country: "Bangladesh", phoneNumber: 12345678910 }
// console.log(myInfo.Country);

// var myInfo = { yourName: "MD", Country: "Bangladesh", phoneNumber: 12345678910 }
// console.log(myInfo.yourName);

// var myInfo = { yourName: "MD", Country: "Bangladesh", phoneNumber: 12345678910 }
// console.log(myInfo.phoneNumber);

// var myInfo = { yourName: "MD", Country: "Bangladesh", phoneNumber: 12345678910 }
// console.log(myInfo.Country);
// var newPro = myInfo["phoneNumber"];
// console.log(newPro);

// function MyInfo(yourName,Country,phoneNumber) {
//     this.yourName = yourName;
//     this.Country = Country;
//     this.phoneNumber = phoneNumber;
// }

// var NewObj = new MyInfo("MD", "Bangladesh", "12345678910");
// console.log(NewObj);

// function MyInfo(yourName,Country,phoneNumber) {
//     this.yourName = yourName;
//     this.Country = Country;
//     this.phoneNumber = phoneNumber;
//     this.ShowMe = function () {
//         console.log(this.yourName);
//         console.log(this.Country);
//         console.log(this.phoneNumber);
//     }
// }

// var NewObj = new MyInfo("MD", "Bangladesh", "12345678910");
// console.log(NewObj);

// var NewObj2 = new MyInfo("MD MD", "Bangladesh", "12345678910");
// console.log(NewObj);

// NewObj.ShowMe();
// console.log("Break");
// NewObj2.ShowMe();

// জাভাস্ক্রিপ্ট Objects
// অনুশীলন শেষ

// জাভাস্ক্রিপ্টে মন্তব্য কি?
// JavaScript মন্তব্যগুলি আপনার কোডে নোট লিখতে বা কোডের বিভাগগুলিকে মুছে না দিয়ে অক্ষম করতে ব্যবহার করা হয়। জাভাস্ক্রিপ্টে // একটি লাইনের আগে, অথবা /* আগে এবং */ একাধিক লাইনের পরে যোগ করে মন্তব্য করা হয়। কোডের উপর মন্তব্য করা অনেকগুলি প্রোগ্রামিং ভাষার একটি মূল বৈশিষ্ট্য।

// জাভাস্ক্রিপ্ট Comment
// অনুশীলন শুরু

//একক লাইন মন্তব্য

/*একাধিক
লাইন মন্তব্য*/

// জাভাস্ক্রিপ্ট Comment
// অনুশীলন শেষ

// জাভাস্ক্রিপ্টে টারনারি অপারেটর কি?
// শর্তসাপেক্ষ (টার্নারি) অপারেটর হল একমাত্র জাভাস্ক্রিপ্ট অপারেটর যেটি তিনটি অপারেন্ড নেয়: একটি শর্তের পরে একটি প্রশ্ন চিহ্ন (?), তারপর একটি এক্সপ্রেশন যা কার্যকর করার জন্য শর্তটি সত্য হলে একটি কোলন ( : ), এবং শেষে অভিব্যক্তিটি শর্তটি মিথ্যা হলে কার্যকর করুন।

// জাভাস্ক্রিপ্ট Ternary Operator
// অনুশীলন শুরু

// var number = 3;
// var myCondition = (number < 10) ? "Hello World" : "Hello Earth";
// console.log(myCondition);

// var number = 30;
// var myCondition = (number < 10) ? "Hello World" : "Hello Earth";
// console.log(myCondition);

// জাভাস্ক্রিপ্ট Ternary Operator
// অনুশীলন শেষ

// জাভাস্ক্রিপ্টে কন্টিনিউ স্টেটমেন্ট কি?
// অবিরত বিবৃতি বর্তমান বা লেবেলযুক্ত লুপের বর্তমান পুনরাবৃত্তিতে বিবৃতিগুলির সম্পাদন বন্ধ করে এবং পরবর্তী পুনরাবৃত্তির সাথে লুপের সম্পাদন অব্যাহত রাখে।

// জাভাস্ক্রিপ্ট Continue Statement
// অনুশীলন শুরু

// for (var i = 0; i < 10; i++) {
//     if (i == 5) {
//         console.log("Break Now");
//     }
//     console.log(i);
// }

// for (var i = 0; i < 10; i++) {
//     if (i == 5) {
//         console.log("Break Now");
//         break;
//     }
//     console.log(i);
// }

// for (var i = 0; i <= 10; i++) {
//     console.log(i);
// }

// for (var i = 0; i <= 10; i++) {
//     if (i == 5) {
//         console.log("Break Now");
//         continue
//     }
// console.log(i);
// }

// জাভাস্ক্রিপ্ট Continue Statement
// অনুশীলন শেষ

// জাভাস্ক্রিপ্টে Var, Let, Const কি?
// একটি var ভেরিয়েবলের সুযোগ কার্যকরী সুযোগ। একটি let ভেরিয়েবলের সুযোগ হল ব্লক স্কোপ। একটি কনস্ট ভেরিয়েবলের সুযোগ হল ব্লক স্কোপ। এটি আপডেট এবং সুযোগের মধ্যে পুনরায় ঘোষণা করা যেতে পারে। এটি আপডেট করা যেতে পারে কিন্তু সুযোগের মধ্যে পুনরায় ঘোষণা করা যাবে না।

// জাভাস্ক্রিপ্ট Var, Let, Const
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

// জাভাস্ক্রিপ্ট Var, Let, Const
// অনুশীলন শেষ

// জাভাস্ক্রিপ্টে জেএস স্কোপ কি?
// জাভাস্ক্রিপ্টে, বস্তু এবং ফাংশনগুলিও পরিবর্তনশীল। স্কোপ কোডের বিভিন্ন অংশ থেকে ভেরিয়েবল, অবজেক্ট এবং ফাংশনের অ্যাক্সেসযোগ্যতা নির্ধারণ করে।

// জাভাস্ক্রিপ্ট JS Scope
// অনুশীলন শুরু

//Globle Scope
// var name = "Hello World";
// console.log(name);

//Function Scope
// function me() {
//     console.log(name);
// }
// me()

//Block Scope
// {
//     let name = "Hello World";
//     console.log(name);
// }

// জাভাস্ক্রিপ্ট JS Scope
// অনুশীলন শেষ

// জাভাস্ক্রিপ্টে জেএস হোস্টিং কি?
// JavaScript Hoisting বলতে সেই প্রক্রিয়াকে বোঝায় যেখানে দোভাষী ফাংশন, ভেরিয়েবল বা ক্লাসের ঘোষণাকে তাদের সুযোগের শীর্ষে নিয়ে যেতে দেখায়, কোডটি কার্যকর করার আগে। Hoisting ফাংশন ঘোষণা করার আগে কোডে নিরাপদে ব্যবহার করার অনুমতি দেয়।

// জাভাস্ক্রিপ্ট JS Hoisting
// অনুশীলন শুরু

// x = 3;
// var x;
// console.log(x);

// জাভাস্ক্রিপ্ট JS Hoisting
// অনুশীলন শেষ

// জাভাস্ক্রিপ্টে ফাংশন এক্সপ্রেশন কি?
// ফাংশন এক্সপ্রেশন আমাদের একটি বেনামী ফাংশন তৈরি করতে দেয় যার কোনো ফাংশনের নাম নেই যা ফাংশন এক্সপ্রেশন এবং ফাংশন ঘোষণার মধ্যে প্রধান পার্থক্য। একটি ফাংশন এক্সপ্রেশন একটি আইআইএফই (ইমিডিয়েলি ইনভোকড ফাংশন এক্সপ্রেশন) হিসাবে ব্যবহার করা যেতে পারে যা সংজ্ঞায়িত হওয়ার সাথে সাথে চলে।

// জাভাস্ক্রিপ্ট Function Expression
// অনুশীলন শুরু

// var expressionFunction = function () {
//     console.log("Hello World");
// }
// expressionFunction();

// var expressionFunction = function (message, message1) {
//     console.log(message, message1);
// }
// expressionFunction("Hello World", "Hello Earth");

// var expressionFunction = function (message, message1) {
//     console.log(message, message1);
// }
// expressionFunction("Hello World"+ " Hello Earth", "Hello Universe");

// জাভাস্ক্রিপ্ট Function Expression
// অনুশীলন শেষ

// জাভাস্ক্রিপ্টে ইনার ফাংশন কি?
// অভ্যন্তরীণ ফাংশন শুধুমাত্র বাইরের ফাংশন বিবৃতি থেকে অ্যাক্সেস করা যেতে পারে. অভ্যন্তরীণ ফাংশন একটি বন্ধ গঠন করে: অভ্যন্তরীণ ফাংশন বাইরের ফাংশনের আর্গুমেন্ট এবং ভেরিয়েবল ব্যবহার করতে পারে, যখন বাইরের ফাংশন অভ্যন্তরীণ ফাংশনের আর্গুমেন্ট এবং ভেরিয়েবল ব্যবহার করতে পারে না।

// জাভাস্ক্রিপ্ট Inner Function
// অনুশীলন শুরু

// function OuterFunction() {

//     var a = 3;

//     function InnerFunction() {
//         a;
//         console.log("This Is Inner Function");
//     }
//     InnerFunction();
//     console.log('This Is Outer function');
// }

// OuterFunction();

// function sum (a, b) {

//     function added() {
//       return a + b;
//     }

//     function subtraction(){
//         return a - b;
//     }

//     function multiply() {
//         return a * b;
//     }

//     function divide() {
//         return a / b;
//     }

//     return added() + subtraction() + multiply() + divide();
// }

// var Result = sum(10, 5);
// console.log(Result);

// জাভাস্ক্রিপ্ট Inner Function
// অনুশীলন শেষ
