import Game from "../Game";

import OutlineEffect from "../Utils/OutlineEffect";

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
            this.outlineEffect = new OutlineEffect();
            this.room = new Room();
            this.player = new Player();
            this.worldLoaded = true;

            this.start();
        });
    }

    start() {
        this.environment.start();
        this.player.start();
        this.outlineEffect.start();
        this.room.start();
    }

    update() {
        if (this.worldLoaded) {
            this.player.update();
            this.outlineEffect.update();

            this.handleCollisions();
        }
    }

    handleCollisions() {
        for (const collider of this.room.colliders) {
            this.player.collider.handleCollision(collider);
        }
    }
}
