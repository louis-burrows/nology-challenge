let louis = "making a website";

let result = `louis is ${louis}`;

console.log(result);


const introduction = (name) => {
 return "Hello, " + name; 
 };

const input = introduction("louis");
console.log(input);


// random number generator 0-100
const random = Math.random();
console.log(Math.round(random * 100));


// change background below, overwrite what is there
// const backgroundChange = document.querySelector('body');
// backgroundChange.setAttribute('style', 'background-color: blue;');


// //this shows all the active styles within the below selected element
const body = document.querySelector('body');
console.log(body.style);


// how to add a style to current ones
// body.style.backgroundColor = 'crimson'

body.classList.add('flowers') //adds class of flowers
body.classList.remove('plain') // removes class of flowers

// below is trying to get the user name from index.html, and display it on louis-main.html

function hello() {
let username = document.getElementById("name").value;
document.write("hello," + username);
}

console.log(hello);