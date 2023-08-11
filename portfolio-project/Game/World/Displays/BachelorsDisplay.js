﻿import { CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js';

import Game from "../../Game";

export default class BachelorsDisplay {
    constructor() {
        this.game = new Game();
        this.cssScene = this.game.cssScene;
        this.camera = this.game.camera;
    }

    createDisplay(laptop) {
        this.containerDiv = this.createContainer();
        this.containerDiv.style.visibility = "hidden";
        this.containerObject = this.createContainerObject(laptop, this.containerDiv);
        this.cssScene.add(this.containerObject);
    }

    createContainer() {
        const containerDiv = document.createElement("div");
        containerDiv.className = "laptop-container";
        containerDiv.textContent = "Graduated from the University of Aveiro in 2022 with a bachelor's degree in Computer Science"
        return containerDiv;
    }

    createContainerObject(laptop, containerDiv) {
        let containerObject = new CSS3DObject(containerDiv);
        containerObject.position.x = laptop.position.x - 0.5;
        containerObject.position.y = laptop.position.y + 0.7;
        containerObject.position.z = laptop.position.z;
        containerObject.rotation.order = "ZYX";
        containerObject.rotation.set(
            0,
            Math.PI / 2,
            this.camera.gameCamera.rotation.y
        );
        containerObject.scale.x = 0.0009;
        containerObject.scale.y = 0.0009;
        return containerObject;
    }

    update() {        
        let distanceToPlayer = Math.abs(this.game.world.player.playerObject.position.z - this.containerObject.position.z);
        if (distanceToPlayer <= 0.8) {
            this.containerDiv.style.visibility = "visible";
        }
        else {
            this.containerDiv.style.visibility = "hidden";
        }
    }
}
