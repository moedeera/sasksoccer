const calculateTeamRating = (team) => {
  return (
    (team.win_total * 3 + team.draw_total) * 10 -
    (team.goals_for - team.goals_against) * 0.1
  );
};

const sortTeamsByGroup = (teams) => {
  return teams.reduce((acc, team) => {
    const groupIndex = acc.findIndex((group) => group.name === team.group);

    if (groupIndex === -1) {
      acc.push({
        name: team.group,
        teams: [team],
      });
    } else {
      acc[groupIndex].teams.push(team);
    }

    return acc;
  }, []);
};

const updatePlayoffResultsAndFinalists = (
  score,
  teamName,
  teamRankings,
  setTeamRankings,
  setPlayoffResults
) => {
  if (score === null || !score) {
    console.log("no score");
    return;
  }

  setPlayoffResults((prevResults) => {
    let newPlayoffResults = { ...prevResults };

    if (teamName === teamRankings.firstPlace) {
      newPlayoffResults.playoffResult1[0] = score;
    } else if (teamName === teamRankings.fourthPlace) {
      newPlayoffResults.playoffResult1[1] = score;
    } else if (teamName === teamRankings.secondPlace) {
      newPlayoffResults.playoffResult2[0] = score;
    } else if (teamName === teamRankings.thirdPlace) {
      newPlayoffResults.playoffResult2[1] = score;
    }

    setTeamRankings((prevRankings) => {
      let newRankings = { ...prevRankings };

      if (
        newPlayoffResults.playoffResult1[0] >
        newPlayoffResults.playoffResult1[1]
      ) {
        newRankings.firstFinalist = prevRankings.firstPlace;
      } else if (
        newPlayoffResults.playoffResult1[0] <
        newPlayoffResults.playoffResult1[1]
      ) {
        newRankings.firstFinalist = prevRankings.fourthPlace;
      } else {
        newRankings.firstFinalist = "Winner of SF1 (1st vs 4th)";
      }

      if (
        newPlayoffResults.playoffResult2[0] >
        newPlayoffResults.playoffResult2[1]
      ) {
        newRankings.secondFinalist = prevRankings.secondPlace;
      } else if (
        newPlayoffResults.playoffResult2[0] <
        newPlayoffResults.playoffResult2[1]
      ) {
        newRankings.secondFinalist = prevRankings.thirdPlace;
      } else {
        newRankings.secondFinalist = "Winner of SF2 (2nd vs 3rd)";
      }

      return newRankings;
    });

    return newPlayoffResults;
  });
};

/**
 * Parses a multi-line string of team stats, then updates an existing array of team objects.
 *
 * @param {string} data - A multi-line string where each line is tab-separated.
 * @param {Array} teams - An array of team objects to be updated.
 * @returns {Array} - The updated array of team objects.
 */
function updateTeamStats(data, teams) {
  // 1. Split the string by new lines into an array of lines
  const lines = data
    .split("\n") // split by newline
    .map((line) => line.trim())
    .filter(Boolean); // remove empty lines

  // 2. Iterate over each line and parse tab-separated values
  lines.forEach((line) => {
    // Example line (tab-separated):
    // "Evolution FC    8    3    2    3    12    49    47    2    0.563    2"
    const columns = line.split("\t").map((col) => col.trim());

    // Make sure we have enough columns
    // [Team Name, Games Played, Won, Lost, Tied, Points, Goals For, Goals Against, Differential, Win%, ???]
    if (columns.length < 11) {
      console.warn(`Skipping malformed line: ${line}`);
      return;
    }

    const [
      teamName,
      gamesPlayed,
      gamesWon,
      gamesLost,
      gamesTied,
      points,
      goalsFor,
      goalsAgainst,
      differential,
      winPercentage,
      someOtherStat, // the last column, which also appears as "differential" in your example
    ] = columns;

    // 3. Convert numeric columns into proper numbers or floats
    const parsedStats = {
      teamName,
      gamesPlayed: Number(gamesPlayed),
      gamesWon: Number(gamesWon),
      gamesLost: Number(gamesLost),
      gamesTied: Number(gamesTied),
      points: Number(points),
      goalsFor: Number(goalsFor),
      goalsAgainst: Number(goalsAgainst),
      differential: Number(differential),
      winPercentage: Number(winPercentage),
      someOtherStat: Number(someOtherStat),
    };

    // 4. Find matching team in the existing array and update
    const foundTeam = teams.find((t) => t.name === parsedStats.teamName);

    if (foundTeam) {
      // Update any relevant fields on the existing team object
      // (Adapt the property names to your actual data structure)
      foundTeam.games_played = parsedStats.gamesPlayed;
      foundTeam.win_total = parsedStats.gamesWon;
      foundTeam.loss_total = parsedStats.gamesLost;
      foundTeam.draw_total = parsedStats.gamesTied;
      foundTeam.points = parsedStats.points;
      foundTeam.goals_for = parsedStats.goalsFor;
      foundTeam.goals_against = parsedStats.goalsAgainst;
      // If needed, store additional stats
      foundTeam.differential = parsedStats.differential;
      foundTeam.win_percentage = parsedStats.winPercentage;
      // You can choose how to handle the last column (someOtherStat)
      foundTeam.extra_stat = parsedStats.someOtherStat;
    } else {
      console.warn(`No matching team found for "${parsedStats.teamName}".`);
    }
  });

  // Return the updated teams array
  return teams;
}

// Example usage:

// 1. Your multi-line input string (tabs between each stat)
const dataString = `
Galaxy FC\t8\t5\t1\t2\t17\t40\t33\t7\t0.750\t7
Evolution FC\t8\t3\t2\t3\t12\t49\t47\t2\t0.563\t2
Whitecaps FC\t8\t3\t3\t2\t11\t42\t35\t7\t0.500\t7
Hub City FC\t8\t1\t6\t1\t4\t33\t49\t-16\t0.188\t-16
`;

// 2. Sample teams array (with only one example team shown)
// const teamsArray = [
//   {
//     coach1: null,
//     coach2: null,
//     color1: "gray",
//     color2: "white",
//     draw_total: 3,
//     goals_against: 47,
//     goals_for: 49,
//     group: "Mens Boarded 1",
//     loss_total: 2,
//     name: "Evolution FC",
//     points: 12,
//     team_id: "Evolu24100402023052",
//     win_total: 3,
//     _id: "66ffa305e445e4c12d7e8502"
//   },
//   {
//     coach1: null,
//     coach2: null,
//     color1: "blue",
//     color2: "white",
//     draw_total: 0,
//     goals_against: 0,
//     goals_for: 0,
//     group: "Mens Boarded 1",
//     loss_total: 0,
//     name: "Galaxy FC",
//     points: 0,
//     team_id: "Galaxy24100402023052",
//     win_total: 0,
//     _id: "66ffa305e445e4c12d7e9999"
//   },
//   // ...add other team objects as needed...
// ];

// // 3. Update teams with the parsed stats
// const updatedTeams = updateTeamStats(dataString, teamsArray);

// // 4. Check the results
// console.log(updatedTeams);

// Group export at the end
export {
  calculateTeamRating,
  sortTeamsByGroup,
  updatePlayoffResultsAndFinalists,
  updateTeamStats,
};
