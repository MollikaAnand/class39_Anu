class Form{
    constructor(){
       this.input = createInput("write Your name");
       this.button = createButton('Play');
        this.greeting = createElement('h3');
        
    }

    display(){
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(displayWidth/2-50, 0);

       

        this.input.position(displayWidth/2-30, displayHeight/2-80);
        this.button.position(displayWidth/2+50, displayHeight/2);

        this.button.mousePressed(()=>{

           player.playerName = this.input.value();

            playerCount+=1;
            player.index=playerCount;
            player.update();
            player.updateCount(playerCount);

            this.input.hide();
            this.button.hide();

           
            this.greeting.html("Hello " + player.playerName );
            this.greeting.position(displayWidth/2-70, displayHeight/4)

        });

        

    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide(); 
    }

    
}


