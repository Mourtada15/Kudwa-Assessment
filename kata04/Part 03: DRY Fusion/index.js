const fs = require('fs');

function processData(filename, lineSkip, nameIndex, valuesIndexFor, valuesIndexAgainst, callback) {
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      console.log('Error reading file:', err);
      return;
    }

    const lines = data.split('\n');
    let smallestDifference = Infinity;
    let dataWithSmallestDifference;

    for (let i = lineSkip; i < lines.length; i++) {
      const line = lines[i].trim();
      const values = line.split(/\s+/);
      const name = values[nameIndex];
      const valueFor = parseInt(values[valuesIndexFor]);
      const valueAgainst = parseInt(values[valuesIndexAgainst]);
      const difference = Math.abs(valueFor - valueAgainst);

      if (difference < smallestDifference) {
        smallestDifference = difference;
        dataWithSmallestDifference = { name, difference };
      }
    }
    callback(dataWithSmallestDifference);
  });
}

// Function to print the result
function printResult(result, dataType) {
  console.log(`${dataType} with smallest difference is: ${result.name}`);
}

module.exports = { processData, printResult };