// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.


let userName: string[] = ["Admin", "Asad", "Ahmed", "Zeshaan", "Admin2", "Qaiser"]



for (let i = 0; i < userName.length; i++) {
    const greeting = userName[i];
    if (greeting == "Admin" ) {
        console.log("Hello admin, would you like to see a status report?");
    }
    else if (greeting == "Admin2" ) {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${greeting}, thank you for logging in again.`);
    }
}

if (userName.length === 0) {
    console.log("We need to find some users!");
}

userName = [];

if (userName.length === 0) {
    console.log("We need to find some users!");
}
