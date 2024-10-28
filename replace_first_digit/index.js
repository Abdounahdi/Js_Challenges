"use strict";

const stringtoreplace = "hello1people2world";

function replaceFirstDigit(str) {
  let check = false;
  let arr = [...str];
  let digit = "";
  let i = 0;
  while (!check && i < arr.length) {
    if (str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57) {
      check = true;
      digit = arr[i];
    }
    i++;
  }
  if (check) {
    console.log(str.replace(digit, "$"));
  }
}

replaceFirstDigit(stringtoreplace);
