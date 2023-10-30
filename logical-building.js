//Q1
function fruit() {
  console.log(name);
  console.log(price);

  var name = "apple";
  let price = 20;
}

fruit();

//Q2
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

//Q3
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

//Q4
console.warn(+true);
console.warn(typeof +true);

//Q5
console.warn(!"gg");
console.warn(typeof "gg");

//Q6
let data = "size";
const bird = {
  size: "small",
};

console.warn(bird[data]);
console.warn(bird["size"]);
console.warn(bird.size);
console.warn(bird.data);

//Q7
let c = {
  name: "peter",
};

let d = c;
c.name = "peter";
console.log(d.name);

//Q8
var x;
var x = 10;
console.log(x);

//Q9
var x;
let x = 10;
console.log(x);

//Q10
let a = 3;
let b = new Number(3);
console.log(a == b);
console.log(a === b);

//Q11
let name;
nmae = {};
console.log(name);

//Q12
function fruit() {
  console.log("wloof");
}
fruit.name = "apple";
console.log(fruit());

//Q13
function sum(a, b) {
  return a + b;
}
sum(1, "2");

//Q14
let num = 0;
console.log(num++);
console.log(++num);
console.log(num);

//Q15
function getAge(...args) {
  console.log(typeof args);
}
console.log(getAge(21));

//Q16
function getAge2() {
  "use strict";
  age = 12;
  console.log(age);
}

getAge2();

//Q17
const sum = eval("10" * 10 + 5);
console.log(sum);

//Q18
// how long is cool accessible?
sessionStorage.setItem("cool", 21);

//Q19
const obj = { 1: "a", 2: "b", 3: "c" };
obj.hasOwnProperty(1);
obj.hasOwnProperty("1");

//Q20
const obj2 = {
  a: "one",
  b: "second",
  a: "repeated",
};
console.log(obj2);

//Q21
for (let i = 1; i < 5; i++) {
  if (i === 3) continue;
  console.log(i);
}

//Q22
const foo = () => console.log("first");
const bar = () => setTimeout(() => console.log("second"));
const baz = () => console.log("third");

foo();
bar();
baz();

//Q23
const person = { name: "blame" };

function sayHello(age) {
  return `${this.name} ${age}`;
}

sayHello.call(person, 21);
sayHello.bind(person, 21);

//Q24
function sayHi() {
  return (() => 0)();
}
console.log(typeof sayHi());

//Q25
console.log(typeof typeof 1);

//Q26
const numbers = [1, 2, 3];
numbers[9] = 10;
console.log(numbers);

//Q27
const numbers = [1, 2, 3];
numbers[9] = numbers;
console.log(numbers);

//Q28
// everything in javascript is either object or primitive

//Q29
console.log(!!null);
console.log(!!"");
console.log(!!1);

//Q30
setInterval(() => console.log("hi"), 1000);
setInterval(() => console.log("hi"), 1000);
setInterval(() => console.log("hi"), 1000);

//Q31
console.log([..."anil"]);

//Q32
console.log(typeof 3 + 4 + "5");

//Q33
console.log(typeof (3 + 4 + "5"));

//Q34
console.log(typeof []);

//Q35
let data2 = [1, 2, 3].map((num) => {
  if (typeof num === "number") return;
  return num * 2;
});
console.log(data);

//Q36
function getInfo(member) {
  member.name = "blame";
}

const person2 = {
  name: "pro",
};

getInfo(person2);

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

//Q44
console.log(true + +"10");

//Q45
let a = [];
let b = [];
console.log(a == b);
console.log(a === b);

//Q46
let a = [];
let b = a;
console.log(a == b);
console.log(a === b);

//Q47
let a = [10];
let b = [20];
console.log(a[0] == b[0]);
console.log(a[0] === b[0]);

//Q48
let z = [1, 2, 3, 4, 5];
let a = { name: "anil" };
console.log(...z);

//Q49
console.log(typeof NaN);

//Q50
let data = 10 - -10;
console.log(data);

//Q51
const set = new Set([1, 1, 2, 2, 4]);
console.log(set);

//Q52
let data = { name: "blame" };
console.log(delete data.name);

//Q53
let data = { name: "blame" };
console.log(delete data);

//Q54
const data = ["element", "blame", "pro"];
const [y] = data;
console.log(y);

//Q55
const data = ["element", "blame", "pro"];
const [y] = data; //change code to get second element
console.log(y);

//Q56
const data = { name: "blame", exp: 2 };
// get name property without using .

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

//Q60
const name = "blame";
console.log(name());

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

//Q66
// json.parse()?

//Q67
let name = "blame";
function getName() {
  console.log(name);
  let name = null;
}
getName();

//Q68
//Q69
//Q70
