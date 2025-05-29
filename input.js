export class InputHandler {
    constructor() {
        this.keys = [];
        // Listening for if 'any button' has been pressed
        window.addEventListener('keydown', button => {
            console.log(button.key)
        })
    }
}