console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
const firstName = "Wil";
let lastName = "Ledbetter";

var age = "26";
let isDone;

// Exercise 2
let fullName = firstName + " " + lastName;
let templateFullName = `${firstName} ${lastName}`
console.log("fullName: ", fullName)
console.log("templatefullName: ", templateFullName)

// Exercise 3
let myStory;
let city = "Birmingham, AL";
let pasttime = "producing music/audio engineering, painting/multimedia art, and outdoors exploration/hiking";

myStory = `My name is ${fullName}. I live in ${city}. I like ${pasttime}. `;

console.log(myStory);