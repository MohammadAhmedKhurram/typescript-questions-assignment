// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

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

// Print the number of people being invited to dinner
console.log(`I am inviting ${myGuests.length} people to dinner.`);

myGuests.pop();
myGuests.pop();

console.log("Final guest list:", myGuests);