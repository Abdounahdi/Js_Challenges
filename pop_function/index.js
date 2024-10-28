"use strict";

const str = "Abdou";
function removeStr(str, char, index) {
  let arr = [...str];
  let check = false;
  for (const element of arr) {
    if (element == char) {
      check = true;
    }
  }
  if (arr[index] !== char && check) {
    console.log(`${char} dosen’t exist at this position`);
  } else if (!check) {
    console.log(`${char} dosen’t exist in this string`);
  } else {
    arr = arr.join().replaceAll(",", "");
    console.log(arr.replaceAll(char, ""));
  }
}

removeStr(str, "b", 1);
