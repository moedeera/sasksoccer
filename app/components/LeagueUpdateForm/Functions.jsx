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

// Group export at the end
export {
  calculateTeamRating,
  sortTeamsByGroup,
  updatePlayoffResultsAndFinalists,
};
