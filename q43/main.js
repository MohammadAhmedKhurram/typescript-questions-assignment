"use strict";
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
Object.defineProperty(exports, "__esModule", { value: true });
let magicianNames = ["Harry Houdini", "David Copperfield", "Criss Angel"];
function makeGreat(magicianNames) {
    for (let index = 0; index < magicianNames.length; index++) {
        magicianNames[index] = magicianNames[index] + " the Great";
    }
}
function showMagicians(magicianNames) {
    for (let index = 0; index < magicianNames.length; index++) {
        const element = magicianNames[index];
        console.log(element);
    }
}
// makeGreat(magicianNames);
// showMagicians(magicianNames);
console.log(magicianNames);
