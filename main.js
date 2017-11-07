 //*** 16/10/2017 ***//
// learn js very easy //
/* global console, alert*/

/*
var:
- Start with letters, underscore, $
- var = Js Variable keyword
- myPrice = Variable Name
- (=) = assignment operator
- 100 = Variable Value
*/

var // My Product Prices
    myOldPrice = 2000,
    myNewPrie  = 900,
    myDiscount = myOldPrice - myNewPrie + 500; // 2000 - 900 + 500 = 1600
document.getElementById('price').innerHTML = myDiscount;

/*
Date Types:
Boolean: True, False
Array: ["facebook", "youtube", "google"];
Object: {firstName: "Drmas", lastName: "Issam"}
String: "JavaScript"
Number: 27
Undefined, Null, NaN = Not a Number, Symbol.
*/
/*
Check if the Product Has Discount Or No.
true = yes
false = No
*/
var // Boolean
    hasDiscount = false;
    if (hasDiscount === true){
      var mainPrice = 350;
    } else {
      mainPrice = 450;
    }
   document.getElementById('boolean').innerHTML = mainPrice;

var // Array
   socialwebmedai = ["facebook.com ", "youtube.com ", "google.com"];
   document.getElementById('array').innerHTML = socialwebmedai;

var // Object
       myInfo = {firstName: "Drmas", lastName: "Issam"};
       document.getElementById('object').innerHTML = myInfo.firstName + ' ' + myInfo.lastName;

var // String
   myName = "Iass Drmas Abdallah Bashir";
   document.getElementById('string').innerHTML = myName;

var // Number
    myAge = 27;
    document.getElementById('number').innerHTML = myAge;

var // Concatention
     myName = "Drmas",
     myAge = 27,
     myCountry = "Soudan";
     document.getElementById('concatention').innerHTML =
     "My name is: " + myName + "<br>" +
     "And my age is: " + myAge + "<br>" +
     "My Country is: " + myCountry;

/*
Output:
*/
var // Alert
   myName = "Drmas";
  // alert(myName);

/*
operator: + Addition, - Subtraction, * Multiplication
/ Division, % Modulus, ++ Increment, -- Decrement.

*/

var // operator
   x = 100,
   y = 200,
   z = x + y; // z = 100 + 200 = 300
document.getElementById("operator").innerHTML = z;

/*
If & Else: if (condition 1){
// Code
} esle if (condition 2){
// code
} else {
// other than condition 1 or 2
}

var yourAge = prompt("What Your Age ?");
if (yourAge < 18){
  document.getElementById("ifElse").innerHTML =
  "Sorry Your Age Is " + yourAge + " You Are Not Allowed Here";
} else {
  document.getElementById("ifElse").innerHTML =
  "Hello Your Age Is " + yourAge + " You Are Welcome Here";
}
*/

/*
Concatention operator:
  >   greater than,
  <   less than,
  >=  greater than or equal to
  <=  less than or equal to
  ==  equal to
  ===	equal value and equal type
  Logical operator:
  !   not
  !=  not equal
  !== not equal value or not equal type
  && And
  || Or

var // Concatention operator
    myPrice = 40;
    if (myPrice > 50) {
      alert("Sorry Tha Price Is " + myPrice + " All I Have Is 50");
    } else {
      alert("Good The Price Is " + myPrice + " All I Have Is 50");
    }
*/
/*
Function: Return
Function = Function keyword in js
Function sayHi(){
  // Code
}
*/
function myAgeInDays(myAge){
  "use strict";
      return myAge * 365;
}
 var ageCalc = myAgeInDays(27);
 document.getElementById("func").innerHTML = "Your Age In Days = " + ageCalc + " Days";
 // function 2
function sayHello(firstName, middleName, lastName){
  return "Hello " + firstName + " " + middleName + " " + lastName + " How are you today";
}
 document.getElementById("func2").innerHTML = sayHello("Issam", "Drmas", "Abdallah");
// function 3
function makeDiscount(Price){
  var discount = 200;
  return Price - discount; // 1000 - 200 = 800
}
 document.getElementById("func3").innerHTML = makeDiscount(1000);
// function 4
function calcDays(age){
  var year   = 365,
      hour   = 24,
      mintue = 60,
      second = 60;
  return "Your Age In The Seconds = " + age * year * hour * mintue * second + " Secons";
}
//var dybamicAge = prompt("Whats Your Age ?");
document.getElementById("func4").innerHTML = calcDays(30);

/*
Function: Self Invoke
*/
function convertUsdToRiyal(){
  var amount = document.getElementById("dollar").value,
  result = amount * 3.75;
  message = document.getElementById("message");

  if (amount === ""){
    message.innerHTML = "This Field Can't Be Empty";
  } else if (isNaN(amount)){
    message.innerHTML = "This Field Accept Numbers Only";
  } else if (amount === "0") {
    message.innerHTML = "The Value Must Not Be 0";
  } else if (amount < 0) {
    message.innerHTML = "The Value Must Not Be Negative Number";
  } else {
    message.innerHTML = amount + " Dollar Is Worth " + result + " Riyal";
  }
};

/*
Switch (expression){
case x:
Code to Excete
break;

default:
Code To Exceute
break;
}
*/

/*
var season = prompt("Whats The Best Season For You?");
switch (season) {
  case "Winter":
  alert("Winter is cold");
    break;

  case "Summer":
    alert("Summer is too hot");
    break;

  case "Autumn":
  alert("Autumn is very Good");
  break;

  case "Spring":
  alert("Spring is amazing");
  break;

  default:
  alert("You Didnt Enter A Season Name");
}
*/

/*
Scope
*/
var myName = "Drmas"; // Global Scope

console.log(myName);
function myNameFunc(){
   myName = "Asmail"; // Local Scope
  console.log(myName);
}
myNameFunc();
console.log(myName);


/*
Events Explain: Onload, Onclick, Ondblclick
*/
window.onload = function(){
  document.getElementById("event").innerHTML = "Text From JavaScript";
}
window.onclick = function(){
  document.getElementById("event").innerHTML = "Text From Onclick";
}
window.ondblclick = function(){
  document.getElementById("event").innerHTML = "Text From Ondblclick";
}

/*
Events Explain: Onkeydown, Onkeyup, Onkeypress
*/
var myInput = document.getElementById("input"),
    myDiv = document.getElementById("div");
    myInput.onkeyup = function (){
      myDiv.innerHTML = myInput.value * 3.75;
    };


/*
<h3>Events Explain: Onmouseover, Onmouseout, Onchange</h3>
*/
var myDiv = document.getElementById("event1");
myDiv.onmouseout = function (){
  myDiv.innerHTML = "You Hovered On Me";
};
var myDiv = document.getElementById("event1");
myDiv.onmouseover = function (){
  myDiv.innerHTML = "You Hove Gone";
};

var myInput = document.getElementById("input2"),
    myDivs = document.getElementById("div2"),
    myCurrency = document.getElementById("currency");
  myCurrency.onchange = function(){
    if (myInput === ""){
      myDivs.innerHTML = "The Field Can't Be Empty";
    } else {
  myDivs.innerHTML = "Worth " + myInput.value * myCurrency.value + " Egyption Pound";
  }
};


/*
Array:
var arrayName = ["Element1", "Element2", "Element3"];
*/
var friendOne = "Drmas",
    friendTwo = "Issam",
    friendThree = "Asmail",
    friendFour = "Alfadil",
    friendFive = "Abdallah";

var friends = new Array("Drmas", "Issam", "Asmail");
console.log(friends);

var friends = []; // Literal Way
friends[0] = "Drmas";
friends[1] = "Issam";
friends[2] = "Asmail";
console.log(friends);

var friends = [
      "drmas", // 0 Index
      "issam", // 1 Index
      "asmail", // 2 Index
      "Alfadil", // 3 Index
      "Abdallah" // 4 Index
    ];
/* console.log(friends[1]);

// Array Check:
if (Array.isArray(friendOne)){
  console.log("Goodthis is Array");
} else {
  console.log("No this is not Array");
}

// Array: Get/Set Array Length
console.log(friends.length); // Get Length
console.log(friends);
friends.length = 2; // Set Length To 2
console.log(friends); // This is Array

// Array: Convert To String
friends = friends.toString(); // Convert To String
console.log(friends); // String
*/
// Array: Adding Items To Array
friends[5] = "AlJan";
console.log(friends.length); // 6
console.log(friends);
friends.push("Nada");
friends.unshift("Marw");
// arrayName.splice(index, How Manyns 0, Item1, Item2, Item3);
friends.splice(3, 0, "Hassen", "Aly", "Kamel");
console.log(friends);
console.log(friends.length);

// Array: Remove Items
friends.pop();
console.log(friends);
console.log(friends.length);

friends.shift();
console.log(friends);
console.log(friends.length);

// Array: Sort/Reverse
friends.sort();
console.log(friends);

friends.reverse();
console.log(friends);

// Array: Combine/Slice
// var mySlicedArray = friends.slice(-2, -4);
var mySlicedArray = friends.slice(2, 4);
console.log(mySlicedArray);

var otherFriends = [
    "Saleh",
    "Ahmed",
    "Norain"
];
var allFriends = friends.concat(otherFriends);
console.log(allFriends);

// Array: Search The Array
var friends2 = [
      "drmas", // 0 Index
      "issam", // 1 Index
      "asmail", // 2 Index
      "Alfadil", // 3 Index
      "Abdallah" // 4 Index
    ];

var specialFriends = friends2.indexOf("asmail");
console.log(specialFriends);
console.log(friends[specialFriends]);

document.getElementById("all").innerHTML =
   "My Friends Are: " + friends2;

   document.getElementById("special").innerHTML =
      "My Special Friend Is: " + friends2[specialFriends];

/*
String: Convert To String
*/
var myString = "I Love \\JavaScript\\";
console.log(myString);
console.log(typeof (myString));
console.log(myString.length);

var myNumber = 100;
console.log(myNumber);
console.log(typeof (myNumber));

var myNewNumber = myNumber.toString();
console.log(myNewNumber);
console.log(typeof (myNewNumber));

// String: Locate A String
// Syntax: indexOf ( Value, Start Position ) // default = 0
// Syntax: lastIndexOf ( Value, Start Position ) // default = 0
// Syntax: Search(Value);
var myString = "I'm In Love With JavaScript And In Love With Php",
    myWord = myString.indexOf("Love", 9);
    myWord = myString.search(/love/i);
    console.log(myWord);

// String: Split String
// Split: split(Separator, Limit)
var myMainString = "I Love JavaScript And Json",
    mySplittedString = myMainString.split(" ", 3);
    console.log(mySplittedString);

// Slice: slice(Start[Mandatory], End[Optional])
var myMainString = "I Love JavaScript And Json",
    mySlicedString = myMainString.slice(7, 17);
    console.log(mySlicedString);

// SubStr: substr(Start, Length)
var myMainString = "I Love JavaScript And Json",
    mySubstrString = myMainString.substr(7, 12);
    console.log(mySubstrString);

// SubString: substring(Start[require], End[Optional])
var myMainString = "I Love JavaScript And Json",
    mySubstrString = myMainString.substring(7, 17);
    console.log(mySubstrString);

// String: Find And Replace
// charAt(index)
// charCodeAt(index)
// replace(Value, New Value)
var myString = "I Love JavaScript Too Much",
    myCharAtString = myString.charAt();
    console.log(myCharAtString);

// String: Concatention And Converting Character Code
// String.fromCharCode(Num1, Num2, Num3);
var myMessage = String.fromCharCode(79, 115, 97, 109, 97);
console.log(myMessage);
// concat(String, String, String);
var myMessage = "Hello I Love",
    myMessage2 = "PHP And JavaScript",
    myAll = myMessage.concat(" ", myMessage2);
    console.log(myAll);

// String: Convert Letters
// toLowerCase: Small
// toUpperCase: Captal
var myString = "I Love Js",
    mySmallString = myString.toLowerCase();
    console.log(mySmallString);

// String: Trim And Link And All Reference
var myString = "    Hello I'm Drmas   ";
    console.log(myString);
var myNewString = myString.trim();
    console.log(myNewString);

var myString = "Google";
    console.log("Go To Google By This Link => " + myString.link("http://www.google.com"));

/*
Loop: For Loop Syntax
for ( Initialization; Condition; Expression){
 // Statement
}
Initialization: Executed Before The Loop Once
Condition; Define The Condition To Run The Loop
Final Expression; Executed EveryTime The Code Run
*/
var i;
for (i = 1; i <= 4; i++){
  console.log(i);
}

var friends = ["Ahmed", "Sayed", "Mahmoud", "Kamel", "Salah"],
    a;
for (a = 0; a < friends.length; a++){
  //document.getElementById("loop-for").innerHTML = friends[a];
  console.log(friends[a]);
}

// Loop For In
// For/In Loop Syntax
// for ( Variable In Object ){
// if ( object.hasOwnProperty(Variable)){
// Statement
//}
//}

var myCar = {
  colour: "White",
  type: "Sedan",
  price: "50.000",
  model: "2015"
};

var x;
for ( x in myCar ){
  if (myCar.hasOwnProperty(x)){
  //  document.getElementById("loop-in").innerHTML =
    // myCar.colour + " " + myCar.type + " " + myCar.price + " " + myCar.model;
    console.log(x + ": " + myCar[x]);
  }
}

// Loop: For Advanced
var i = 0;
for (;;){
  if (i > 3) break;
  console.log(i);
  i++;
}

function generateYears(Start, End){
  var years;
 document.write("<select>");
 for (years = Start; years <= End; years++){
   document.write("<option value='" + years + "'>" + years + "</option>");
 }

 document.write("</select>");
}
generateYears(1900, 2015);
generateYears(2000, 2010);
generateYears(2000, 2012);

/*
Loop: While, Do While
Syntax While:
while (condition){
Statement
}
*/
var z = 0;
while (z <= 3) {
  console.log(z);
  z++;
}

function generateYears(Start, End){
  var years = Start;
 document.write("<select>");
 while (years <= End){
   document.write("<option value='" + years + "'>" + years + "</option>");
   years++
 }

 document.write("</select>");
}
generateYears(1900, 2015);
generateYears(2000, 2010);
generateYears(2000, 2012);

var z = 0;
do {
  console.log(z);
  z++;
} while (z <= 4)

// Loop: Control, Continu, Break, Lebal
var i;
for (i = 1; i <= 4; i++){
  if (i === 2){
    break;
  }
  console.log(i);
}

var i;
for (i = 1; i <= 4; i++){
  if (i === 2){
    continue;
  }
  console.log(i);
}
// For: Lebal
var i, x;
MainLoop:
for (i = 1; i < 5; i++){
  ChildLoop:
  for (x = 15; x < 20; x++){
    if (x === 17 ){
      continue MainLoop;
    }
    console.log(i + " => " + x);
  }
}

/*
Math:
Syntax: Math.ceil(x);
*/
// Math: Ceil
var x = Math.ceil(8.9);
console.log(x);
// Math.Floor
var x = Math.floor(-8.9);
console.log(x)
// Math.round
var x = Math.round(8.9);
console.log(x)
// Math: Min & Max
// Syntax: Math.min(Val 100, 10, 50, 1000);
var x = Math.min(100, 10, 50, 100);
console.log(x);
// Math: Random
var x = Math.random();
console.log( Math.floor (x * 10) + 1);

/*
Regular Expression Syntax:
/pattern/attributes
Search | Replace | Match | Split | Test
attributes List
[I] => Case Insensitive
[G] => Global Search
[M] => Multi Line Search
// Regular Expression: Brackts
// Brackts Use
// [....] Character
// [^...] Not Character
// [a-e]  Range Small Character
// [A-Z]  Range Capital Letters
// [0-9]  Range Numbers
// [^0-9] Not Range
// [A-g] = Range[A-Z] Range[a-g]
// [0-9a-Z] Double Range
// Letter+ => Word Contain One Letter
// Letter{Number} => Word Contain Number of Letter
// Letter {Number, Number} => Word Contain Number Or Number
// Letter{Number} => Word Contain At Least Number
*/
var string = "I Love JavaScript Too Much End angularjs",
   result = string.replace(/[A-e]/g, "à");
   console.log(result);

/*
Date Syntax:
new Date(); // Print Current Date & Time
new Sate(Millseconds); // Print Millseconds From UTC 1 Jan 1970 00:00:00
nes Date(DateString); // Can Add Date string
new Date(Year, Month, Day, Hour, Minutes, Seconds, Millseconds)
*/

var theDate = new Date();
console.log(theDate);

var theDate = new Date(10000);
console.log(theDate);

/*
Date: Format
Full Format
Long Format
Short Format
Iso Format
*/
var theDate = new Date("Oct 25 1982");
console.log(theDate);

/*
Date: Function:
getDate() // Day Of The Month 1-3
getDate() // Day Of The Week 0-6
getFullYear() // Get The Full Year
getHours() // Get Hours 0-59
getMinutes() // Get Minutes 0-59
getSeconds() // Get Seconds 0-59
GetMilliSeconds() // Get Milliseconds 0-999
getTime() // Number Of Milliseconds From 1970 Or Specific Date
getTimezoneOffset() // Get Def Between UTC & Your Local Time In Minutes

// Set
Date: Function:
setDate(day[require])
setFullYear(Year[require], Month[Optional], Day[Optional])
setHours(Hour[require], Minutes[Optional], Seconds[Optional], Optional)
setMinutes(Minutes[require], Seconds[Optional], Milliseconds[Optional])
setSeconds(Seconds[require], Milliseconds[Optional])
setMilliSeconds(600000) // 10 Minutes
setMonth(Mont[require], day[Optional])
*/
var theDate = new Date(),
dT = theDate.getFullYear();
console.log(dT);

// Date:
// now()
// parse()
// toOsoString()
// toDateString()
// toTimeString()
var theDate = new Date(),
    myIso = theDate.toTimeString();
console.log(myIso);

/*
Numbers:
*/
