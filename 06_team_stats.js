const team = {
  _players : [
    {
      firstName : 'Lamine',
      lastName : 'Yamal',
      age : 19
    },

    {
      firstName : 'Nico',
      lastName : 'Williams',
      age : 24
    },

    {
      firstName : 'Ferran',
      lastName : 'Torres',
      age : 26
    }
  ],


  _games : [
    {
      opponent : 'Argentina',
      teamPoints : 2, 
      opponentPoints : 0
    },
    
    {
      opponent : 'Argentina',
      teamPoints : 3, 
      opponentPoints : 0
    },

    {
      opponent : 'Argentina',
      teamPoints : 1, 
      opponentPoints : 0
    }
  ],


  get players () {
    return this._players;
  }, 

  get games () {
    return this._games;
  },

  addPlayer (newFirstName, newLastName, newAge) {
    const player = {
      firstName : newFirstName ,
      lastName : newLastName,
      age : newAge
    };
   this._players.push(player);
  },

  addGame (newOpponent, newTeamPoints, newOpponentPoints){
    const game = {
      opponent : newOpponent,
      teamPoints : newTeamPoints,
      opponentPoints : newOpponentPoints
    };
    this._games.push(game);
  }
} ;


team.addPlayer('Bugs','Bunny', 76);
console.log(team.players);

team.addGame('Titans',100,98);
console.log(team.games);