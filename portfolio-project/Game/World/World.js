import Game from "../Game";

import OutlineEffect from "../Utils/OutlineEffect";
import Projects from "../Utils/Projects";

import Environment from "./Environment";
import Room from "./Room";
import Player from "./Player";
import VerticalScreenDisplay from "./VerticalScreenDisplay";
import Skate from "./Skate";
import Computer from "./Computer";

export default class World {
    constructor() {
        this.game = new Game();
        this.resources = this.game.resources;
        this.worldLoaded = false;

        this.resources.on("ready", () => {
            this.environment = new Environment();
            this.outlineEffect = new OutlineEffect();
            this.verticalScreenDisplay = new VerticalScreenDisplay(Projects);
            this.room = new Room();
            this.skate = new Skate();
            this.computer = new Computer();
            this.player = new Player();
            this.worldLoaded = true;

            this.start();
        });
    }

    start() {
        this.environment.start();
        this.verticalScreenDisplay.start();
        this.player.start();
        this.outlineEffect.start();
        this.room.start();
        this.skate.start();
        this.computer.start();
    }

    update() {
        if (this.worldLoaded) {
            this.player.update();
            this.outlineEffect.update();
            this.room.update();
            this.verticalScreenDisplay.update();
            this.skate.update();

            this.handleCollisions();
        }
    }

    handleCollisions() {
        for (const collider of this.room.colliders) {
            this.player.collider.handleCollision(collider);
        }
    }
}
