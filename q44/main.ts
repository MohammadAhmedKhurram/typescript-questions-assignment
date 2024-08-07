//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function makeSandwich(items: string[]) {
    console.log("Sandwich order summary:");
    for (let index = 0; index < items.length; index++) {
        console.log(`- ${items[index]}`);
    }
    console.log("\nEnjoy your sandwich!\n");
}

makeSandwich(["Lettuce", "Tomato", "Cheese"]);
makeSandwich(["Turkey", "Bacon", "Avocado", "Lettuce"]);
makeSandwich(["Peanut", "Butter", "Jelly"]);