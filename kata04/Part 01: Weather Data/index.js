const fs = require('fs');

// This function allows us to read the content of the weather.dat file
fs.readFile('weather.dat', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    // Here we split the data into lines, we get an array of strings
    const lines = data.split('\n');

    // console.log(lines)

    let smallestSpread = Infinity; // We initialized smallestSpread with infinity to make sure that on the first loop iteration, the value we encounter is less the value we initialized
    let dayWithSmallestSpread;

    // We started iterating from line 2 to skip the first 2 lines because they are not the actual data we want to work on, and we ignore the last line because we don't need it too
    for (let i = 2; i < lines.length - 1; i++) {
        const line = lines[i].trim(); // Here we clean the lines from empty spaces

        // console.log(line)

        // Now we split the line into array of values. We used regular expressions to make sure all empty spaces are removed. We could use split(' '), but this method will remove one space pnly
        const values = line.split(/\s+/);

        // console.log(values)

        // Now we extract day number, max temperature, and min temperature
        const day = parseInt(values[0]);
        const maxTemp = parseInt(values[1]);
        const minTemp = parseInt(values[2]);

        // console.log(day)

        // We can calculate temperature spread now
        const spread = maxTemp - minTemp;

        // console.log(spread)

        // Finally we update smallestSpread and dayWithSmallestSpread if current spread is smaller
        if (spread < smallestSpread) {
            smallestSpread = spread;
            dayWithSmallestSpread = day;
        }

        // console.log(smallestSpread)
    }

    console.log('Day with the smallest temperature spread:', dayWithSmallestSpread);
});