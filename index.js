//TEAMS
const teamA = {
  teamName: "teamA",
  players: [
    { firstName: "mike", lastName: "smith", age: 20 },
    { firstName: "sarah", lastName: "smith", age: 24 },
  ],
};

const teamB = {
  teamName: "teamB",
  players: [
    { firstName: "hugo", lastName: "james", age: 21 },
    { firstName: "laura", lastName: "uru", age: 22 },
  ],
};

const teamC = {
  teamName: "teamC",
  players: [
    { firstName: "mike", lastName: "smith", age: 18 },
    { firstName: "sarah", lastName: "james", age: 30 },
  ],
};

const teamD = {
  teamName: "teamD",
  players: [
    { firstName: "jack", lastName: "ionu", age: 29 },
    { firstName: "matt", lastName: "otto", age: 40 },
  ],
};

const allTeams = [teamA, teamB, teamC, teamD];

console.log(allTeams);

//ACTIONS

const getTeamNames = (teams) => teams.map((team) => team.teamName);

const getHowManyTeams = (teams) => teams.length;

const getTeamPlayersFirstName = (team) =>
  team.players.map((player) => player.firstName);

console.log("getTeamNames:", getTeamNames(allTeams));
console.log("getHowManyTeams:", getHowManyTeams(allTeams));
console.log("getTeamPlayersFirstName:", getTeamPlayersFirstName(teamA));

//STATISTICS
const teamsRanking = {
  first: "teamA",
  second: "teamD",
  third: "teamC",
  fourth: "teamB",
};

const scores = {
  teamA: 12,
  teamD: 9,
  teamC: 4,
  teamB: 1,
};

//BEST TEAM
const bestTeam = {
  name: teamsRanking.first,
  scores: scores.teamA,
};

console.log("bestTeam:", bestTeam);
