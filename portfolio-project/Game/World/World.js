import Game from "../Game";

import Environment from "./Environment";
import Room from "./Room";
import Player from "./Player";
import OutlineEffect from "../Utils/OutlineEffect";

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
            this.outlineEffect.addPlayer(this.player);
            this.worldLoaded = true;

            this.start();
        });
    }

    start() {
        this.environment.start();
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
