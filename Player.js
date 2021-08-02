class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
  }
//counting the players
  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }
// update no of players
  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }
//updating name and distance
  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }
//getting player info
  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
}
