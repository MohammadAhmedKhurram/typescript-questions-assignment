"use strict";
// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
Object.defineProperty(exports, "__esModule", { value: true });
let cities = [
    {
        name: "Karachi",
        country: "Pakistan",
        population: 15741000,
        famousFor: "Beaches and Port City"
    },
    {
        name: "Tokyo",
        country: "Japan",
        population: 37400068,
        famousFor: "Technology and Skyscrapers"
    },
    {
        name: "New York",
        country: "USA",
        population: 18804000,
        famousFor: "Statue of Liberty and Times Square"
    },
    {
        name: "Paris",
        country: "France",
        population: 11020000,
        famousFor: "Eiffel Tower and Museums"
    },
    {
        name: "Sydney",
        country: "Australia",
        population: 5312000,
        famousFor: "Sydney Opera House and Harbour Bridge"
    },
    {
        name: "Cape Town",
        country: "South Africa",
        population: 433688,
        famousFor: "Table Mountain and Beaches"
    }
];
for (let i = 0; i < cities.length; i++) {
    console.log(`City: ${cities[i].name}`);
    console.log(`Country: ${cities[i].country}`);
    console.log(`Population: ${cities[i].population}`);
    console.log(`Famous For: ${cities[i].famousFor}`);
}
