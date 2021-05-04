// // Function declaration

// run()

// // Declaration
// function run() {
//   console.log("Running")
// }

// runFunction() // Does not work because JS engine does not hoist fn expressions

// // Expression
// const runFunction = () => {
//   console.log("Running")
// }





// Arguments
// Get the toal sum of all the arguments passed to the function
// function sum() {
//   console.log(arguments)
//   let total = 0

//   // Run a loop through the in-built arguments object
//   for(let number of arguments) {
//     total += number
//   }

//   return total
// }

// const allNumbersSum = sum(1,2,3,4,5,6,7,8,9,10)
// console.log(allNumbersSum)


// Rest operator
// Calculate the multiplication of all the arguments in the function
// function multiply(...args) {
//   let total = 1

//   // Run a loop through the in-built arguments object
//   for(let number of args) {
//     total *= number
//   }

//   return total
// }
// const allNumbersMultiply = multiply(1,2,3,4,5,6,7,8,9,10)
// console.log(allNumbersMultiply)


// Default parameters
// function sum(a,b,c = 5) {
//   // c = c || 5 -> use a default value
//   return a + b + c
// }

// const sumOfThree = sum(1,2)
// console.log(sumOfThree)



// // Getters and setters
// let user = {
//   firstName: 'John',
//   lastName: 'Smith',
//   // Getter function
//   get fullName() {
//     return `${this.firstName} ${this.lastName}`
//   },
//   set fullName(name) {
//     // this.firstName = name.split(' ')[0]
//     // this.lastName = name.split(' ')[1]

//     // ES6 array destructuring
//     // [first, last] = name.split(' ')
//     // this.firstName = first
//     // this.lastName = last

//     [this.firstName, this.lastName] = name.split(' ')
//   }
// }

// user.fullName = 'Henry Shrestha'

// console.log(user)



// // Try Catch
// function sum(a,b) {
//   // Using try catch
//   try {
//     if(typeof a !== 'number' || typeof b !== 'number') 
//       throw 'A and B are not numbers'

//     return a+b
    
//   } catch(error) {
//     console.log(error)
//   }
// }

// // Try catch example
// function getCapitalWord(word) {
//   // Using try catch
//   try {
//     return word.toUpperCase()
//   } catch(error) {
//     console.log('An error has occured ', error)
//   }
// }

// console.log(getCapitalWord(1))


// console.log("This code still runs and does not break")


// Exercise
// Getters and Setters
// let person = {
//   firstName: "John",
//   lastName : "Doe",
//   language : "en",
//   get detail() {
//     return `My name is ${this.firstName} ${this.lastName}, and my language is ${this.language}.`
//   },
//   set detail(detail) {
//     [this.firstName, this.lastName, this.language] = detail.split(' ')
//   }
// }

// console.log(person.detail)
// person.detail = 'Mark Fisherman np'

// console.log(person.detail)


// Arguments
// Write a function that returns all the odd numbers from arguments
// either use argument object inside function,
// or use ...rest operator
// function getOddNumbers(...args) {
//   let arr = []
  
//   for(let number of args) {
//     if(number % 2 === 1) 
//       arr.push(number)
//   }

//   return {array: arr, string: arr.join()}
// }

// const oddNumbers = getOddNumbers(1,2,3,4,5)
// console.log(oddNumbers) // [1,3,5]
// Extra: 1,3,5



// Using array.filter
// function getOddNumber(...args) {
//     let value = args.filter(args => args % 2)
//     return value
// }
// const oddNumbers = getOddNumber(1, 2, 3, 4, 5)
// console.log(oddNumbers)





// Search a blog by title
// use Array.filter()
// String.indexOf(searchValue) -> returns index || -1
const blogPosts = [
  {
    id: 1,
    title: 'Way of life',
    description: 'This is a description' 
  },
  {
    id: 2,
    title: 'Intro to Vue JS',
    description: 'This is a description' 
  },
  {
    id: 3,
    title: 'Intro to React using Next.js',
    description: 'This is a description' 
  }
]

function searchBlog(blog, query) {
  return blog.filter(b => {
    let title = b.title.toLowerCase()
    let q = query.toLowerCase()

    return title.indexOf(q) !== -1
  })
}

const searchedBlog = searchBlog(blogPosts, 'next')

console.log(searchedBlog)
// {
//   id: 2,
//   title: 'Intro to Vue JS',
//   description: 'This is a description' 
// },
// {
//   id: 3,
//   title: 'Intro to React using Next.js',
//   description: 'This is a description' 
// }




