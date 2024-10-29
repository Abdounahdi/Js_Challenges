"use strict";

function swapcase(str) {
  const arr = [...str];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i].toUpperCase()) arr[i] = arr[i].toLowerCase();
    else if (arr[i] == arr[i].toLowerCase()) arr[i] = arr[i].toUpperCase();
  }
  return arr.join("");
}

console.log(swapcase("AaBbc"));
