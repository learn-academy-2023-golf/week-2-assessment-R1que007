// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: 

//Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

describe("multBy3", () => { //takes in a the name of the function
    it("returns an array with all the numbers multiplied by 3", () => {
      const numbersArray1 = [6, 7, 8, 9, 10]
      // Expected output: [18, 21, 24, 27, 30]
      const numbersArray2 = [24, 27, 30, 33, 36]
      // Expected output: [72, 81, 90, 99, 108]

      expect(multBy3(numbersArray1)).toEqual([18, 21, 24, 27, 30])
      expect(multBy3(numbersArray2)).toEqual([72, 81, 90, 99, 108])
    })
  })

// ReferenceError: multBys is not defined

// b) Create the function that makes the test pass.

// Pseudo code:
//input: (array) numbersArray1 or numbersArray2
//Use .map() to access valurd in array and multiply each by 3
//output: an array of equal length w/ each index value mult by 3

const multBy3 = (array) => {
return array.map((value) => value * 3) 
   }

// --------------------1) 
//Create a function that takes an object as an argument and decides if the number is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

describe("divBy3", () => {
    it("decides if a number is evenly divisible by three", () => {
    const object1 = { number: 15 }
    //Expected output: "true"
    const object2 = { number: 0 }
    //Expected output: "false"
    const object3 = { number: -7 }
    //Expected output: "false"
    expect(divBy3(object1)).toEqual(true)
    expect(divBy3(object2)).toEqual(true)
    expect(divBy3(object3)).toEqual(false)
    })
  })
//   //ReferenceError: divBy3 is not defined

// // b) Create the function that makes the test pass.
// // Pseudo code:
//create a function divBy3 that takes in an object
//Use obj.number to access the numbers in obj2, obj2, obj3
//Use % 3 === 0 to check if number is evenly divisible by 3
//return

const divBy3 = (obj) => {
    return obj.number % 3 === 0
}

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.


describe("capEach", () => {
    it("takes in an array of words and returns an array with all the words capitalized.", () => {
    const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
    // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]

    const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
    // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

    expect(capEach(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
    expect(capEach(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
    })
  })

// ReferenceError: multBys is not defined

// b) Create the function that makes the test pass.

//Pseudo Code:
//Create a function CapEach with array as its parameter
//use .map to mod each element in the array
//use .charAt to access the first letter of the strings in the array
//use .toUpperCase to capitaloze the letter
  //note: toUpperCase returns only the capitalized character
//use 
//use .slice(1) to access the string after the first letter
//use String Concatenation to combine

const capEach = (array) => {
    return array.map(nouns => nouns.charAt(0).toUpperCase() + nouns.slice(1))
}



 

