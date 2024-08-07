"use strict";
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
Object.defineProperty(exports, "__esModule", { value: true });
let personName = "Muhammad";
let lowercaseName = personName.toLowerCase();
console.log(lowercaseName);
let uppercase = personName.toUpperCase();
console.log(uppercase);
let titlecase = personName.replace(/\b\w/g, (char) => char.toUpperCase());
console.log(titlecase);
