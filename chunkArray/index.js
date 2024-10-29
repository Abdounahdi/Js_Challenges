"use strict";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function chunkArray(arr, arrNum, arrLen) {
  let newArr = [];
  for (let i = 0; i < arrNum; i++) {
    newArr[newArr.length] = arr.slice(0, arrLen);
    arr = arr.slice(arrLen, arr.length);
  }
  if (arr.length != 0) {
    arr.forEach((element) => {
      newArr[newArr.length] = element;
    });
  }

  return newArr;
}

console.log(chunkArray(arr, 3, 3));
