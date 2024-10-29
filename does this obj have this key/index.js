"use strict";

function isPropExist(obj, key) {
  console.log("checking");
  return obj[key] ? true : false;
}

const obj1 = { name: "alison", age: 26, role: "developer" };
console.log(isPropExist(obj1, "name"));

const obj2 = { name: "ali", age: 26, role: "developer" };
console.log(isPropExist(obj2, "password"));
