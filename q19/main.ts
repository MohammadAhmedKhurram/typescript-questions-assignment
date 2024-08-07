// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

let myGuests: string [] = ["Burhan","Arfat","Hasan"];

for (let i=0; i<myGuests.length; i++){
    console.log(`Dear ${myGuests[i]}! I would like to invite you to join me for dinner.`)
}

let guestWhoCantCome: string = "Hasan";
console.log(`Unfortunately! ${guestWhoCantCome} cannot come!`);

let newGuest = "Umair";
myGuests.splice(2,1,"Umair")

for (let i=0; i<myGuests.length; i++){
    console.log(`Dear ${myGuests[i]}! I would like to invite you to join me for dinner.`)
}

for (let i=0; i<myGuests.length; i++){
    console.log(`Dear ${myGuests[i]}! I've just found a bigger dinner table.`)
}

myGuests.unshift("Usman")
myGuests.splice(2,0,"Ali")
myGuests.push("Azhar")

for (let i=0; i<myGuests.length; i++){
    console.log(`Dear ${myGuests[i]}! I would like to invite you to join me for dinner.`)
}

console.log("I can invite just two people for dinner!");

while (myGuests.length > 2) {
    let removedGuest = myGuests.pop();
    if (removedGuest) {
        console.log(`Dear ${removedGuest}! I'm sorry, I cannot invite you to the dinner.`);
    }
}

for (let i = 0; i < myGuests.length; i++) {
    console.log(`Dear ${myGuests[i]}! You are still invited to join me for dinner.`);
}

myGuests.pop();
myGuests.pop();

console.log("Final guest list:", myGuests);