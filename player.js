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
        this.vy =0;
        this.weight = 1;
        this.speed = 0;
        this.maxSpeed = 10;
    }
    update(input){
        //Horizontal Movement
        this.x += this.speed;
        if (input.includes('ArrowRight')) this.speed = this.maxSpeed;
        else if (input.includes('ArrowLeft')) this.speed = -this.maxSpeed;
        else this.speed = 0;
        
        //Boundaries
        if (this.x < 0) this.x = 0;
        if (this.x > this.game.width - this.width) this.x = this.game.width - this.width;

        // Vertical movement
        if (input.includes('ArrowUp') && this.onGround()) this.vy -= 20;
        this.y += this.vy;
        if (!this.onGround()) this.vy += this.weight; // Counteracting the velocity
        else this.vy = 0

        // How I initially thought this would work
        // else if (input.includes('ArrowUp')) this.y--;
        // else if (input.includes('ArrowDown')) this.y++;

    }

    // Telling draw(), who the subject of their esteemed services are
    draw(context){
        // Cropping out the position and dimensions of sprite sheet
        context.drawImage(this.image, 0, 0, this.width, this.height, this.x, this.y, this.width, this.height)
    }

    onGround(){
        return this.y >= this.game.height - this.height
    }
}