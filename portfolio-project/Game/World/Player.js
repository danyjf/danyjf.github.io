import * as THREE from "three";

import Game from "../Game";
import SquareCollider from "../Utils/SquareCollider";

export default class Player {
    constructor() {
        this.game = new Game();
        this.worldColliders = this.game.world.colliders;
        this.collider = new SquareCollider(this, 0.075, -0.075, -0.075, 0.075);
        this.scene = this.game.scene;
        this.speed = 0.02;
        this.direction = new THREE.Vector3(0, 0, 0);
    
        document.addEventListener("keydown", this.onKeyDown.bind(this), false);
        document.addEventListener("keyup", this.onKeyUp.bind(this), false);

        this.setModel();
    }

    setModel() {
        const geometry = new THREE.BoxGeometry(0.15, 0.15, 0.15); 
        const material = new THREE.MeshStandardMaterial({color: 0xcccccc}); 
        this.player = new THREE.Mesh(geometry, material); 
        this.player.position.y = 0.075;
        this.scene.add(this.player);
    }

    onKeyDown(event) {
        if (event.repeat)
            return;
        
        switch (event.code) {
            case "KeyW":
            case "ArrowUp":
                this.direction.x -= 1;
                break;
            case "KeyS":
            case "ArrowDown":
                this.direction.x += 1;
                break;
            case "KeyA":
            case "ArrowLeft":
                this.direction.z += 1;
                break;
            case "KeyD":
            case "ArrowRight":
                this.direction.z -= 1;
                break;
        }
    }

    onKeyUp(event) {
        switch (event.code) {
            case "KeyW":
            case "ArrowUp":
                this.direction.x += 1;
                break;
            case "KeyS":
            case "ArrowDown":
                this.direction.x -= 1;
                break;
            case "KeyA":
            case "ArrowLeft":
                this.direction.z -= 1;
                break;
            case "KeyD":
            case "ArrowRight":
                this.direction.z += 1;
                break;
        }
    }

    update() {
        const normalizedDir = this.direction.clone();
        normalizedDir.normalize();

        const moveX = normalizedDir.x * this.speed;
        const moveZ = normalizedDir.z * this.speed;
        this.player.position.x += moveX;
        this.player.position.z += moveZ;

        this.collider.updateCollider(moveZ, moveX);
    }
}
