"use strict";

const ar = ["thakfetcharika", "I need programing", "NHB FREE DINNER"];

function longestStr(arr) {
  let max = arr[0].length;
  for (const str of arr) {
    if (str.length > max) {
      max = str.length;
    }
  }
  return max;
}

console.log(longestStr(ar));
