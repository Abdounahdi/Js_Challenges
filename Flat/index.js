"use strict";

function flat(str) {
  let check = true;
  if (typeof str !== "string") {
    return "it must be a string";
  } else {
    const arr = [...str];
    for (const char of arr) {
      if (char == char.toUpperCase()) check = false;
    }
  }
  return check;
}

console.log(flat("JavaScriptExercises"));
console.log(flat("javascriptexercises"));
console.log(flat(123));
