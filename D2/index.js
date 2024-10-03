const fs = require("fs");

// Read the file
fs.readFile("textFile.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }

  // Split the file content into lines
  const lines = data.split("\n");
  let sum = 0;

  // Loop through each line
  lines.forEach((line, index) => {
    sum += index + 1;

    // Regular expression to match a number followed by a word
    const matches = line.match(/\d+\s*\w+/g); // Matches a number followed by a word (e.g., '3 red')

    if (matches) {
      // Initialize the largest values for R, G, B as null (meaning no value found yet)
      const result = { R: null, G: null, B: null };

      matches.forEach((match) => {
        // Split the match into the number and the word
        const parts = match.split(/\s+/); // Splits by spaces
      
        // Check if the split resulted in two parts
        if (parts.length < 2) {
          console.error(`Invalid match found: "${match}"`);
          return; // Skip this iteration if the match is not valid
        }
      
        const [number, word] = parts; // Destructure into number and word
      
        // Use the first character of the word as the key
        const key = word[0].toUpperCase();
      
        // Convert the number to an actual integer
        const num = parseInt(number, 10);
      
        // Update the result with the largest number for R, G, or B
        if (key === "R") {
          result.R = result.R === null ? num : Math.max(result.R, num);
        } else if (key === "G") {
          result.G = result.G === null ? num : Math.max(result.G, num);
        } else if (key === "B") {
          result.B = result.B === null ? num : Math.max(result.B, num);
        }
      });
      

      console.log(
        `Line ${index + 1} contains the following largest number-letter pairs:`,
        result
      );

      // Perform comparisons using the largest values
      if (result.R !== null && result.R > 12) {
        console.log(`In Line ${index + 1}, the largest R is greater than 12`);
        sum = sum - (index + 1);
      } else if (result.G !== null && result.G > 13) {
        console.log(`In Line ${index + 1}, the largest G is greater than 13`);
        sum = sum - (index + 1);
      } else if (result.B !== null && result.B > 14) {
        console.log(`In Line ${index + 1}, the largest B is greater than 14`);
        sum = sum - (index + 1);
      }
    } else {
      console.log(`Line ${index + 1} contains no valid number-letter pairs. Content: "${line}"`);
    }
  });

  // Print sum after all lines are processed
  console.log("Sum:", sum);
});
