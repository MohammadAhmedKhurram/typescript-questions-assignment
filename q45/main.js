"use strict";
// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
Object.defineProperty(exports, "__esModule", { value: true });
function makeCar(manufacturer, model, ...options) {
    let car = {
        manufacturer: manufacturer,
        model: model,
    };
    for (let [key, value] of options) {
        car[key] = value;
    }
    return car;
}
let car1 = makeCar("Toyota", "Corolla", ["color", "Blue"], ["sunroof", true]);
let car2 = makeCar("Honda", "Civic", ["color", "Red"], ["navigation", true], ["heatedSeats", true]);
console.log(car1);
console.log(car2);
