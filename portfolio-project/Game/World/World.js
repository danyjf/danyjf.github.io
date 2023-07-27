import Game from "../Game";

import Environment from "./Environment";
import Room from "./Room";

export default class World {
    constructor() {
        this.game = new Game();
        this.resources = this.game.resources;

        this.resources.on("ready", () => {
            this.environment = new Environment();
            this.room = new Room();
        });
    }

    resize() {}

    update() {}
}
