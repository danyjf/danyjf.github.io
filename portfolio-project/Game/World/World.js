import Game from "../Game";

import OutlineEffect from "../Utils/OutlineEffect";

import Environment from "./Environment";
import Room from "./Room";
import Player from "./Player";
import Skate from "./Skate";
import Computer from "./Computer";
import Outside from "./Outside";
import Github from "./Github";
import Mail from "./Mail";

export default class World {
    constructor() {
        this.game = new Game();
        this.resources = this.game.resources;
        this.worldLoaded = false;

        this.resources.on("ready", () => {
            this.environment = new Environment();
            this.outlineEffect = new OutlineEffect();
            this.room = new Room();
            this.skate = new Skate();
            this.computer = new Computer();
            this.outside = new Outside();
            this.github = new Github();
            this.mail = new Mail();
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
        this.skate.start();
        this.computer.start();
        this.outside.start();
        this.github.start();
        this.mail.start();
    }

    update() {
        if (this.worldLoaded) {
            this.player.update();
            this.outlineEffect.update();
            this.computer.update();
            this.skate.update();

            this.handleCollisions();
        }
    }

    handleCollisions() {
        for (const collider of this.room.colliders) {
            this.player.collider.handleCollision(collider);
        }
        for (const collider of this.outside.colliders) {
            this.player.collider.handleCollision(collider);
        }
    }
}
