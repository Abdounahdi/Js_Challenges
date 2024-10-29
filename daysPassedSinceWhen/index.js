'use strict';

function daysPassed(date){
  const since = new Date(date.getFullYear(), 0, 0)
  console.log((date - since)/ (8.64e+7));
}


console.log(daysPassed(new Date(2015, 0, 15)));
console.log(daysPassed(new Date(2015, 11, 14)))