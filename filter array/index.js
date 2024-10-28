"use strict";

function filter(arr) {
  let truthyArr = [];
  for (const element of arr) {
    element ? truthyArr.push(element) : "";
  }
  return truthyArr;
}

console.log(filter([58, "", "abcd", true, null, false, 0]));
