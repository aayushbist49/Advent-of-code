const fs = require("fs");

fs.readFile("file.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const lines = data.split("\n");
  let sum = 0;
  
  const wordsToDigits = {
    'zero': 0,
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9
  };

  const combinedWordsToSeparate = {
    'twone': 'two one',
    'threeight': 'three eight',
    'nineight': 'nine eight',
    'fiveight': 'five eight',
    'sevenine': 'seven nine',
    'eightwo' : 'eight two',
    'eighthree' : 'eight three',
    'zerone' : 'zero one',
    'oneight' : 'one eight',
  };

  lines.forEach((line) => {
    // Replace combined words with their components
    Object.keys(combinedWordsToSeparate).forEach(combinedWord => {
      if (line.includes(combinedWord)) {
        line = line.replace(combinedWord, combinedWordsToSeparate[combinedWord]);
      }
    });

    // Replace spelled-out digits with their numeric equivalents
    Object.keys(wordsToDigits).forEach(word => {
      const regex = new RegExp(word, 'g');
      line = line.replace(regex, wordsToDigits[word]);
    });

    // Extract numeric characters from the line
    let numbersInLine = [];
    for (let char of line) {
      if (!isNaN(char) && char.trim() !== "") {
        numbersInLine.push(char);
      }
    }

    if (numbersInLine.length > 0) {
      let firstNumber = parseInt(numbersInLine[0], 10);
      let lastNumber = parseInt(numbersInLine[numbersInLine.length - 1], 10);

      if (numbersInLine.length === 1) {
        lastNumber = firstNumber;
      }

      // Ensure that both are valid numbers before calculation
      if (!isNaN(firstNumber) && !isNaN(lastNumber)) {
        let twoDigitNumber = firstNumber * 10 + lastNumber;
        console.log(twoDigitNumber);
        sum = sum + twoDigitNumber;
      }
    }
  });
  console.log(sum);
});
