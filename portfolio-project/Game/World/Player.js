﻿import * as THREE from "three";

import Game from "../Game";
import SquareCollider from "../Utils/SquareCollider";
import Room from "./Room";
import Outside from "./Outside";

export default class Player {
    constructor() {
        this.game = new Game();
        this.scene = this.game.scene;
        this.time = this.game.time;
        this.inputHandler = this.game.inputHandler;
        this.camera = this.game.camera;
    }
    
    start() {
        this.outlineEffect = this.game.world.outlineEffect;
        this.worldColliders = this.game.world.colliders;
        this.verticalScreenDisplay = this.game.world.verticalScreenDisplay;
        this.width = 0.075;
        this.collider = new SquareCollider(this, this.width, -this.width, -this.width, this.width);
        this.speed = 1.25;
        this.direction = new THREE.Vector3(0, 0, 0);
        this.isBlocked = false;
        this.setModel();
    }

    setModel() {
        const geometry = new THREE.BoxGeometry(0.15, 0.15, 0.15); 
        const material = new THREE.MeshStandardMaterial({color: 0xcccccc}); 
        this.playerObject = new THREE.Mesh(geometry, material); 
        this.playerObject.position.y = 0.075;
        this.scene.add(this.playerObject);
    }

    moveToOutside() {
        this.playerObject.position.x = 0;
        this.playerObject.position.z = -13.46;
        this.collider.setColliderPosition(
            this.playerObject.position.z + this.width,
            this.playerObject.position.z - this.width,
            this.playerObject.position.x - this.width,
            this.playerObject.position.x + this.width,
        );
    }

    moveToInside() {
        this.playerObject.position.x = 0;
        this.playerObject.position.z = -1.13;
        this.collider.setColliderPosition(
            this.playerObject.position.z + this.width,
            this.playerObject.position.z - this.width,
            this.playerObject.position.x - this.width,
            this.playerObject.position.x + this.width,
        );
    }

    insideTrigger(other) {
        if (other.owner instanceof Room) {
            this.moveToOutside();
            this.camera.moveToOutside();
        }
        else if (other.owner instanceof Outside) {
            this.moveToInside();
            this.camera.moveToInside();
        }
    }

    update() {
        if (this.isBlocked)
            return;

        if (this.inputHandler.keys.interact && !this.camera.isAnimating) {
            const selectedObject = this.outlineEffect.getSelectedObject();
            if (selectedObject) {
                this.isBlocked = true;
                switch (selectedObject.interactableName) {
                    case "Computer":
                        this.camera.moveToComputer();
                        this.game.world.computer.verticalScreenDisplay.onFocus = true;
                        break;
                    case "Skate":
                        this.camera.moveToSkate();
                        this.game.world.skate.skateDisplay.onFocus = true;
                        break;
                }
            }
        }

        this.direction.set(0, 0, 0);
        if (this.inputHandler.keys.up)
            this.direction.x -= 1;
        if (this.inputHandler.keys.down)
            this.direction.x += 1;
        if (this.inputHandler.keys.left)
            this.direction.z += 1;
        if (this.inputHandler.keys.right)
            this.direction.z -= 1;
        this.direction.normalize();

        const moveX = this.direction.x * this.speed * this.time.delta;
        const moveZ = this.direction.z * this.speed * this.time.delta;
        this.playerObject.position.x += moveX;
        this.playerObject.position.z += moveZ;
        console.log(this.playerObject.position);

        this.collider.updateCollider(moveZ, moveX);
    }
}
