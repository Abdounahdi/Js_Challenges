"use strict";

function capitalize(str) {
  let arr = [str.slice(0, 1).toUpperCase(), ...str.slice(1)];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == " ") {
      arr[i + 1] = arr[i + 1].toUpperCase();
    }
  }
  return arr.join("");
}

console.log(capitalize("hello"));
console.log(capitalize("abdou"));
console.log(capitalize("hello abdou"));
