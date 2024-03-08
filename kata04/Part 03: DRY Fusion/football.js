const { processData, printResult } = require('./index');

processData('football.dat', 1, 1, 6, 8, (result) => {
  printResult(result, 'Team')
})