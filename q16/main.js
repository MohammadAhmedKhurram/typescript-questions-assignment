"use strict";
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
Object.defineProperty(exports, "__esModule", { value: true });
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let myGuests = ["Burhan", "Arfat", "Hasan"];
for (let i = 0; i < myGuests.length; i++) {
    console.log(`Dear ${myGuests[i]}! I would like to invite you to join me for dinner.`);
}
let guestWhoCantCome = "Hasan";
console.log(`Unfortunately! ${guestWhoCantCome} cannot come!`);
let newGuest = "Umair";
myGuests.splice(2, 1, "Umair");
for (let i = 0; i < myGuests.length; i++) {
    console.log(`Dear ${myGuests[i]}! I would like to invite you to join me for dinner.`);
}
for (let i = 0; i < myGuests.length; i++) {
    console.log(`Dear ${myGuests[i]}! I've just found a bigger dinner table.`);
}
myGuests.unshift("Usman");
myGuests.splice(2, 0, "Ali");
myGuests.push("Azhar");
for (let i = 0; i < myGuests.length; i++) {
    console.log(`Dear ${myGuests[i]}! I would like to invite you to join me for dinner.`);
}
