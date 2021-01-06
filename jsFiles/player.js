class Player{

    constructor(){
      this.index = null;
      this.distance = 0;
      this.playerName = null;
    }

    updateCount(count){
        database.ref('/').update({
          playerCount: count
        });
      }

      update(){
        var playerIndex = "players/player" + this.index;

        database.ref(playerIndex).set({
          name:this.playerName,
          distance:this.distance
        });
    }

        getCount(){
            var playerCountRef = database.ref('playerCount');
            playerCountRef.on("value",function(data){
              playerCount = data.val();
            })
          
        }
        static getPlayerInfo(){
          var playerInfoRef = database.ref('players')
        
          playerInfoRef.on("value",(data)=>{
            allPlayers = data.val()
          })
        }

}