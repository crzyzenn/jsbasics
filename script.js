// Using sort
// let numbers = [5,3,4,1,9,10]

// let ascSortedNumbers =  numbers.sort()

// for(let element of numbers) {
//   console.log(element, ' ', element.toString().charCodeAt(0))
// }


// let letters = ['a', 'z', 'c', 'd']
// let ascSortedLetters = letters.sort()
// let descSortedLetters = letters.reverse()
// console.log(ascSortedLetters, descSortedLetters)

// let descSortedNumbers = numbers.reverse()
// console.log(ascSortedNumbers)


// Using comparison function
// let numbers = [5,3,4,1,9,10]

// // Ascending sort
// let sortedNumbers = numbers.sort(function(a, b) {
//   if(a < b) return -1
//   if(a > b) return 1
//   else return 0
// })

// Asc
// let sortedNumbers = numbers.sort(function(a, b) {
//   return a - b
// })

// // ES6 - Asc
// let ascEs6SortedNumbers = [...numbers].sort((a,b) => a - b)
// let descEs6SortedNumbers = [...numbers].sort((a,b) => b - a)

// console.log(ascEs6SortedNumbers, descEs6SortedNumbers)


const cars = [
  {
    name: 'BMW',
    year: 1997,
  },
  {
    name: 'toyota',
    year: 2021
  },
  {
    name: 'Volkswagon',
    year: 1995
  },
  {
    name: 'Tesla',
    year: 1980
  },
]

// Sort by year
// let ascSortedCars = cars.sort((a,b) => b.year - a.year)

// Sort by car name ascending
// let ascSortedCarsByName = cars.sort((a, b) => {
//   if(a.name < b.name) return -1
//   if(a.name > b.name) return 1
//   else return 0
// })
// console.log(ascSortedCarsByName)

// Sort by car name descending
// let descSortedCarsByName = cars.sort((a, b) => {
//   if(a.name < b.name) return 1
//   if(a.name > b.name) return -1
//   else return 0
// })

// console.log(descSortedCarsByName)


// Solve ASCII issue
// We convert the string that we compare to lower case / to upper case.
// let ascSortedCarsByName = cars.sort((a, b) => {
//   let carA = a.name.toLowerCase()
//   let carB = b.name.toLowerCase()
//   if(carA < carB) return -1
//   if(carA > carB) return 1
//   else return 0
// })

// console.log(ascSortedCarsByName)


// Testing array
// Array.every()
// let numbers = [1,2,3,4,5,-1]

// let testIfGtThanZero = numbers.every(function(number) {
//   return number >= 0
// })
// console.log(testIfGtThanZero)

// Array.some()
// let numbers = [-1,2,3,4,5,-1]
// let testIfGtThanZero = numbers.some(function(number) {
//   return number >= 0
// })

// console.log(testIfGtThanZero)


// Let's filter the numbers which are greater than 5
// let numbers = [1,2,3,4,5,6,7,9]
// // let filteredNumbers = numbers.filter(function(number) {
// //   return number > 5
// // })

// let filteredNumbers = numbers.filter((number) => number > 5)

// console.log(filteredNumbers)




// Restaurants list JSON
const restaurantList = [
  {
    name: 'X & Y Restaurant',
    open: false
  },
  {
    name: 'Belwood Restaurant',
    open: true
  },
  {
    name: "Mama Hong's Restaurant",
    open: true
  },
  {
    name: 'Tom Restaurant',
    open: false
  },
]


// Get all the restaurants that are open
// let openRestaurants = restaurantList.filter((restaurant) => restaurant.open)
// let closedRestaurants = restaurantList.filter((restaurant) => !restaurant.open)

// console.log(openRestaurants, closedRestaurants)


// let numbers = [1,2,3,4,5,-1]

// let filterdNumbers = numbers.filter(n => n >= 0) // [1,2,3,4,5]


// let numbersMapped = filterdNumbers.map(function(n) {
//   return `<li>${n}</li>` // Template literal
//   // return '<li>' + n + '</li>'
// })

// console.log(filterdNumbers, numbersMapped)


// Multiply each filtered numbers by 5
// 1st -> number -> 1 -> 1 * 5 = 5 -> [5]
// 2nd -> number -> 2 -> 2 * 5 = 10 -> [5, 10]
// 3rd -> number -> 3 -> 3 * 5 = 15 -> [5, 10, 15]
// ...
// 5th -> number -> 5 -> 5 * 5 = 25 -> [5, 10, 15, 20, 25]

// let multipliedByFive = filterdNumbers.map(number => {
//   return number * 5
// })

// console.log(multipliedByFive)


// Reduce
// Get the multiplication of all the numbers in an array

// let reduceTestArray = [2,3,4,5,6]

// let multipliedNumber = reduceTestArray.reduce(function(accumulator, currentValue) {
//   return accumulator + currentValue
// }, 0)

// console.log(multipliedNumber)



// Count the number of occurences of a search element in an array

// function countOccurences(array, searchElement) {
//   let occurence = 0

//   // Loop inside the array
//   for(let element of array) {
//     // if(searchElement === element) occurence++
//     // OR, use AND operator
//     searchElement === element && occurence++
//   }

//   return occurence
// }

// const numbers = [1,2,3,4,1,1,1,1,2,2,2]
// const numberOneOccurence = countOccurences(numbers, 2)
// console.log(numberOneOccurence)




// 10 mins.
// Given an array of people objects, return a new array that has filtered out 
// all those who don't belong to the club.

// function peopleWhoBelongToTheIlluminati(arr){
//   return arr.filter(person => person.member)
//   // return arr.filter(person => {
//   //   return person.member === true
//   // })
// }
// // test
// const peopleInAllGroups = [
//   { name: "Angelina Jolie", member: true },
//   { name: "Eric Jones", member: false },
//   { name: "Paris Hilton", member: true },
//   { name: "Kayne West", member: false },
//   { name: "Bob Ziroll", member: true }
// ]
// console.log(peopleWhoBelongToTheIlluminati(peopleInAllGroups));



// 2) Capitalize each of an array of names
// function capitalizeNames(arr){
//   let capitalNames = arr.map(name => {
//     // console.log(name, ' ', name.charAt(0), name.charAt(0).toUpperCase(), name.slice(1).toLowerCase())
//     let firstCharacter = name.charAt(0).toUpperCase()
//     let remainingCharacters = name.slice(1).toLowerCase()
//     return firstCharacter + remainingCharacters
//   })

//   return capitalNames
// }

// Using for loop
function capitalizeNames(arr){
  let capitalizedArray = []
  for(let value of arr){
      capitalizedArray.push(`${value.charAt(0).toUpperCase()}${value.slice(1).toLowerCase()}`)
  }
  return capitalizedArray
}

let array = ["john", "JACOB", "jinGleHeimer", "schmidt"] // John
console.log(capitalizeNames(array))


// 3) Make an array of numbers that are doubles of the first array
function doubleNumbers(arr){
  // ES6
  return arr.map(num => num * 2)
  // return arr.map(function(num) {
  //   return num * 2
  // })
}

console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]



// Functions
// let vs var
// Hoisting
// Try catch
// Local vs global scope - Scoping
