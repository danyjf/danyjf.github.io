import * as THREE from "three";

import SquareCollider from "../Utils/SquareCollider";

import Game from "../Game";

export default class Room {
    constructor() {
        this.game = new Game();
        this.scene = this.game.scene;
        this.resources = this.game.resources;
    }
    
    start() {
        this.outlineEffect = this.game.world.outlineEffect;
        this.roomObject = this.resources.items.Room.scene;
        this.colliders = [
            new SquareCollider(this, 1.2, 1, -1.5, 1.5),      // left wall collider
            new SquareCollider(this, -1, -2, -1.5, -0.26),    // right top wall collider
            new SquareCollider(this, -1, -2, 0.26, 1.5),      // right bottom wall collider
            new SquareCollider(this, 1, -1, -1.2, -1),        // top wall collider
            new SquareCollider(this, 1, -1, 1, 1.2),          // bottom wall collider
            new SquareCollider(this, 0.4, -0.4, -1, -0.6)     // desk collider
        ];
        this.setModel();
    }

    setModel() {
        this.roomObject.traverse((child) => {
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
                this.resources.items.TorusForestVerticalProject.magFilter = THREE.NearestFilter;
                this.resources.items.TorusForestVerticalProject.minFilter = THREE.NearestFilter;
                this.resources.items.TorusForestVerticalProject.generateMipmaps = false;
                child.material = new THREE.MeshBasicMaterial({
                    map: this.resources.items.TorusForestVerticalProject
                });
            }

            if (child.name === "VerticalMonitor") {
                this.outlineEffect.addSelectable(child);
            };
        });

        this.scene.add(this.roomObject);
    }

    resize() {}

    update() {}
}
