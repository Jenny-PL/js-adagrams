const LETTER_POOL = {
  A: 9,
  B: 2,
  C: 2,
  D: 4,
  E: 12,
  F: 2,
  G: 3,
  H: 2,
  I: 9,
  J: 1,
  K: 1,
  L: 4,
  M: 2,
  N: 6,
  O: 8,
  P: 2,
  Q: 1,
  R: 6,
  S: 4,
  T: 6,
  U: 4,
  V: 2,
  W: 2,
  X: 1,
  Y: 2,
  Z: 1,
};

const letterScores = {
  A: 1,
  B: 3,
  C: 3,
  D: 2,
  E: 1,
  F: 4,
  G: 2,
  H: 4,
  I: 1,
  J: 8,
  K: 5,
  L: 1,
  M: 3,
  N: 1,
  O: 1,
  P: 3,
  Q: 10,
  R: 1,
  S: 1,
  T: 1,
  U: 1,
  V: 4,
  W: 4,
  X: 8,
  Y: 4,
  Z: 10,
};

// draw hand of 10 letters, with likelihood relative to that describe in LetterPool object
export const drawLetters = () => {
  let allLetters = [];
  let hand = [];
  //iterate through each object, add the letter (property) the # of times of its value in property:value pair
  // should I be doing a forEach loop instead?
  for (let letter in LETTER_POOL) {
    for (let i = 0; i < LETTER_POOL[letter]; i++) {
      allLetters.push(letter);
    }
  }
  for (let i = 0; i < 10; i++) {
    let index = Math.floor(Math.random() * allLetters.length);
    // add to hand
    hand.push(allLetters[index]);
    // remove from available letters
    allLetters.splice(index, 1);
  }
  return hand;
};

//returns true if input letters all avail in lettersInHand; else returns false
export const usesAvailableLetters = (input, lettersInHand) => {
  lettersInHand = drawLetters(); //array of 10 letters
  //make input into array of upper case strings
  input = input.toUpperCase();
  let inputList = [];
  for (let letter of input) {
    inputList.push(letter);
  }
  // check if lettersInHand.includes(input)
  for (let letter of inputList) {
    if (lettersInHand.includes(letter)) {
      {
        let index = lettersInHand.findIndex((letter) => {
          for (let i = 0; i < lettersInHand.length; i++) {
            //find index of first occurance
            return letter === lettersInHand[i];
          }
        });
        lettersInHand.splice(index, 1); //remove item from list
      }
    } else {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  let score = 0;
  word = word.toUpperCase();
  for (let letter of word) {
    score += letterScores[letter];
  }
  if (word.length >= 7) {
    score += 8;
  }
  return score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 1
};
