import { EventEmitter } from "events"

export default class Time extends EventEmitter {
    constructor() {
        super();
        this.start = Date.now() / 1000;
        this.current = this.start;
        this.elapsed = 0;           // time since the beginning of the program 
        this.delta = 0.016;         // time since the last frame
        
        this.update();
    }

    update() {
        const currentTime = Date.now() / 1000;
        this.delta = currentTime - this.current;
        this.current = currentTime;
        this.elapsed = this.current - this.start;

        this.emit("update");
        window.requestAnimationFrame(() => this.update());
    }
}
