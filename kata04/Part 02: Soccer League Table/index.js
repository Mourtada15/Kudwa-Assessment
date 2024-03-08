const fs = require('fs');

fs.readFile('football.dat', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file: ', err);
    return;
  }

  const lines = data.split('\n');

  // console.log(lines)

  let smallestDifference = Infinity;
  let teamWithSmallestDifference;

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim()

    const values = line.split(/\s+/);

    // console.log(values)

    const teamName = values[1];
    const scoreFor = parseInt(values[6]);
    const scoreAgainst = parseInt(values[8]);

    // Calculate absolute difference between goals scored and goals conceded
    const scoreDifference = Math.abs(scoreFor - scoreAgainst);

    // console.log(teamName, scoreDifference)

    if (scoreDifference < smallestDifference) {
      smallestDifference = scoreDifference
      teamWithSmallestDifference = teamName
    }
  }

  console.log('Team with smallest difference is: ', teamWithSmallestDifference)
})