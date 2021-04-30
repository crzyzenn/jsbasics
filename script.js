// 30Th April

// Array.push
// let numbers = [1,2]
// numbers.push(3,4)
// numbers.push(5,6,7,8,2)



// // Array.unshift
// numbers.unshift(0)

// // Array.splice
// // (startIndex, number to remove, .... elements)
// numbers.splice(3, 0, 'apple', 'orange')

// // console.log(numbers)


// // Array.indexOf -> returns the index of
// // where the element exists in the array
// let indexOf7 = numbers.indexOf('orange')
// // console.log(indexOf7)

// // Array.lastIndexOf 
// // Returns the last known position of the 
// // specified element in the array
// let lastIndexOf2 = numbers.lastIndexOf(2)
// // console.log(lastIndexOf2)

// // Array.includes
// // Returns whether the element exists or not
// // true / false
// let includesOrange = numbers.includes(100)
// // console.log(includesOrange)


// // Array.findIndex
// let orangeIndex = numbers.findIndex(function(number) {
//   return number === 'orange'
// })

// console.log(numbers, orangeIndex)


// Finding reference types in an array
// Array.find
// We can find the reference value in 
// an array 
let courses = [
  {
    id: 1,
    name: 'a'
  },
  {
    id: 2,
    name: 'b'
  }
]

// callback function -> regular function
// const findingCourse = courses.find(function(course) {
//   return course.id === 1
// })

// callback function -> arrow function
// const findingCourse = courses.find((course) => {
//   return course.id === 1
// })

// callback function -> arrow function -> optimized version of above
// const findingCourse = courses.find(course => course.id === 2)

// console.log(findingCourse)


// Array.splice
// Removes an element or multiple elements from an array from the 
// specified index

let numbersArray = [1,2,3,4,5,6]

// Returns the removed elements from the array
// const removeNumbers = numbersArray.splice(3, 2)

// console.log(removeNumbers, numbersArray)




// Removing elements from an array
// 1st way -> fastest way and easiest 
// numbersArray = []

// 2nd way -> setting length to 0
// numbersArray.length = 0

// 3rd way -> using splice method
// numbersArray.splice(0, numbers.length)

// 4th way
// while(numbersArray.length > 0) {
//   numbersArray.pop()
// }


// Combining arrays
// let cars = ['BMW', 'Lexus', 'Tesla', 'Toyota']
// let year = [1995, 1997, 2015, 2021]
// let numbers = [1,2,3,4,5]
// let fruits = ['appple', 'banana', 'mango']

// // Combine year, numbers and fruits in the cars Array
// // let combinedArray = cars.concat(year, numbers, fruits)


// // Combine year, numbers and fruits in the cars Array using ES6 - 2015
// let combinedArray = [...cars, ...year] // I think this is the easiest way

// console.log(combinedArray)




// Slicing an array
// let cars = ['BMW', 'Lexus', 'Tesla', 'Toyota']

// // We can copy /clone an array
// let copiedCars = cars.slice()
// console.log(copiedCars)

// We can copy the portion of an array
// let copiedPortion = cars.slice(0,2)
// console.log(cars, copiedPortion, cars)


// Exercise
const numbers = [1,2,3,4]
// numbers.forEach(function(number) {
//   console.log(number)
// })

// Convert this to ES6 arrow function
// Hint: () => {...}
// function() {...}
// numbers.forEach(number => {
//   console.log(number)
// })

//numbers.forEach(number => console.log(number))


// Get the index of the elements as well
// let cars = ['BMW', 'Lexus', 'Tesla', 'Toyota']
// cars.forEach(function(value, index) {
//   console.log(value, index)
// })

// Using ES6 arrow function
// cars.forEach((value, index) => console.log(value, index))


// Array join
// let cars = ['BMW', 'Lexus', 'Tesla', 'Toyota']
// console.log(cars.join()) // By Default, array elements are joined by comma (,)
// console.log(cars.join(',')) 
// console.log(cars.join(', ')) 
// console.log(cars.join('|')) 


// Array split
// let cars = ['BMW', 'Lexus', 'Tesla', 'Toyota']
// let joinedCars = cars.join('|') // By Default, array elements are joined by comma (,)

// let splittedCars = joinedCars.split('|')
// console.log(splittedCars)


// Exercise:

// Prints all the elements from start to end
// Eg: arrayFromRange(1, 5) -> 1,2,3,4,5 
function arrayFromRange(start, end) {
  for(let i = start; i <= end; i++) {
    console.log(i)
  }
} 

const numbersInRange = arrayFromRange(1,100)
console.log(numbersInRange)


// Alternative -> Uusing Array.push()
// let arr = []
// function arrayFromRange(start, end) {
//   for(let i = start; i <= end; i++) {
//     arr.push(i)
//   }
// } 
// arrayFromRange(1,100)

// // Loop arr
// for(let element of arr) {
//   console.log(element)
// }



// Exercise 2:
const numbers = [1,2,3,4,1,1]

function except(array, excluded) {
  // Write your code...
}

const excludedNumbers = except(numbers, [1,2]) 
console.log(excludedNumbers) // Result => [3,4]
















