// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// Spread Operator...............................
function sum(x, y, z) {
  return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers));

// Array Destructuring...............................

const foo = ['one', 'two', 'three'];
const [one, two, three] = foo;

console.log(one); // "one"
console.log(two); // "two"
console.log(three); // "three"

// Swapping variables...............................

let a = 1;
let b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1

// Object Destructuring...............................

const o = { p: 42, q: true };
const { p, q } = o;

console.log(p); // 42
console.log(q); // true

// copying an Array...............................
let fruits = ['Apple', 'Orange', 'Banana'];

let newFruitArray = [...fruits];

console.log(newFruitArray); // ['Apple','Orange','Banana']

// Concatenating arrays...............................

let arr1 = ['A', 'B', 'C'];

let arr2 = ['X', 'Y', 'Z'];

let result = [...arr1, ...arr2];

console.log(result); // ['A', 'B', 'C', 'X', 'Y', 'Z']

// Async with fetch ........................
/*
const githubRequest = async (loginName) => {
  try {
    var response = await fetch(
      `http://api.github.com/users/${loginName}/followers`
    );
    var json = await response.json();
    var followerList = json.map((user) => user.login);
    console.log(followerList);
  } catch (e) {
    console.log("Data didn't load", e);
  }
};

//githubRequest('eveporcello');
githubRequest('saimv');
*/

// Promises...............................

/*
const delay1 = (seconds) => {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000);
  });
};

console.log('Zero seconds wait');
delay1(1).then(() => console.log('One seconds wait 1'));
delay1(5).then(() => console.log('Five seconds wait 1'));
*/

// Async() and await()..................................

/*
const delay = (seconds) => {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
};

const countToFive = async () => {
  console.log('zero seconds wait');
  await delay(2);
  console.log('Two seconds wait');
  await delay(5);
  console.log('Five seconds wait');
};

countToFive();
*/

// Loading data with fetch()...............................

// const getPeopleInSpace = () =>
//   fetch('http://api.open-notify.org/astros.json').then((res) => res.json());

// getPeopleInSpace().then(console.log);

// for in and for of......................................
let list = [4, 5, 6];

for (let i in list) {
  console.log(i); // "0", "1", "2",
}

for (let i of list) {
  console.log(i); // "4", "5", "6"
}

let list2 = { a: 4, b: 5, c: 6 };
for (let i in list2) {
  console.log(i, list2[i]); // "a 4 ", "b 5", "c 6",
}
