"use strict";

function getWeekInfo(str) {
  const day = ["sun", "mon", "tue", "wed", "thur", "fri", "sat"];
  const dateDay = new Date(
    `${str.slice(3, 5)}/${str.slice(0, 2)}/${str.slice(6)}`
  );
  const dateDayReserved = new Date(
    `${str.slice(3, 5)}/${str.slice(0, 2)}/${str.slice(6)}`
  );
  const dateDayNum = dateDay.getDay();

  if (!dateDay) console.log("not a valid day");
  else {
    const startWeek =
      dateDayNum > 0
        ? new Date(dateDay.setDate(dateDay.getDate() - (dateDayNum - 1)))
        : new Date(dateDay.setDate(dateDay.getDate() - 6));
    const endWeek = new Date(
      dateDayReserved.setDate(dateDayReserved.getDate() + (7 - dateDayNum))
    );
    console.log(
      `${day[startWeek.getDay()]} : ${
        day[startWeek.getDay()]
      }/${startWeek.getMonth()}/${startWeek.getFullYear()} ,${
        day[endWeek.getDay()]
      } : ${
        day[endWeek.getDay()]
      }/${endWeek.getMonth()}/${endWeek.getFullYear()} `
    );
  }
}

getWeekInfo("05/12/2022");
getWeekInfo("30/12/2022 ");
