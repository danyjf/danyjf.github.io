import * as THREE from "three";

import Game from "../Game";
import SquareCollider from "../Utils/SquareCollider";
import Room from "./Room";
import Outside from "./Outside";
import { CSS3DObject } from "three/examples/jsm/renderers/CSS3DRenderer";

export default class Player {
    constructor() {
        this.game = new Game();
        this.scene = this.game.scene;
        this.transitionDiv = this.game.transitionDiv;
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
        this.isTransitioning = false;
        this.holdingEnter = false;
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
        this.playerObject.position.x = 40;
        this.playerObject.position.z = 1.85;
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

    fadeOut(other) {
        var op = 0; // initial opacity
        var timer = setInterval(function () {
            if (op >= 1) {
                if (other.owner instanceof Room) {
                    this.moveToOutside();
                    this.camera.moveToOutside();
                }
                else if (other.owner instanceof Outside) {
                    this.moveToInside();
                    this.camera.moveToInside();
                }

                this.fadeIn();

                clearInterval(timer);
            }
            this.transitionDiv.style.opacity = op;
            op += 0.1;
        }.bind(this), 50);
    }

    fadeIn() {
        var op = 1; // initial opacity
        var timer = setInterval(function () {
            if (op <= 0) {
                this.isTransitioning = false;
                this.isBlocked = false;
                this.transitionDiv.style.visibility = "hidden";

                clearInterval(timer);
            }
            this.transitionDiv.style.opacity = op;
            op -= 0.1;
        }.bind(this), 50);
    }

    insideTrigger(other) {
        if (!this.isTransitioning) {
            this.isTransitioning = true;
            this.isBlocked = true;
            this.transitionDiv.style.visibility = "visible";
            this.fadeOut(other);
        }
    }

    update() {
        if (this.isBlocked)
            return;

        if (!this.inputHandler.keys.interact)
            this.holdingEnter = false;

        if (this.inputHandler.keys.interact && !this.camera.isAnimating && !this.holdingEnter) {
            this.holdingEnter = true;
            const selectedObject = this.outlineEffect.getSelectedObject();
            if (selectedObject) {
                switch (selectedObject.interactableName) {
                    case "Computer":
                        this.isBlocked = true;
                        this.camera.moveToComputer();
                        this.game.world.computer.verticalScreenDisplay.onFocus = true;
                        break;
                    case "Skate":
                        this.isBlocked = true;
                        this.camera.moveToSkate();
                        this.game.world.skate.skateDisplay.onFocus = true;
                        break;
                    case "Github":
                        this.inputHandler.keys.interact = false;
                        window.open("https://github.com/danyjf", "_blank");
                        break;
                    case "Mail":
                        this.inputHandler.keys.interact = false;
                        window.location.href = "mailto:deny.jo@hotmail.com";
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

        this.collider.updateCollider(moveZ, moveX);
    }
}
