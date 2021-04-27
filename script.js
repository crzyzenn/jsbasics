//  For loop exercise 
// Print odd numbers between 1 and 10
for(let i = 1; i<=10; i++) {
  i%2 !== 0 && console.log(i)
}


//  For loop exercise 
// Print odd numbers between 1 and 10
let i = 1
while(i <= 10) {
  i%2 !== 0 && console.log(i)
  i++
}


// For..in example
// Used to iterate all the values of an object
const person = {
  name: 'Henry',
  age: 30,
  occupation: 'Actor'
}

// Key -> in every loop will be name, age, occupation and so on...
// While person[key] gives the value of that key
// Eg: in 1st iteration of this loop, key -> name so person['name'] -> Henry
for(let key in person) {
  console.log(key, person[key])
}


// For..of example
// Used to iterate all the values of an array
const fruits = ['Apple', 'Banana', 'Orange', 'Mango']

for(let fruit of fruits) {
  console.log(fruit)
}


// Write a function that takes two numbers and returns the maximum of the two. 
function max(a, b) {
  return a > b ? a : b
}

console.log(max(4,3))


// Write a function that takes two parameters, width and height and return if the device is in landscape or portrait mode.

function checkMode(width, height) {
  return width > height ? 'Screen is in landscape mode' : 'Screen is in portrait mode'
}

console.log(checkMode(600, 800))
console.log(checkMode(800, 600))


// Create a function that accepts a parameter - number
// Divisible by 3 -> Fizz
// Divisible by 5 -> Buzz
// Divisible by both 3 and 5 -> FizzBuzz
// Not divisible by 3 or 5 -> return input
// Not a number => ‘Not a number’

function fizzbuzz(number) {

  if(typeof number !== 'number') {
    console.log('Not a number') 
  }

  if(number % 3 === 0) {
    console.log('Fizz') 
  }
  
  if(number % 5 === 0) {
    console.log('Buzz') 
  }
  
  if(number % 3 === 0 && number % 5 === 0) {
    console.log('FizzBuzz') 
  }

  if(number % 3 !== 0 && number % 5 !== 0) {
    console.log(number) 
  }
}

fizzbuzz(30)
fizzbuzz(5)
fizzbuzz(3)
fizzbuzz('10')


// Create a function that accepts an object,
// Show the key, value pair in console if the type of the value is a string
let car = {
  name: 'Merceds',
  make: 1997,
  engineType: '5 Stroke',
  variants: ['red', 'blue', 'green']
}

for(let key in car) {
  if(typeof car[key] !== 'string') continue; // Continue to next loop if not a string
  console.log(key, car[key])
}




