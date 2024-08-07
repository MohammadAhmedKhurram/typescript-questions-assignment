"use strict";
// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. 
// • Modify your program to print a statement about each animal, such as A dog would make a great pet. 
// • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
Object.defineProperty(exports, "__esModule", { value: true });
let animals = ["Dogs", "Cats", "Bears"];
for (let index = 0; index < animals.length; index++) {
    const element = animals[index];
    if (element == "Dogs") {
        console.log("As a pet dog, you'll experience unmatched loyalty and enthusiasm, with a playful spirit that makes every day an adventure.");
    }
    else if (element == "Cats") {
        console.log("Being a pet cat means enjoying the serene companionship of a soft purr and a gentle nudge, perfect for quiet, cozy moments.");
    }
    else {
        console.log("As a pet bear, you'd benefit from a strong, protective presence and a unique, gentle nature that offers both warmth and security.");
    }
}
console.log("\nAll of these animals are known for their unique and comforting presence, making any of them a special and cherished pet.");
