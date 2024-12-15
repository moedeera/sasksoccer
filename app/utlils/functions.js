const generateSlug = (name, userId) => {
  const date = new Date();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const userPrefix = userId.substring(0, 2);
  return `${name}${hours}${minutes}${userPrefix}`;
};

function formatDateFunction(dateString) {
  const date = new Date(dateString);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const period = hours >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  hours = hours % 12 || 12;

  return `${month} ${day} ${year} @ ${hours}:${minutes} ${period}`;
}
function generateId(inputString) {
  // Get the current date and time
  const now = new Date();
  const year = now.getFullYear().toString().slice(2); // Get last two digits of the year
  const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");

  // Format the date and time as yymmddhhmm
  const dateTimeString = `${year}${month}${day}${hours}${minutes}`;

  // Generate a random number between 1000 and 9999
  const randomNumber = Math.floor(1000 + Math.random() * 9000);

  // Get the first five characters of the input string
  const stringPart = inputString.substring(0, 5);

  // Combine everything to form the ID
  const id = `${stringPart}${dateTimeString}${randomNumber}`;

  return id;
}

const extractFirstNumber = (str) => {
  const match = str.match(/\d+/);
  return match ? parseInt(match[0], 10) : 0;
};

const reorganizeTeamsByGroupNumber = (teams) => {
  return teams.sort((a, b) => {
    const numA = extractFirstNumber(a.name);
    const numB = extractFirstNumber(b.name);
    return numA - numB;
  });
};
function calculateAndSortTeamsByPoints(teamsAssortedByGroup) {
  return teamsAssortedByGroup.map((group) => {
    // Calculate the points for each team in the group
    group.teams.forEach((team) => {
      const goalDifference = team.goals_for - team.goals_against;
      team.points = team.win_total * 3 + team.draw_total + 0 * goalDifference;
    });

    // Sort the teams in the group by points in descending order
    group.teams.sort((a, b) => b.points - a.points);

    return group;
  });
}

// utils/formatDate.js
function formatDateToString(isoString) {
  if (!isoString) {
    return `Loading...`;
  }
  const date = new Date(isoString);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "pm" : "am";

  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'

  const daySuffix = (day) => {
    if (day > 3 && day < 21) return "th"; // catch teens
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  return `Updated on ${month} ${day}${daySuffix(
    day
  )} ${year} at ${hours}:${minutes} ${ampm}`;
}

function parseSoccerData(input) {
  const lines = input.split("\n").filter((line) => line.trim() !== "");
  const teams = {};

  lines.forEach((line) => {
    // Updated regex to separate location explicitly
    const match = line.match(
      /(.*?, \w+\. \d+, \d+ \d+:\d+ [APM]+)\s+(Trail Appliance|Kavia Auto Body|Red Field)\s+(.*?)\s+\((\d+)\)\s+(.*?)\s+\((\d+)\)/
    );

    if (!match) return; // Skip invalid lines

    const [, dateTime, location, teamA, teamAScore, teamB, teamBScore] = match;
    const scoreA = parseInt(teamAScore, 10);
    const scoreB = parseInt(teamBScore, 10);

    // Initialize teams if not already in the object
    if (!teams[teamA]) {
      teams[teamA] = { wins: 0, loss: 0, draw: 0, gf: 0, ga: 0 };
    }
    if (!teams[teamB]) {
      teams[teamB] = { wins: 0, loss: 0, draw: 0, gf: 0, ga: 0 };
    }

    // Update stats
    teams[teamA].gf += scoreA;
    teams[teamA].ga += scoreB;
    teams[teamB].gf += scoreB;
    teams[teamB].ga += scoreA;

    if (scoreA > scoreB) {
      teams[teamA].wins += 1;
      teams[teamB].loss += 1;
    } else if (scoreB > scoreA) {
      teams[teamB].wins += 1;
      teams[teamA].loss += 1;
    } else {
      teams[teamA].draw += 1;
      teams[teamB].draw += 1;
    }
  });

  // Convert the teams object to an array
  return Object.entries(teams).map(([team, stats]) => ({
    team,
    ...stats,
  }));
}

// Function to generate formatted game strings
function formatGames(input) {
  const lines = input.split("\n").filter((line) => line.trim() !== "");
  const games = lines.map((line) => {
    const match = line.match(
      /(.*?, \w+\. \d+, \d+ \d+:\d+ [APM]+)\s+(Trail Appliance|Kavia Auto Body |Red Field)\s+(.*?)\s+\((\d+)\)\s+(.*?)\s+\((\d+)\)/
    );

    if (!match) return ""; // Skip invalid lines

    const [, dateTime, location, teamA, teamAScore, teamB, teamBScore] = match;

    return `${teamA} ${teamAScore}-${teamBScore} ${teamB}, ${dateTime}, at ${location}`;
  });

  return games.filter((game) => game !== ""); // Remove any empty strings
}

export {
  generateSlug,
  formatDateFunction,
  generateId,
  reorganizeTeamsByGroupNumber,
  calculateAndSortTeamsByPoints,
  formatDateToString,
  parseSoccerData,
  formatGames,
};
