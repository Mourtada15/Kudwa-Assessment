const { processData, printResult } = require('./index');

processData('weather.dat', 2, 0, 1, 2, (result)=> {
    printResult(result, 'Day');
})