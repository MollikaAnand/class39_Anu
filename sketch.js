var game,form,database,player;
var gameState = 0;
var playerCount = 0;
var allPlayers ;

var car1,car2,car3,car4,cars;
var car1Image,car2Image,car3Image,car4Image, track,trackImage;

function preload(){

    car1Image=loadImage("images/car1.png");
    car2Image=loadImage("images/car2.png");
    car3Image=loadImage("images/car3.png");
    car4Image=loadImage("images/car4.png");
    trackImage=loadImage("images/track.png");
}

function setup(){
    createCanvas(displayWidth-20,displayHeight-20);
    database = firebase.database();
    console.log(database);

    game=new Game();
    game.getState();
    game.start();
}




function draw(){
    background("white");
    if (playerCount === 4){
        game.updateState(1);
        drawSprites();
    }
    if (gameState === 1){
        game.play();
    }
    
}

