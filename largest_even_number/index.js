'use strict'; 

const arr= [1,2,3,4,6,879,13,56] ; 

function largestEvenNumber(arr){
  let even = [];
  for (const num of arr){
    if ((num%2 ) == 0 ){
      even.push(num)
    }
  }
  let max = even[0]; 
  for (const num of even){
    if (num>max)max=num; 
  }
  return max ; 
}


console.log(largestEvenNumber(arr));