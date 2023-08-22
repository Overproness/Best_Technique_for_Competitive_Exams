const crypto = require('crypto')

// Generate a random buffer of specified length
const generateRandomBytes = (length) => {
  return crypto.randomBytes(length)
}

// Generate a random integer within a range (min inclusive, max exclusive)
const generateRandomInt = (min, max) => {
  const range = max - min
  const randomBytes = generateRandomBytes(4) // Using 4 bytes for 32-bit integer
  const randomValue = randomBytes.readUInt32LE(0)
  return Math.floor((randomValue / 0xffffffff) * range) + min
}

// Define the number of questions that the student knows correctly
const correctlyKnownQuestions = 72

// Function to simulate the "save" approach
const safeApproach = () => {
  const correct = 0 // Counter for correct answers
  let wrong = 0 // Counter for wrong answers

  // Return the correct and wrong counters as an object
  return {
    correct,
    wrong,
  }
}

// Function to simulate the "random" approach
const RandomPicked = () => {
  let rand1
  let rand2
  let correct = 0 // Counter for correct answers

  // Simulate selecting random options for 20 questions
  for (let index = 0; index < 20; index++) {
    rand1 = Math.floor(Math.random() * 4) // Random option 1
    rand2 = generateRandomInt(0, 4) // Random option 2

    // If the random options match, consider it as a correct answer
    if (rand1 === rand2) {
      correct = correct + 1
    }
  }
  const wrong = 20 - correct // Calculate the wrong answers
  // Return the correct and wrong counters as an object
  return {
    wrong,
    correct,
  }
}

// Function to calculate the total marks based on the approach
const result = (obj) => {
  // Calculate the total marks using the formula provided
  const totalMarks =
    correctlyKnownQuestions * 4 + obj.correct * 4 - obj.wrong * 1
  return totalMarks
}

// Function to perform the testing and comparison
const testing = () => {
  let A = 0 // Counter for approach A winning
  let B = 0 // Counter for approach B winning
  let resultOfA
  let resultOfB

  // Simulate the testing process for a large number of iterations
  for (let index = 0; index < 10000; index++) {
    resultOfA = result(safeApproach()) // Get total marks for approach A
    resultOfB = result(RandomPicked()) // Get total marks for approach B

    // Compare the total marks and update counters accordingly

    if (resultOfA > resultOfB) {
      A = A + 1 // Approach A wins
    } else {
      B = B + 1 // Approach B wins
    }
  }
  console.log('Using Crypto Module`s random function')
  console.log({ A, B })

  // Determine which approach has more wins and provide the conclusion
  if (A > B) {
    console.log('Doubtful Questions should be left. ')
  } else {
    console.log('Guess is the best. ')
  }
}

// Call the testing function to perform the simulation and comparison
testing()
