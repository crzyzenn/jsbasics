// // Traditional way
// let radius = 1
// let x = 1
// let y = 1

// // Objects
// let circle1 = {
//   radius: 1,
//   x: 1,
//   y: 1,
//   // If a function does not return anything,
//   // the result is undefined
//   draw: function() {
//     console.log("Draw")
//     // changes
//   },
//   move: function() {
//     console.log("Draw")
//   }
// }


// // Factory functions
// function createCircle(x, y, radius) {
//   // Static data
//   return {
//     radius: radius,
//     x: x,
//     y: y,
//     // If a function does not return anything,
//     // the result is undefined
//     draw: function() {
//       console.log("Draw")
//       // changes
//     },
//     move: function() {
//       console.log("Draw")
//     }
//   }
// }

// const circle1 = createCircle(1, 5, 20)
// const circle2 = createCircle(5, 10, 50)
// console.log(circle1, circle2)


// Constructor function
// // Convention
// Camel Notation -> createCircle -> factory functions
// Pascal Notation -> CreateCircle -> constructor function

// function Circle(x, y, radius) {
//   this.x = x
//   this.y = y
//   this.radius = radius
// }

// const circle1 = new Circle(1,2, 15)
// console.log(circle1)


// Cloning an object
// Example -> There are 3 ways: 
let circle = {
  x: 1,
  y: 1,
  radius: 15
}

let car = {
  name: 'BMW',
  make: 1997
}

let another = {}

// // 1st way
// for(let key in circle) {
//   // 1st loop:
//   // another['x'] = 1
//   // another['y'] = 1
//   // another['radius'] = 15
//   another[key] = circle[key]
// }

// // 2nd way
// // Syntax, Object.assign(destination_object, source_object)
// Object.assign(another, circle)

// // 3rd way -> ES6 technique
// another = {...circle, ...car}

// console.log(another)




// Built - in properties in JavaScript
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects

// Math
// Math.random() -> random number between 0 and 1
// Math.min(1,2,3,4,5) -> returns minimum value
// Math.max(1,2,3,4,5) -> returns maximum value
// Math.pow(2,3) -> (x,y) x to the power of y


// String
// const firstName = 'Henry'
// const lastName = new String('Shrestha')
// console.log(firstName, lastName)



// Exericse 1
// Create an address object
// 1. using a factory function
// 2. using a constructor function
// function createAddress(...) { return {} }
// function CreateAddress(...) {this....}

// // Factory function
// function createAddress(state, city, postal_code) {
//   return {
//     state: state,
//     city: city,
//     postal_code: postal_code
//   }
// }

// const address1 = createAddress('New Jersy', 'Newark', '07101')
// const address2 = createAddress('New York', 'Manhattan', '10003')
// console.log(address1, address2)


// Constructor function -> Pascal Notation
function CreateAddress(state, city, postal_code) {
  this.state = state
  this.city = city
  this.postal_code = postal_code
  // return this;
}

let address1 = new CreateAddress('New Jersy', 'Newark', '07101')
let address2 = new CreateAddress('New York', 'Manhattan', '10003')
let address3 = new CreateAddress('New York', 'Manhattan', '10003')

let address4 = address1


// Exercise #2
// Create a new function
// areSame(a, b) -> if both of these objects are same
// -> if all the properties and values of
// both the objects are same

// areEqual(a,b) -> 
// if both of these objects belong to the 
// same memory location

// Are same
// function areSame(a, b) {
//   // if(a.state === b.state && a.city === b.city && a.postal_code === b.postal_code) {
//   //   return true
//   // } else {
//   //   return false
//   // }

//   // OR

//   return a.state === b.state && a.city === b.city && a.postal_code === b.postal_code ? true : false
// }

// OR, can decalre in ES6 like:
// const areSame = (a,b) => a.state === b.state && a.city === b.city && a.postal_code === b.postal_code ? true : false

// console.log(areSame(address1, address2)) // false
// console.log(areSame(address2, address3)) // true

// // Are Equal
// // function areEqual(a, b) {
//   // if(a === b) {
//   //   return true
//   // } else {
//   //   return false
//   // }

//   // return a === b ? true : false // Ternary operator
// // }

// // OR,

// // const areEqual = (a,b) => {
// //   return a === b ? true : false // Ternary operator
// // }

// const areEqual = (a,b) => a === b ? true : false // Ternary operator


// console.log(areEqual(address1, address4)) // false




// Exercise #3
// Create a blog post object that has the following properties.
// title
// body
// author
// views -> view count
// comments -> multiple comment objects that has author & body []
// isLive -> boolean -> true / false

// Advanced: create this using a Post constructor function and add new property:
// date -> which is set to current date.
// bonus -> format date in yyyy-mm-dd

const blog = {
  title: 'Some title',
  body: 'This is the body of this blog',
  author: 'Henry Shrestha',
  views: 200,
  comments: [
    {
      author: 'Some guy',
      comment: 'This is a good blog'
    },
    {
      author: 'Some girl',
      comment: 'This is a bad blog'
    },
  ],
  isLive: true
}

// console.log(blog)


// Using constructor function
function Posts(title, body, author) {
  let today = new Date()
  let formattedDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`

  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comments = [];
  this.isLive = false
  this.date = formattedDate
}

// Create blog with this constructor function
const myNewBlog = new Posts('Some title', 'This is the body of this blog', 'Henry Shrestha')
console.log(myNewBlog)







