import './style.css'

let score = 98
const answer = 42

let personName: string = 'Mary'

let students: string[] = ['John', 'Jane', 'Joe']
let scores: number[] = [98, 99, 100]

const differentTypesOfThings: (string | number | boolean)[] = [
  42,
  'icecream',
  100,
  'Tacos',
  99,
  true,
  'Burgers',
]
differentTypesOfThings.push(3.14159265359)
differentTypesOfThings.push('Pizza')
differentTypesOfThings.push(false)

if (score == 42) {
  let thisVariableExistsOnlyHere = 'Sue'

  thisVariableExistsOnlyHere = 'Joe'
}
// initialising a variable.
let studentName = 'John'

const x = 'The answer is ' + 42
const y = 42 + ' is the answer'

// outputs to the dev tool in the browser
console.log(x)

let z: string
// z = '37' - 7
// answer = 30
// z = '37' + 7
// answer = '377'

{
  const score = 98

  const answer = 42
  // just as in C# use a backtick to interpolate a variable into a string
  const message = `Congrats ${answer} is correct. You have ${score} points.`
  console.log(message)
}
// this defines a variable of type object
const myCar = {
  // to use -v- you need to use the type annotation ('')
  // better to use "camelCase" for property names
  'the make of the car': 'BMW',
  'the-make-of-the-car': 'BMW',
  make: 'BMW',
  model: 'Mini',
  year: 2016,
}

myCar['the make of the car'] = 'Audi'
myCar['the-make-of-the-car'] = 'Audi'

console.log(`My car is a ${myCar.make}`)

// like a class in C# this creates the "SHAPE" of the object
type Car = {
  make: string
  model: string
  year: number
}

// -------------------
const theirCar: Car = {
  make: 'Ford',
  model: 'F150 Lightening',
  year: 2022,
}

const otherCar: Car = {
  make: 'Hyundai',
  model: 'Ioniq 5' /* <-- typo "modal" because the type declares the "SHAPE"*/,
  year: 2021,
}

console.log(`the other car us a ${otherCar.model}`)

/*const myOtherCar = {
  make: myCar.make,
  model: myCar.model,
  year: 2020,
} */

const myOtherCar: Car = {
  // v--- spread operator takes an existing object and edits the properties
  ...myCar,
  // changed properties must appear below the spread operator
  year: 2020,
}

console.table(myOtherCar)
