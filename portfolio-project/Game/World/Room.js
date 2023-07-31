﻿import * as THREE from "three";

import SquareCollider from "../Utils/SquareCollider";

import Game from "../Game";

export default class Room {
    constructor() {
        this.game = new Game();
        this.scene = this.game.scene;
        this.resources = this.game.resources;
        this.room = this.resources.items.Room.scene;
        this.outlineEffect = this.game.outlineEffect;
        this.leftWallCollider = new SquareCollider(1.2, 1, -1.5, 1.5);
        this.rightWallTopCollider = new SquareCollider(-1, -2, -1.5, -0.26);
        this.rightWallBottomCollider = new SquareCollider(-1, -2, 0.26, 1.5);
        this.topWallCollider = new SquareCollider(1, -1, -1.2, -1);
        this.bottomWallCollider = new SquareCollider(1, -1, 1, 1.2);
        this.deskCollider = new SquareCollider(0.4, -0.4, -1, -0.6);
        
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
