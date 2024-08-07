"use strict";
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
Object.defineProperty(exports, "__esModule", { value: true });
function makeShirt(size = "large", text = "I love Typescript") {
    console.log(`The size of the shirt should be ${size}`);
    console.log(`The text written on the shirt should be ${text}`);
}
makeShirt();
makeShirt("medium");
makeShirt("small", "Javascript is awesome!");
