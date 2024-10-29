"use strict";

function humanizedNum(num) {
  const arr = [...(num += "")];
  const numCheck = Number(arr[arr.length - 1]);
  let str = "";
  if (numCheck == 1) str = "st";
  else if (numCheck == 2) str = "nd";
  else if (numCheck == 3) str = "rd";
  else str = "th";
  return arr.join("") + str;
}

console.log(humanizedNum(111));
console.log(humanizedNum(222));
console.log(humanizedNum(333));
console.log(humanizedNum(888));
