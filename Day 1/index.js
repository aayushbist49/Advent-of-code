const fs = require("fs");

fs.readFile("file.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const lines = data.split("\n");
  let sum = 0;
  lines.forEach((line) => {
    let numbersInLine = [];

    // Extract only numeric characters from the line
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
