// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

let magicianNames: string[] = ["Harry Houdini", "David Copperfield", "Criss Angel"];

function showMagicians(magicianNames: string[]) {
    for (let index = 0; index < magicianNames.length; index++) {
        const element = magicianNames[index];
        console.log(element);
    }
}

showMagicians(magicianNames)