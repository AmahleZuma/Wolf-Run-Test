class Player {
    // game is a referenced data type, I'm not making a copy of the game obj...merely referring to it
    // Ya dum dum..
    constructor(game){
        this.game = game;
        this.width = 100; // Width of sheet/horizontal frames
        this.height = 91.3; //Height of sheet/vertical frames
        this.x = 0;
        this.y = 100;
    }
    update(){

    }

    // Telling draw(), who the subject of their esteemed services are
    draw(context){
        // Literally drawing a filled rectangle
        context.fillRect(this.x, this.y, this.width, this.height);
    }
}