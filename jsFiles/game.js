class Game{
    constructor(){

    }
    getState(){
       var gameStateRef = database.ref('gameState');
           gameStateRef.on("value",function  (data){
               gameState = data.val()

           })

    }
    updateState(state){
     state = database.ref('/').update({
gameState: state
     });
    }

    async start(){
        if(gameState===0){
            player=new Player();
            var playerCountRef = await database.ref('playerCount').once("value");
            if (playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getCount();
            }
            
            
            form=new Form();
            form.display();
        }

        car1=createSprite(100,200);
        car1.addImage(car1Image);
        car2=createSprite(300,200);
        car2.addImage(car2Image);
        car3=createSprite(500,200);
        car3.addImage(car3Image);
        car4=createSprite(700,200);
        car4.addImage(car4Image);
        cars=[car1,car2,car3,car4];
        
    }
    play(){
        form.hide();
        text("game Starts",150,100);
        Player.getPlayerInfo();
        var displayPosition = 130;
      

        if(allPlayers !== undefined){
            background("red");
           image(trackImage,0,-displayHeight*4,displayWidth, displayHeight*5);
           // background.depth=1;
            //image.depth=1;
            var index=0;
            var x=0;
            var y=0;

            for(var plr in allPlayers){
               // console.log(index);
                x=x+200;

                y=displayHeight-allPlayers[plr].distance;
                index=index+1;
                cars[index-1].x =x;
                cars[index-1].y =y;
               
                //console.log(index-1);
                if (plr === "player" + player.index){
                //  fill("red");
                //  cars[index-1].shapeColor="red";
                  camera.position.x=displayWidth/2;
                  camera.position.y=cars[index-1].y;
                }
                else
                  fill("black");
            
            
            displayPosition+=20;
            text(allPlayers[plr].name+";"+allPlayers[plr].distance,130,displayPosition);
            }
        }
        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance +=50
            player.update();
          }

          drawSprites();
    }

 
}