// stack or Heap

/* stack memory used for primitive data type in js. It provides a copy, i.e when 
we change the value original value does not change.

Heap memory used for refrence data type in js
*/

let score = 31;
let anotherScore = score;
anotherScore = 33;

console.log(score);
console.log(anotherScore);

//object

let userOne = {
  email: "wipro.com",
  id: 123,
};
let userTwo = userOne;
userTwo.email = "google.com";

console.log(userOne);
//console.log(userTwo);
