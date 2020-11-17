const name = "Mark Kokorin";
const age = 18;
const job = "Student";
const city = "Tallinn";
const gender = "Male";

console.log(typeof(name));
console.log(typeof(age));

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
    </ul>
`;

document.body.innerHTML = html;