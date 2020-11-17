console.log("Hello from script!")

const name = "Harry Potter";
const age = 18;
const job = "Wizard";
const city = "London";
const gender = "Male";

console.log(typeof(name));
console.log(typeof(age));

function hello(){
    return "hello";
}

//Arrays
const fruit = ["apple", "banana", "orange", "pear"];
console.log(fruit);
//add an element to the array
fruit.push("lemon");
console.log(fruit);
//to sort an array
console.log(fruit.sort());
//delete the very first element
fruit.shift();
console.log(fruit);
//delete the very last element
fruit.pop();
console.log(fruit);

//loop through the array
fruit.forEach(item => {
    console.log("Fruit from array: ", item);
});

//Date and Time
const today = new Date();
let todayData = today.getDate();
console.log(todayData);
let todayMonth = today.getMonth();
console.log(todayMonth);
let todayYear = today.getFullYear();
console.log(todayYear);
//let fullDate = today.toLocaleDateString("en-US");
let options = {weekday: "long", year: "numeric", month: "long", day: "numeric"};
let fullDate = today.toLocaleDateString("en-US", options);
console.log(fullDate);

//templates literals
const html = `
    <h1> ${fullDate} </h1>
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li>Gender: ${gender}</li>
        <li> ${name} says ${hello()}</li>
    </ul>
`;

document.body.innerHTML = html;