"use strict";
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
Object.defineProperty(exports, "__esModule", { value: true });
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
let favoriteFruits = ["Mango", "Grapes", "Apple"];
if (favoriteFruits.includes("Mango")) {
    console.log("You really like Mangoes!");
}
if (favoriteFruits.includes("Grapes")) {
    console.log("You really like Grapes!");
}
if (favoriteFruits.includes("Apple")) {
    console.log("You really like Apples!");
}
if (favoriteFruits.includes("Banana")) {
    console.log("You really like Bananas!");
}
if (favoriteFruits.includes("Orange")) {
    console.log("You really like Oranges!");
}
