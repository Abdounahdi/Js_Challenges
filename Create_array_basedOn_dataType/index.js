'use strict' ; 
const zipedArr = [['a', 1, true], ['b', 2]]; 

function unzip(arr){
  const numberArr = []
  const stirngArr = []
  const booleanArr = []
  for (const array of zipedArr){
    for (const element of array){
      if (typeof (element) == 'number'){
        numberArr.push(element) ; 
      }else if (typeof (element) == 'string') {
        stirngArr.push(element) ; 
      }else if (typeof (element) == 'boolean') {
        booleanArr.push(element) ; 
      }
    }
  }

  return [stirngArr , numberArr , booleanArr]
}


console.log(unzip(zipedArr))
