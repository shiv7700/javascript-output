// Output Based Logic building Questions
// Guess the output of the questions without running on machine
// guessing output of a code without running it , is called as dry run
// dry run code
// treat every question as separate single question

//Q1
function fruit() {
  console.log(name);
  console.log(price);

  var name = "apple";
  let price = 20;
}

fruit();
/* Solution : 
var name will be hoisted on top of function and will be equal to undefined
but when price will be hoisted it will give error because its let
*/

//Q2
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
/* Solution: 
3
3
3
*/

//Q3
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
/* Solution: 
0
1
2
*/

//Q4
console.log(+true);
console.log(typeof +true);
/* Solution: 
1
number
*/

//Q5
console.log(!"gg");
console.log(typeof "gg");
/* Solution: 
non empty sting => true
! true => false
*/

//Q6
let data = "size";
const bird = {
  size: "small",
};

console.log(bird[data]);
console.log(bird["size"]);
console.log(bird.size);
console.log(bird.data);
/* Solution: 
point ot remember is that if we use variable with bracket notation it will work and if we use variable with dot notation it will not work
bracket notation is expression
bird[data] will output as small
bird["size"] will output as small
bird.size will output as small
bird.data will give undefined because it will try to find data in bird
*/

//Q7
let c = {
  name: "peter",
};

let d = c;
c.name = "peter";
console.log(d.name);
/* Solution: 
d is pointing to c
so c.name will add property to c and d is pointing to c
so output will be peter
*/

//Q8
var x;
var x = 10;
console.log(x);
/* Solution: 
var can be redeclare 
x = 10
*/

//Q9
var x;
let x = 10;
console.log(x);
/* Solution: 
var can be redeclare but not with another declaration (let const)
*/

//Q10
let a = 3;
let b = new Number(3);
console.log(a == b);
console.log(a === b);
/* Solution: 
b will be object because it is invoke with new keyword
== will return true because it will convert both side to same data type
=== will return false because number === object is false
*/

//Q11
let name;
nmae = {};
console.log(name);
/* Solution: 
there is a mistake in spelling of name
the output will be undefined
*/

//Q12
function fruit() {
  console.log("wloof");
}
fruit.name = "apple";
console.log(fruit());
/* Solution: 
name property will be added to prototype of fruit
output => wloof
*/

//Q13
function sum(a, b) {
  return a + b;
}
console.log(sum(1, "2"));
/* Solution: 
1 is converted into string and output will be string "12"
*/

//Q14
let num = 0;
console.log(num++);
console.log(++num);
console.log(num);
/* Solution: 
num++ will increase value but will show 0 (post increment)
++num will show 2 because num was 1 because of num++ then it is increment
num will show 2
*/

//Q15
function getAge(...args) {
  console.log(typeof args);
}
console.log(getAge(21));
/* Solution: 
it is a rest parameter and args will be [21] and type of args will be object
*/

//Q16
function getAge2() {
  "use strict";
  age = 12;
  console.log(age);
}

getAge2();
/* Solution: 
due to use strict and age is not declare it will throw an error that age is not defined
*/

//Q17
const sum = eval("10" * 10 + 5);
console.log(sum);

//Q18
// how long is cool accessible?
sessionStorage.setItem("cool", 21);
/* Solution: 
this is session storage that's why it is a single browsing session which means when browser is close data is deleted or cleared 
*/

//Q19
const obj = { 1: "a", 2: "b", 3: "c",one: "new added" };

console.log(obj.hasOwnProperty(1));
console.log(obj.hasOwnProperty("1"));
console.log(obj.hasOwnProperty("one"));
console.log(obj.hasOwnProperty(one));
/* Solution: 
both 1 and "1" will return true because every key of object are converted into string
thats why there is no difference between 1 and "1"
"one" will return true and one will give error
there will be difference between one and "one"
*/

//Q20
const obj2 = {
  a: "one",
  b: "second",
  a: "repeated",
};
console.log(obj2);
/* Solution: 
a: "repeated " will replace a: "one" because of same key
if there are same key twice the latest key will be considered 
*/

//Q21
for (let i = 1; i < 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
/* Solution: 
output will be 1 , 2 , 4
when i = 3 it will be skip case
*/

//Q22
const foo = () => console.log("first");
const bar = () => setTimeout(() => console.log("second"));
const baz = () => console.log("third");

foo();
bar();
baz();
/* Solution: 

*/

//Q23
const person = { name: "blame" };

function sayHello(age) {
  return `${this.name} ${age}`;
}

sayHello.call(person, 21);
sayHello.bind(person, 21);
/* Solution: 
call will give output as blame 21
bind will return a function definition
*/

//Q24
function sayHi() {
  return (() => 0)();
}
console.log(typeof sayHi());

//Q25
console.log(typeof typeof 1);
/* Solution: 
typeof 1 will be "number"
typeof "number" will be string
*/

//Q26
const numbers = [1, 2, 3];
numbers[9] = 10;
console.log(numbers);
/* Solution: 
it will create 6 empty element  
[1, 2, 3, empty × 6, 10]
*/

//Q27
const numbers = [1, 2, 3];
numbers[9] = numbers;
console.log(numbers);
/* Solution: 
it will place another array at 9
[1, 2, 3, empty × 6, Array(10)]
*/

//Q28
// everything in javascript is either object or primitive
/* Solution: 
true
*/

//Q29
console.log(!!null);
console.log(!!"");
console.log(!!1);

//Q30
setInterval(() => console.log("hi"), 1000);
setInterval(() => console.log("hi"), 1000);
setInterval(() => console.log("hi"), 1000);

//Q31
console.log([..."blame"]);
/* Solution: 
spread operator will spread each letter of word "blame"
['b', 'l', 'a', 'm', 'e']
*/

//Q32
console.log(typeof 3 + 4 + "5");
/* Solution: 
typeof 3 will return "number"
"number"+ 4 + "5" => "number45"
*/

//Q33
console.log(typeof (3 + 4 + "5"));
/* Solution: 
3+4+"5" => 7 + "5" => "75"
string "75"
*/

//Q34
console.log(typeof []);
/* Solution:
[] is a empty array and array is also a object
thats why it's type is object 
*/

//Q35
let data2 = [1, 2, 3].map((num) => {
  if (typeof num === "number") return;
  return num * 2;
});
console.log(data2);
/* Solution: 
map will loop through every value and create a new array
every element in array is number so if condition will be true every time
empty return will create undefined
output will be [undefined,undefined,undefined]
*/

//Q36
function getInfo(member) {
  member.name = "blame";
}

const person2 = {
  name: "pro",
};
getInfo(person2);
/* Solution: 
object take reference thats why it will change person2 name to blame
*/

//Q37
function car() {
  this.make = "tata";
  return;
  {
    make: "kia";
  }
}
const myCar = new car();
console.log(myCar.make);
/* Solution: 
return will not effect make 
output will be tata
*/

//Q38
(() => {
  let x = (y = 10);
})();

console.log(typeof x);

//Q39
(() => {
  let x = (y = 10);
})();

console.log(typeof x);

//Q40
(() => {
  let x = 10;
})();

(() => {
  let x = 10;
})();

console.log(typeof x);

//Q41
(() => {
  let x = (y = 10);
})();

(() => {
  let x = (y = 20);
})();
console.log(y);

//Q42
let x = 100;
(() => {
  var x = 20;
})();
console.log(x);

//Q43
console.log(!true - true);
/* Solution: 
!true will be converted to false
false - true => 0 - 1 => -1
output => -1
*/

//Q44
console.log(true + +"10");

//Q45
let a = [];
let b = [];
console.log(a == b);
console.log(a === b);
/* Solution: 
both will be false because every object holds different reference in memory 
*/

//Q46
let a = [];
let b = a;
console.log(a == b);
console.log(a === b);
/* Solution: 
b is pointing towards or refers to a
both a and b are point to same memory address of object
both output will be true
*/

//Q47
let a = [10];
let b = [20];
console.log(a[0] == b[0]);
console.log(a[0] === b[0]);
/* Solution: 
a[0] is 10 and b[0] is 20
10 == 20 false
10 === 20 false
*/

//Q48
let z = [1, 2, 3, 4, 5];
let a = { name: "blame" };
console.log(...z);
console.log({...a});
/* Solution: 
destructing operator is used which will unpack values 
...z => 1 2 3 4 5
...a => {name: }
*/

//Q49
console.log(typeof NaN);
/* Solution: 
type of NaN will be number because of ECMAscript standards consider NaN as numeric value that can't be converted to number
*/

//Q50
let data = 10 - -10;
console.log(data);

//Q51
const set = new Set([1, 1, 2, 2, 4]);
console.log(set);
/* Solution: 
set will remove duplicate values from it
so , output will be [1,2,4]
it is important to note that it is still a set and not array
*/

//Q52
let data = { name: "blame" };
console.log(delete data.name);
/* Solution: 
name property will be deleted and object gets empty
*/

//Q53
let data = { name: "blame" };
console.log(delete data);

//Q54
const data = ["element", "blame", "pro"];
const [y] = data;
console.log(y);
/* Solution: 
destructed and y will be "element"
*/

//Q55
const data = ["element", "blame", "pro"];
const [y] = data; //change code to get second element
console.log(y);
/* Solution: 
use destructing
const [ ,y] = data;
*/

//Q56
const data = { name: "blame", exp: 2 };
// get name property without using .
/* Solution: 
bracket notation
data["name"] 
*/

//Q57
// merge two objects
let server1 = {
  name: "google",
  port: 200,
};

let server2 = {
  name: "facebook",
  port: 200,
};
/* Solution: 
using spread operator => {...server1,...server2}
using object.assign => Object.assign({},server1,server2)
*/

//Q58
let server1 = {
  name: "google",
  port: 200,
};

let server2 = {
  name: "facebook",
  port: 200,
};

console.log({ server1, ...server2 });
/* Solution: 
new object will be formed with reference to server1
{server1: {…}, name: 'facebook', port: 200}
*/

//Q59
let server1 = {
  name: "google",
  port: 200,
};

let server2 = {
  name: "facebook",
  port: 200,
};

console.log({ ...server1, ...server2 });
/* Solution: 
latest value of name and port will be in new object
{name: 'facebook', port: 200}
*/

//Q60
const name = "blame";
console.log(name());
/* Solution: 
error because name is not a function
*/

//Q61
const result = false || {} || null;
console.log(result);

//Q62
const result = null || false || "";
console.log(result);

//Q63
const result = [] || 0 || true;
console.log(result);

//Q64
console.log(Promise.resolve(5));

//Q65
console.log("😀" === "😀");
/* Solution: 
true
*/

//Q66
// json.parse()?
/* Solution: 
json.parse() will convert json file/string into javascript object
*/

//Q67
let name = "blame";
function getName() {
  console.log(name);
  let name = null;
}
getName();
/* Solution: 
this will thow error because name is hoisted and because hoisting on let works different it will throw error
*/

//Q68
let name = "blame";
function getName() {
  console.log(name);
}
getName();
/* Solution: 
output will be "blame" because name is defined in global scope
*/

//Q69
console.log(`${((x) => x)("i love")} to program`);
/* Solution: 
this is a iife which will return "i love"
output => i love to program
*/

//Q70
function threeSome(x, y, z) {
  return x + y + z;
}
// threeSome([1,2,3])
// threeSome(...[1,2,3])
// threeSome([...1,2,3])
// threeSome([...[1,2,3]])
/* Solution: 
...[1,2,3] this will send destructed values
*/

//Q71
const name = "great coder are not born great";
console.log(!typeof name === "object");
console.log(!typeof name === "string");
/* Solution: 
typeof name is string
! string === object => !true => false === object => false
! string === string => !true => false === string => false
*/

//Q72
let name = "blame";
let exp = 5;
console.log(isNaN(name));
console.log(isNaN(exp));
/* Solution: 
isNan will convert value into number
name can't be converted to number thats why it will return true
exp will return false
*/

//Q73
let person = {
  name: "blame",
};
//what can modify person object
Object.seal(person);
console.log(person);
/* Solution: 
person.name = "gg";
object.seal will seal object which means we can't add or remove properties from object but we can update properties of object
*/

//Q74
let arr = [1, 2, 3, 4, 5];
// remove first element
/* Solution: 
arr.shift();
*/

//Q75
// check value is even or odd
/* Solution: 
console.log(value%2===0);
*/

//Q76
let data = "true";
// convert data into boolean false value

//Q77
let data = "true";
// convert data into boolean true value

//Q78
// difference between map and foreach
/* Solution: 
map is a array method which is used to iterate values and return new array
foreach is also a array method but it will take callback function and iterate over values of array
*/

//Q79
let data = ["blame", "element", "json"];
delete data[1];
console.log(data);
/* Solution: 
[undefined,"element","json"]
*/

//Q80
let data = ["blame", "element", "json"];
delete data[1];
console.log(data.length);
/* Solution: 
length will be 3 because delete [0] will leave empty holes
*/

//Q81
// merge two array
let a = [1, 2, 3];
let b = [4, 5, 6];
console.log([...a, ...b]);
/* Solution: 
spread operator [1,2,3,4,5,6]
*/

//Q82
let c = 3 ** 3;
console.log(c);
/* Solution: 
27 exponential power operator
*/

//Q83
let a = 2;
setTimeout(() => {
  console.log(a);
}, 0);
a = 100;
/* Solution: 
initially a was 2 but then there is a settimeout which is 0 millisecond then value of a is 100 after that settimeout from event loop is executed
output => 100
*/

//Q84
let a = 10;
let A = 100;
console.log(A);
/* Solution: 
A will be 100
*/

//Q85
let A10 = "blame"
let 10A = "like"
console.log(A10);
console.log(10A);
/* Solution: 
A10 will be blame but 10A will give error because it break variable naming rules
*/

//Q86
let a = "blame";
let a2 = `blame`;
console.log(a===a2);
/* Solution: 
true
a will be equal to a2 because both "" and `` are string and have same values
*/

//Q87
let a = 1;
let c = 2;
console.log(--c === a);
/* Solution: 
--c will be 1 because of predecrement
2 => 2 - 1 => 1
1 === 1 
true
*/

//Q88
let f = 1;
let g = 1;
let h = 2;
console.log((f === g) === --h);
/* Solution: 
--h = 1
1 === 1 === 1
1 === true
false
*/

//Q89
console.log(3 * 3);
console.log(3 ** 3);
console.log(3 *** 3);
/* Solution: 
3 * 3 will be 9
3 ** 3 27
3 *** 3 will throw error
*/

//Q90
console.log(a)
var a;
/* Solution: 
due to hoisting a will be undefined
*/

//Q91
console.log(b);
/* Solution: 
this will throw error because b is not defined 
*/

//Q92
console.log([[[[]]]]);
/* Solution: 
this is a three dimensional array
*/

//Q93
let for = 10;
/* Solution: 
this will give error because for is reserved word in javascript and can't be used for variable names
*/

//Q94
// difference between undefined and not defined
/* Solution: 
when a variable is declare but not initialized it is undefined
when a variable is not declare is called as not defined
let a;  // undefined
a;  // not defined
*/

//Q95
// difference usage of foo , function foo(){} , var foo = function(){}
/* Solution: 
foo is a variable used for storing values
function foo is a function declaration use to define function
var foo is a function expression which can be use as value
*/

//Q96
// When should I use Arrow Functions?
/* Solution: 
when working with array
when creating some reusable code of block
for callback functions
easily and shorter syntax
automatic return
*/

//Q97
// When should I not use Arrow Functions?
/* Solution: 
when you are working with this keyword
when you are working with classes
when you are working with method as object
*/

//Q98
console.log(NaN === NaN);

//Q99
console.log(null == undefined);

//Q100
console.log(true + true + false + false + 2*true);
/* Solution: 
true + true + false + false + 2*true => 1+1+0+0+2*1 -> 1+1+2 => 4
*/
