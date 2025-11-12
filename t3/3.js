'use strict';
const names = ['John', 'Paul', 'Jones'];

const target = document.getElementById("target");

let addingNames = '';

for (let i = 0; i < names.length; i++) {
  addingNames += "<li>" + names[i] + "</li>"

  target.innerHTML = addingNames;
}

