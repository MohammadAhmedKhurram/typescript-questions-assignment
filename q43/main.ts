// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.


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

