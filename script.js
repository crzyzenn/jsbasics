// 6th May


// const user = {
//   name: 'Normal User',
//   age: 30,
//   sayHi() {
//     return this.name
//   }
// }
// console.log(user.sayHi())


// JS, evaluates this during runtime depending on the context
// const user = {
//   name: 'Normal User',
//   age: 30,
// }
// const admin = {
//   name: 'Admin user',
//   age: 30,
// }

// function sayHi() {
//   return this.name
// }

// user.fn = sayHi;
// admin.fn = sayHi;

// console.log(user.fn())
// console.log(admin.fn())


// Changing the value of this using 2nd arugment 
// in forEach fn
// const video = {
//   title: 'Intro to JS',
//   tags: ['a', 'b', 'c', 'd'],
//   showTags() {
//     // forEach(callback fn, value of 'this')
//     this.tags.forEach(function(tag) {
//       console.log(this.title, tag)
//     }, this) 
//   }
// }

// console.log(video.showTags())


// However, not all in built fns provide a 2nd arugment 
// to change the value of 'this'
// So to solve this problem, we assign a temporary 
// variable to this called 'self' or anything u want

// const video = {
//   title: 'Intro to JS',
//   tags: ['a', 'b', 'c', 'd'],
//   showTags() {
//     let self = this
//     // forEach(callback fn, value of 'this')
//     this.tags.forEach(function(tag) {
//       console.log(self.title, tag)
//     }) 
//   }
// }

// console.log(video.showTags())


// // Another solution, is to use bind
// const video = {
//   title: 'Intro to JS',
//   tags: ['a', 'b', 'c', 'd'],
//   showTags() {
//     this.tags.forEach(function(tag) {
//       console.log(this.title, tag)
//     }.bind(this)) 
//   }
// }

// console.log(video.showTags())


// // Best solution to this problem, is to use arrow functions
// const video = {
//   title: 'Intro to JS',
//   tags: ['a', 'b', 'c', 'd'],
//   showTags() {
//     this.tags.forEach((tag) => {
//       console.log(this.title, tag)
//     }) 
//   }
// }

// console.log(video.showTags())




// Revision with exercises:

const movies = [
  {
    title: 'a', year: 2018, rating: 4.5
  },
  {
    title: 'b', year: 2018, rating: 4.7
  },
  {
    title: 'c', year: 2018, rating: 3
  },
  {
    title: 'd', year: 2017, rating: 4.5
  },
  {
    title: 'e', year: 2018, rating: 4.1
  },
  {
    title: 'f', year: 2017, rating: 4.5
  },
]

// All the movies in 2018 with rating > 4
// Sort them by their rating -> descending order and pick their
// title

// Hint: movies.filter().sort().map()

// console.log(movies.filter(movie => movie.year === 2018 && movie.rating > 4)
//                   .sort((a, b) => a.rating - b.rating)
//                   .map(movie => movie.title))



// Write a program to print the current time every second

// setInterval(()=>{
//   let today = new Date()
//   // console.log(`The current time is: ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`);
//   console.log(`The current time is: ${today.toLocaleTimeString()}`);
// },1000)


// Write a JavaScript fn -> 
// formatString(string, capitalize = true / false)
// ->true first letter is capital followed by the rest small letters
// ->false first letter is small followed by the rest small letters

// formatString('hELLO world', false) // -> hello world
// formatString('hELLO world', true) // -> Hello world


// const formatString = (string, capitalize)=>{
//     // if (capitalize){
//     //     return string.charAt(0).toUpperCase()+string.slice(1).toLowerCase();
//     // } else{
//     //     return string.toLowerCase();
//     // }

//     // Using ES6 destructuring
//     [firstLetter, ...restLetters] = string
//     return capitalize ? firstLetter.toUpperCase()+restLetters.join('').toLowerCase() 
//                       : firstLetter.toLowerCase()+restLetters.join('').toLowerCase()
// }

// console.log(formatString("hello World", false));


// Write a JavaScript program to get a random element from an array.

// const arr = [1,2,3,4,5]

// function getRandomElement(array) {
//   let randomIndex = Math.floor(Math.random() * array.length) // Gets random number between 0 and array.length 5 -> 5 not included
//   return array[randomIndex]
// }

// console.log(getRandomElement(arr)) // Print random element every time called.
// // Hint - get random number between 0 and 4 -> Math.floor(Math.random() * 5)



//  Write a JavaScript function to check whether an object contains given property.
// And print the property and its value if it exists

const person = {
  firstName: 'Henry',
  lastName: 'Lown',
  age: 30,
}

function checkProperty(object, query) {
  for(const key in object) {
    // If exists return value
    if(key === query) {
      return `${query}: ${object[query]}`
    }
  }

  return 'Property does not exist in the object'
}

console.log(checkProperty(person, 'firstName'))
console.log(checkProperty(person, 'lastName'))
console.log(checkProperty(person, 'age'))
console.log(checkProperty(person, 'occupation'))

