import { Player } from './player.js'
import { InputHandler } from './input.js';

window.addEventListener('load', function() {
    const canvas = document.getElementById('main');
    const ctx = canvas.getContext('2d'); // Tells the canvas it will be doing 2D...context duh
    canvas.width = 500;
    canvas.height = 500;

    // Blueprint of the game
    class Game {
        constructor(width, height){
            this.width = width;
            this.height = height;
            this.player = new Player(this); // this means game object...player class expects game as an arg
            this.input = new InputHandler();
        }
        update(){
            this.player.update();
        }

        // This will call the draw function in Player.js and draw the player
        // I will be able to edit the player in player.js
        draw(context){
            this.player.draw(context)
        }
    }

    // Instance of Game called game
    const game = new Game(canvas.width, canvas.height)
    console.log(game)

    // Creating an animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.update()
        game.draw(ctx);
        requestAnimationFrame(animate)
    }
    animate()
});

// Scripts.js is basically just a container that holds all the other modules