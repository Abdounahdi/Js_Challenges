'use strict';

const student = {
  name : "David Rayy",
  sclass : "VI",
  rollno : 12 };

function deletefromObject(obj){
  console.log(obj);
  delete obj.rollno  ; 
  console.log(obj);
}


deletefromObject(student)