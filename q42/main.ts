// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

let magicianNames: string[] = ["Harry Houdini", "David Copperfield", "Criss Angel"];

function makeGreat(magicianNames: string[]) {
    for (let index = 0; index < magicianNames.length; index++) {
        magicianNames[index] = magicianNames[index] + " the Great";
    }
}

function showMagicians(magicianNames: string[]) {
    for (let index = 0; index < magicianNames.length; index++) {
        const element = magicianNames[index];
        console.log(element);
    }
}

makeGreat(magicianNames);

showMagicians(magicianNames);

