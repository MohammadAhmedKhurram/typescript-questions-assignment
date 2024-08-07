// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName: string = "Muhammad";

let lowercaseName: string = personName.toLowerCase();
console.log(lowercaseName);

let uppercase: string = personName.toUpperCase();
console.log(uppercase);

let titlecase: string = personName.replace (/\b\w/g, (char) => char.toUpperCase());
console.log(titlecase); 

