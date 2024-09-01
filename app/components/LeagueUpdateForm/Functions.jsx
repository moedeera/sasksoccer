// const updatePlayoffResultsAndFinalists = (score, teamName) => {
//   if (score === null || !score) {
//     console.log("no score");
//     return;
//   }

//   setPlayoffResults((prevResults) => {
//     let newPlayoffResults = { ...prevResults };

//     if (teamName === teamRankings.firstPlace) {
//       // Update the score for the 1st place team in playoffResult1
//       newPlayoffResults.playoffResult1[0] = score;
//     } else if (teamName === teamRankings.fourthPlace) {
//       // Update the score for the 4th place team in playoffResult1
//       newPlayoffResults.playoffResult1[1] = score;
//     } else if (teamName === teamRankings.secondPlace) {
//       // Update the score for the 2nd place team in playoffResult2
//       newPlayoffResults.playoffResult2[0] = score;
//     } else if (teamName === teamRankings.thirdPlace) {
//       // Update the score for the 3rd place team in playoffResult2
//       newPlayoffResults.playoffResult2[1] = score;
//     }

//     // Update the finalists based on the new playoff results
//     setTeamRankings((prevRankings) => {
//       let newRankings = { ...prevRankings };

//       // Determine the winner of SF1 (1st vs 4th)
//       if (
//         newPlayoffResults.playoffResult1[0] >
//         newPlayoffResults.playoffResult1[1]
//       ) {
//         newRankings.firstFinalist = prevRankings.firstPlace;
//       } else if (
//         newPlayoffResults.playoffResult1[0] <
//         newPlayoffResults.playoffResult1[1]
//       ) {
//         newRankings.firstFinalist = prevRankings.fourthPlace;
//       } else {
//         newRankings.firstFinalist = "Winner of SF1 (1st vs 4th)";
//       }

//       // Determine the winner of SF2 (2nd vs 3rd)
//       if (
//         newPlayoffResults.playoffResult2[0] >
//         newPlayoffResults.playoffResult2[1]
//       ) {
//         newRankings.secondFinalist = prevRankings.secondPlace;
//       } else if (
//         newPlayoffResults.playoffResult2[0] <
//         newPlayoffResults.playoffResult2[1]
//       ) {
//         newRankings.secondFinalist = prevRankings.thirdPlace;
//       } else {
//         newRankings.secondFinalist = "Winner of SF2 (2nd vs 3rd)";
//       }

//       return newRankings;
//     });

//     return newPlayoffResults;
//   });
// };
