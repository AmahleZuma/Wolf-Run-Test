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
        }
        update(){

        }
        draw(){
            
        }
    }
});