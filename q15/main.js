"use strict";
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
Object.defineProperty(exports, "__esModule", { value: true });
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.
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
