"use strict";
const zipedArr1 = [
  ["a", 1, true],
  ["b", 2],
];
const zipedArr2 = [
  ["a", 1, true],
  ["b", 2, false],
];

function unzip(arr) {
  const numberArr = [];
  const stirngArr = [];
  const booleanArr = [];
  for (const array of arr) {
    for (const element of array) {
      if (typeof element == "number") {
        numberArr.push(element);
      } else if (typeof element == "string") {
        stirngArr.push(element);
      } else if (typeof element == "boolean") {
        booleanArr.push(element);
      }
    }
  }

  return [stirngArr, numberArr, booleanArr];
}

console.log(unzip(zipedArr1));
console.log(unzip(zipedArr2));
