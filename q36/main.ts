// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

function makeShirt(size: string, text: string) {
  console.log(`The size of the shirt should be ${size}.`);
  console.log(`The text written on the shirt should be ${text}.`);
}

makeShirt("large", "Boy")