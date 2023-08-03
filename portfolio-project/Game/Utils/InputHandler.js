export default class InputHandler {
    constructor() {
        this.keys = {
            "up": false,
            "down": false,
            "left": false,
            "right": false,
            "interact": false
        };

        document.addEventListener("keydown", this.onKeyDown.bind(this), false);
        document.addEventListener("keyup", this.onKeyUp.bind(this), false);
    }

    onKeyDown(event) {
        switch (event.code) {
            case "KeyW":
            case "ArrowUp":
                this.keys.up = true;
                break;
            case "KeyS":
            case "ArrowDown":
                this.keys.down = true;
                break;
            case "KeyA":
            case "ArrowLeft":
                this.keys.left = true;
                break;
            case "KeyD":
            case "ArrowRight":
                this.keys.right = true;
                break;
            case "Enter":
                this.keys.interact = true;
                break;
        }
    }

    onKeyUp(event) {
        switch (event.code) {
            case "KeyW":
            case "ArrowUp":
                this.keys.up = false;
                break;
            case "KeyS":
            case "ArrowDown":
                this.keys.down = false;
                break;
            case "KeyA":
            case "ArrowLeft":
                this.keys.left = false;
                break;
            case "KeyD":
            case "ArrowRight":
                this.keys.right = false;
                break;
            case "Enter":
                this.keys.interact = false;
                break;
        }
    }
}