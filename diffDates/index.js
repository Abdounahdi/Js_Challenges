'use strict' ;

function diffDates(date1,date2){
  const firstDate = new Date(date2); 
  const secondDate = new Date(date1); 
  console.log((firstDate-secondDate)/(8.64e+7));
}

diffDates('12/02/2014', '11/04/2014')