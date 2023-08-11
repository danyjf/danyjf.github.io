import * as THREE from "three";

import Assets from "./Configs/Assets";

import Sizes from "./Utils/Sizes";
import Time from "./Utils/Time";
import Resources from "./Utils/Resources";
import InputHandler from "./Utils/InputHandler";

import Camera from "./Camera";
import Renderer from "./Renderer";

import World from "./World/World";

export default class Game {
    static instance;

    constructor(canvas, uiDiv, transitionDiv) {
        if (Game.instance) {
            return Game.instance;
        }
        Game.instance = this;

        // create game objects
        this.canvas = canvas;
        this.uiDiv = uiDiv;
        this.transitionDiv = transitionDiv;
        this.scene = new THREE.Scene();
        this.cssScene = new THREE.Scene();
        this.time = new Time();
        this.sizes = new Sizes();
        this.inputHandler = new InputHandler();
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
