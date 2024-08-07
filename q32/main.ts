// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.


let currentUsers: string[] = ["Ahmed", "Ali", "Usman", "Abu Bakar", "Hamzah", "Faiq"]

let newUsers: string[] = ["Hasan", "Umair", "Hamzah", "Burhan", "Faiq", "Basit"]

let currentUsersLower = currentUsers.map(user => user.toLowerCase());

for (let i = 0; i < newUsers.length; i++) {
    let newUserLower = newUsers[i].toLowerCase();
    if (currentUsersLower.includes(newUserLower)) {
        console.log(`The username ${newUsers[i]} is already taken. Please enter a new username.`);
    } else {
        console.log(`The username ${newUsers[i]} is available.`);
    }
}