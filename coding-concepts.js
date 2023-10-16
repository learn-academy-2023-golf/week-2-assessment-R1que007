// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------1) What will this log?

const cohort = "Golf 2023"
console.log(cohort.split(" "))

// a) Your answer: [Golf] [2023]
// b) Verify and explain: The split() method turns a string into an array of substrings. in otherwords, It splits the string into two and returns them in an array.

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
 console.log(greeter("LEARN Student"))

// a) Your answer: undefined
// b) Verify and explain: Every function needs a return.

// const greeter = (name) => {
//   return `Hello, ${name}!`
// } -------> Hello, LEARN Student!


//  console.log(greeter("LEARN Student"))

// --------------------3) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
  console.log(onlyOdds)

// a) Your answer: 11, 13, 15
// b) Verify and explain: This is not a function so it does not need a return. onlyOdds is a variable that stores the values that the filter method is accessing and are being identified as being not even.

// --------------------4) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: Javascript
// b) Verify and explain: The Key: languages is used to access the value of the first index in the array.

// --------------------5) What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Golf"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: George

// answer: Learn { student: 'George', cohort: 'Golf', year: 2023 }

// b) Verify and explain: console.log(learnStudent) outputs the object that is created and initialized by the constructor function. The learnStudent object has a student property set to "George", cohort to "Golf", and year to 2023.
