export class Player {
    // game is a referenced data type, I'm not making a copy of the game obj...merely referring to it
    // Ya dum dum..
    constructor(game){
        this.game = game;
        this.width = 100; // Width of sheet/horizontal frames
        this.height = 91.3; //Height of sheet/vertical frames
        this.x = 0;
        this.y = this.game.height - this.height; // I can access game properties
        this.image = document.getElementById('player');
    }
    update(){
        this.x++;
    }

    // Telling draw(), who the subject of their esteemed services are
    draw(context){
        // Cropping out the position and dimensions of sprite sheet
        context.drawImage(this.image, 0, 0, this.width, this.height, this.x, this.y, this.width, this.height)
    }
}