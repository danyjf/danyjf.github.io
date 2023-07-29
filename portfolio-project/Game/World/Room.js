import * as THREE from "three";

import Game from "../Game";

export default class Room {
    constructor() {
        this.game = new Game();
        this.scene = this.game.scene;
        this.resources = this.game.resources;
        this.room = this.resources.items.Room.scene;
        this.outlineEffect = this.game.outlineEffect;
        
        this.setModel();
    }

    setModel() {
        this.room.traverse((child) => {
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
                child.material = new THREE.MeshBasicMaterial({
                    map: this.resources.items.ScreenVideo
                });
            }

            if (child.name === "Monitor") {
                this.outlineEffect.addOutline(child);
            };
        });

        this.scene.add(this.room);
    }

    resize() {}

    update() {}
}
