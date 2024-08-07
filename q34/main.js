"use strict";
// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
Object.defineProperty(exports, "__esModule", { value: true });
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
let favoritePizzaFlavors = ["Margherita", "Pepperoni", "BBQ Chicken"];
for (let index = 0; index < favoritePizzaFlavors.length; index++) {
    const element = favoritePizzaFlavors[index];
    console.log(`I really like ${element} pizza.`);
}
console.log("I love pizza so much! It's one of my favorite foods. Whether it's a classic Margherita or a spicy Pepperoni, pizza always hits the spot. BBQ Chicken pizza has such a unique and delicious flavor that it's always a top choice. There's just something special about sharing a pizza with friends and family.");
