// //  For loop exercise 
// // Print odd numbers between 1 and 10
// for(let i = 1; i<=10; i++) {
//   i%2 !== 0 && console.log(i)
// }


// //  For loop exercise 
// // Print odd numbers between 1 and 10
// let i = 1
// while(i <= 10) {
//   i%2 !== 0 && console.log(i)
//   i++
// }


// // For..in example
// // Used to iterate all the values of an object
// const person = {
//   name: 'Henry',
//   age: 30,
//   occupation: 'Actor'
// }

// // Key -> in every loop will be name, age, occupation and so on...
// // While person[key] gives the value of that key
// // Eg: in 1st iteration of this loop, key -> name so person['name'] -> Henry
// for(let key in person) {
//   console.log(key, person[key])
// }


// // For..of example
// // Used to iterate all the values of an array
// const fruits = ['Apple', 'Banana', 'Orange', 'Mango']

// for(let fruit of fruits) {
//   console.log(fruit)
// }


// // Write a function that takes two numbers and returns the maximum of the two. 
// function max(a, b) {
//   return a > b ? a : b
// }

// console.log(max(4,3))


// // Write a function that takes two parameters, width and height and return if the device is in landscape or portrait mode.

// function checkMode(width, height) {
//   return width > height ? 'Screen is in landscape mode' : 'Screen is in portrait mode'
// }

// console.log(checkMode(600, 800))
// console.log(checkMode(800, 600))


// // Create a function that accepts a parameter - number
// // Divisible by 3 -> Fizz
// // Divisible by 5 -> Buzz
// // Divisible by both 3 and 5 -> FizzBuzz
// // Not divisible by 3 or 5 -> return input
// // Not a number => ‘Not a number’

// function fizzbuzz(number) {

//   if(typeof number !== 'number') {
//     console.log('Not a number') 
//   }

//   if(number % 3 === 0) {
//     console.log('Fizz') 
//   }
  
//   if(number % 5 === 0) {
//     console.log('Buzz') 
//   }
  
//   if(number % 3 === 0 && number % 5 === 0) {
//     console.log('FizzBuzz') 
//   }

//   if(number % 3 !== 0 && number % 5 !== 0) {
//     console.log(number) 
//   }
// }

// fizzbuzz(30)
// fizzbuzz(5)
// fizzbuzz(3)
// fizzbuzz('10')


// // Create a function that accepts an object,
// // Show the key, value pair in console if the type of the value is a string
// let car = {
//   name: 'Merceds',
//   make: 1997,
//   engineType: '5 Stroke',
//   variants: ['red', 'blue', 'green']
// }

// for(let key in car) {
//   if(typeof car[key] !== 'string') continue; // Continue to next loop if not a string
//   console.log(key, car[key])
// }





// In Class Code: 
// 
// Loops
// We want to print numbers between 1 to 100
// for(let num = 1; num <= 100; num++) {
//   console.log(num)
// }

// Run a for loop between 1 to 10
// Print the odd numbers
// Result => 1, 3, 5, 7, 9

// for(let num = 1; num <= 10; num++) {
//   // num % 2 !== 0 && console.log(num)
//   if(num % 2 !== 0) {
//     console.log(num)
//   }
// }

// Same example to print odd numbers between 1 and 10
// Using while loop
// let i = 1
// while(i <= 10) {
//   if(i % 2 !== 0) {
//     console.log(i)
//   }
//   i++
// }


// For in..example
// const person = {
//   name: 'Henry', // Key: value pair
//   age: 30, // Key: value pair
//   occupation: 'Actor' // Key: value pair
// }

// for(let key in person) {
//   console.log(key, person[key])
// }


// // For in using arrays
// const colors = ['red', 'green', 'blue']
// for (let index in colors) {
//   console.log(colors[index])
// }

// For of
// const colors = ['red', 'green', 'blue']
// for (let color of colors) {
//   console.log(color)
// }


// Write a function that takes two parameters
// And returns the maximum of two
// max(1, 2) -> 2
// ternary operator -> condition ? true : false
// function max(a, b) {
//   if(a === b) {
//     return 'Both numbers are equal, please provide different numbers'
//   }

  // Check condition using normal if else
  // if(a > b) {
  //   return a
  // } else {
  //   return b
  // }

  // Check condition using ternary operator
  // return a > b ? a : b
// }

// console.log(max(2,10))



// Write a function that takes two paramters,
// checkMode -> 2 paramters -> width, height
// return -> whether this device is in landscape or portait mode.

// function checkMode(width, height) {
//   return width > height ? 'landscape' : 'portrait'
// }

// console.log(checkMode(1080, 1920))



// Create a function that accepts one parameter -> number
// If divisible by 3 -> Fizz
// If divisible by 5 -> Buzz
// If divisible by both 3 & 5 -> Fizz Buzz
// If not divisible by both -> return that number
// If not a number -> return 'Not a number'

// function fizzbuzz(number) {
//   // Check type
//   if(typeof number !== 'number') {
//     return 'Not a number'
//   }

//   if(number % 3 === 0 && number % 5 === 0) {
//     return 'Fizz Buzz'
//   }

//   if(number % 3 === 0) {
//     return 'Fizz'
//   }

//   if(number % 5 === 0) {
//     return 'Buzz'
//   }

//   if(number % 3 !== 0 && number % 3 !== 0) {
//     return number
//   }
// }

// console.log(fizzbuzz('asdf'))
// console.log(fizzbuzz(3))
// console.log(fizzbuzz(5))
// console.log(fizzbuzz(30))

// // Another way
// // If statements can run without braces {},
// // If it has only one statement inside

// function fizzbuzz(number) {
//   // Check type
//   if(typeof number !== 'number') 
//     return 'Not a number'

//   if(number % 3 === 0 && number % 5 === 0) 
//     return 'Fizz Buzz'  

//   if(number % 3 === 0) 
//     return 'Fizz'

//   if(number % 5 === 0) 
//     return 'Buzz'

//   if(number % 3 !== 0 && number % 3 !== 0) 
//     return number
// }



// Exercise:
// Create an object,
const car = {
  name: 'BMW',
  year: 1997,
  engine: '5 Gears',
  carColor: 'yellow',
  variants: ['red', 'yellow', 'red']
}

// In key:value pair, if value is of type string, print key:value pair
// Hint: for in...
// Syntax: for(let variable in object_name) {...}
for(let key in car) {
  // console.log(car[key])
  if(typeof car[key] === 'string') 
    console.log(key, car[key])

  // OR,
  // typeof car[key] === 'string' && console.log(key, car[key])
}


// Assignment:
// In this exercise, you will be given a variable, it will be called: age
// You are also given another variable called: typeOfLicense;
// Using an if/else if/else statement assign typeOfLicense to:
// 'Full License' if age is greater than or equal to 16,
// 'Permit' if age is equal to 15,
// 'None' if age is less than 15

















