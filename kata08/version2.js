//////////////////////////////////////// Optimized version with time measurement ////////////////////////////////////////

const fs = require('fs');

// This function loads dictionary from file
function loadDictionary() {
  try {
    const data = fs.readFileSync('wordlist.txt', 'utf8');
    return data.split('\n').reduce((acc, word) => {
      acc[word] = true;
      return acc;
    }, {});
  } catch (err) {
    console.error('Error reading dictionary file:', err);
    return {};
  }
}

// This function will find us the concatenated words
function findConcatenatedWords(dictionary) {
  const concatenatedWords = [];

  for (const word in dictionary) {
    if (word.length === 6) {
      for (let j = 1; j < word.length; j++) {
        const firstPart = word.substring(0, j);
        const secondPart = word.substring(j);
        if (dictionary[firstPart] && dictionary[secondPart]) {
          concatenatedWords.push(`${firstPart} + ${secondPart} => ${word}`);
          break;
        }
      }
    }
  }

  return concatenatedWords;
}

// Main function
function main() {
  console.time('version2');
  const dictionary = loadDictionary();
  const concatenatedWords = findConcatenatedWords(dictionary);
  concatenatedWords.forEach(word => console.log(word));
  console.timeEnd('version2');
}

main();