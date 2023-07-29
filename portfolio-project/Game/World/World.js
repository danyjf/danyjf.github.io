﻿import Game from "../Game";

import Environment from "./Environment";
import Room from "./Room";
import Player from "./Player";

export default class World {
    constructor() {
        this.game = new Game();
        this.resources = this.game.resources;
        this.worldLoaded = false;

        this.resources.on("ready", () => {
            this.environment = new Environment();
            this.room = new Room();
            this.player = new Player();
            this.worldLoaded = true;
        });
    }

    update() {
        if (this.worldLoaded) {
            this.player.update();
        }
    }
}
