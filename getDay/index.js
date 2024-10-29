"use strict";

function getDay(str) {
  const weekDays = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thirsday",
    "friday",
    "saturday",
  ];
  const dateDay = new Date(
    `${str.slice(3, 5)}/${str.slice(0, 2)}/${str.slice(6)}`
  ).getDay();
  if (dateDay !== NaN) console.log(weekDays[dateDay]);
}

getDay("07/11/2000");
getDay("11/06/2017");
