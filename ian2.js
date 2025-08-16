// 1. Create a variable using var to store your name
var myName = "Ian Nabunturan"; 
console.log("My name is:", myName);

// 2. Create a variable using let to store your age, but store it as a string
let myAge = "20"; 
console.log("My age (as string):", myAge);

// 3. Create a constant PI with the value 3.1416 and try reassigning it
const PI = 3.1416;
console.log("PI:", PI);

// 4. Create variable boolean isStudent, set it true if age < 25
let isStudent = Number(myAge) < 25 ? true : false;
console.log("Is student?", isStudent);

// 5. Create an object person with nested properties
let person = {
    firstName: "Ian Benedict",
    lastName: "Nabunturan",
    age: 20,
    address: {
        street: "Sta. Marta St.",
        city: "Davao",
        country: "Philippines"
    },
    hobbies: ["coding", "gaming", "sports"]
};
console.log("Person object:", person);

// 6. An array colors containing at least 5 color names (include at least one repeated value)
let colors = ["red", "blue", "green", "yellow", "blue"];
console.log("Colors array:", colors);


// 1. Reverse and Transform
let words = ["apple", "banana", "grape", "mango"];
let transformed = [];

for (let word of words) {
    let reversed = "";
    // reverse manually
    for (let i = word.length - 1; i >= 0; i--) {
        reversed += word[i];
    }
    transformed.push(reversed.toLowerCase());
}

console.log("Original words:", words);
console.log("Transformed words:", transformed);


// 2. Filtering and Counting
let numbers = [12, 45, 67, 23, 90, 32, 11, 9, 28];
let filtered = [];
let count = 0;

for (let num of numbers) {
    if (num % 2 === 0 && num > 20) {
        filtered.push(num);
        count++;
    }
}

console.log(`Found ${count} numbers: [${filtered.join(", ")}]`);
