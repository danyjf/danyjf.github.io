import * as THREE from "three";

import Game from "../Game";

export default class Computer {
    constructor() {
        this.game = new Game();
        this.scene = this.game.scene;
        this.resources = this.game.resources;
    }

    start() {
        this.outlineEffect = this.game.world.outlineEffect;
        this.verticalScreenDisplay = this.game.world.verticalScreenDisplay;
        this.computerObject = this.resources.items.Computer.scene;
        this.setModel();
    }

    setModel() {
        this.computerObject.traverse((child) => {
            if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;
            }

            if (child.name === "ComputerCaseGlass") {
                child.material = new THREE.MeshPhysicalMaterial();
                child.material.roughness = 0;
                child.material.color.set(0xffffff);
                child.material.ior = 1;
                child.material.transmission = 1;
                child.material.opacity = 1;
            }

            if (child.name === "Screen") {
                // playing video causes a memory leak on firefox
                // child.material = new THREE.MeshBasicMaterial({
                //     map: this.resources.items.ScreenVideo
                // });
                child.material = new THREE.MeshBasicMaterial({
                    map: this.resources.items.CodeScreen
                });
            }

            if (child.name === "VerticalScreen") {
                this.verticalScreenDisplay.createDisplay(child);
            }

            if (child.name === "VerticalMonitor") {
                this.outlineEffect.addSelectable(child);
            };
        });

        this.scene.add(this.computerObject);
    }
}
