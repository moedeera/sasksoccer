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

export {
  generateSlug,
  formatDateFunction,
  generateId,
  reorganizeTeamsByGroupNumber,
  calculateAndSortTeamsByPoints,
  formatDateToString,
};
