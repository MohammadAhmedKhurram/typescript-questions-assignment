// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var myGuests = ["Burhan", "Arfat", "Hasan"];
for (var i = 0; i < myGuests.length; i++) {
    console.log("Dear ".concat(myGuests[i], "! I would like to invite you to join me for dinner."));
}
