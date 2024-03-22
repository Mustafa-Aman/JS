// Team stats 
const team ={
    _players: [
        firstPlayer={
            fistName:"Mustafa",
            lastName:"Aman",
            age: 20
        },
        secondPlayer={
            fistName:"Mohammed",
            lastName:"Aman",
            age: 21
        },
        thirdPlayer={
            fistName:"Abbas",
            lastName:"Aman",
            age: 24
        }
    ],
    _games: [
        firstGame={
            opponent:"Beconhouse",
            teamPoint: 10,
            opponentPoints: 5
        },
        secondGame={
            opponent:"Nadil Burhani",
            teamPoint: 5,
            opponentPoints: 10
        },
        thirdGame={
            opponent:"The City",
            teamPoint: 10,
            opponentPoints: 5
        },
    ],
    get players(){
        return this._players;
    },
    get games(){
        return this._games;
    },

    addPlayer(newFirstName,newLastName,newAge){
        let newPlayer={
            fistName:newFirstName,
            lastName:newLastName,
            age: newAge
        };
        this.players.push(newPlayer);
    },
    addGame(newOpponent,newTeamPoints,newOpponentPoints){
        let newGame={
            opponent: newOpponent,
            teamPoint: newTeamPoints,
            opponentPoints: newOpponentPoints
        };
        this.games.push(newGame);
    }
};
team.addPlayer('Buhanuddin','Aman',10);
console.log(team.players);

team.addGame('Titans', 100, 98);
console.log(team.games);
