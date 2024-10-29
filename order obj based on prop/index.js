"use strict";

function orderWith(arrObj, prop, arr) {
  let sortedArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arrObj.length; j++) {
      if (arrObj[j][prop] == arr[i]) {
        sortedArr[sortedArr.length] = arrObj[j];
      }
    }
  }
  arrObj.forEach((element) => {
    let i = 0;
    let check = true;
    while (i < arr.length && check) {
      if (element[prop] == arr[i]) {
        check = false;
      }
      i++;
    }
    if (check) {
      sortedArr[sortedArr.length] = element;
    }
  });

  return sortedArr;
}

const users = [
  { name: "fred", language: "Javascript" },
  { name: "barney", language: "TypeScript" },
  { name: "frannie", language: "Javascript" },
  { name: "anna", language: "Java" },
  { name: "jimmy" },
  { name: "nicky", language: "Python" },
];
console.log(orderWith(users, "language", ["Javascript", "TypeScript", "Java"]));
