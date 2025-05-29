export class InputHandler {
    constructor() {
        this.keys = [];
        // Listening for if 'any button' has been pressed
        window.addEventListener('keydown', e => {
            // I actually wote and instead of && lol
            if ((   e.key === 'ArrowDown' || 
                    e.key === 'ArrowUp'   ||
                    e.key === 'ArrowLeft' ||
                    e.key === 'ArrowRight' ||
                    e.key === 'Enter'
                ) && this.keys.indexOf(e.key) === -1) {
                this.keys.push(e.key);
            }
            console.log(e.key, this.keys)
        });

        window.addEventListener('keyup', e =>{
            if (    e.key === 'ArrowDown' || 
                    e.key === 'ArrowUp'   ||
                    e.key === 'ArrowLeft' ||
                    e.key === 'ArrowRight' ||
                    e.key === 'Enter'
                ){
                this.keys.splice(this.keys.indexOf(e.key), 1);
            }
            console.log(e.key, this.keys)
        })
    }
}