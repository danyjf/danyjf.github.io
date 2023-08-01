import * as THREE from "three";

import Sizes from "./Utils/Sizes";
import Time from "./Utils/Time";
import Resources from "./Utils/Resources";
import Assets from "./Utils/Assets";
import OutlineEffect from "./Utils/OutlineEffect";

import Camera from "./Camera";
import Renderer from "./Renderer";

import World from "./World/World";

export default class Game {
    static instance;

    constructor(canvas) {
        if (Game.instance) {
            return Game.instance;
        }
        Game.instance = this;

        // create game objects
        this.canvas = canvas;
        this.scene = new THREE.Scene();
        this.time = new Time();
        this.sizes = new Sizes();
        this.camera = new Camera();
        this.renderer = new Renderer();
        this.resources = new Resources(Assets);
        this.world = new World();

        // register events
        this.time.on("update", () => this.update());
        this.sizes.on("resize", () => this.resize());
    }

    resize() {
        this.camera.resize();
        this.renderer.resize();
    }

    update() {
        this.world.update();
        this.camera.update();
        this.renderer.update();
    }
}
