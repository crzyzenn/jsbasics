// Ternary Operators
// let points = 40;
// console.log(points > 100 ? 'gold' : 'silver')

// points = 110;
// console.log(points > 100 ? 'gold' : 'silver')


// Swapping Variables
// let a = 'red'
// let b = 'blue'
// console.log(a,b)

// let c = a
// a = b
// b = c
// console.log(a,b)


// Exercise #2
// Define a variable loggedIn,
// If it is true, call a function -> ternary operator
// to greet the user (create the function as well)
// If it is false, ask the user to log in

// Hint: 
// Define variable loggedIn,
// function greet -> console.log
// Use ternary operator on loggedIn.

let loggedIn = true

function greet(name) {
  console.log(`Hello ${name}`)
}

// ES6 function
// Syntax - let || const varName = (params...) => {function definition}
const es6Greet = (name) => console.log(`Hello ${name}`)

console.log(loggedIn ? greet('User') : 'Please log in!')
console.log(!loggedIn ? 'Please log in!' : greet('User'))

// Run a for loop from 1-100
// Print those specific numbers
for(let i = 1; i <= 100; i++) {
  console.log(i)
}





