import * as THREE from "three";

import Game from "../Game";
import SquareCollider from "../Utils/SquareCollider";

export default class Player {
    constructor() {
        this.game = new Game();
        this.scene = this.game.scene;
        this.time = this.game.time;
    }
    
    start() {
        document.addEventListener("keydown", this.onKeyDown.bind(this), false);
        document.addEventListener("keyup", this.onKeyUp.bind(this), false);
        this.worldColliders = this.game.world.colliders;
        this.collider = new SquareCollider(this, 0.075, -0.075, -0.075, 0.075);
        this.speed = 1.25;
        this.direction = new THREE.Vector3(0, 0, 0);
        this.keysState = {
            "up": false,
            "down": false,
            "left": false,
            "right": false,
        };
        this.setModel();
    }

    setModel() {
        const geometry = new THREE.BoxGeometry(0.15, 0.15, 0.15); 
        const material = new THREE.MeshStandardMaterial({color: 0xcccccc}); 
        this.playerObject = new THREE.Mesh(geometry, material); 
        this.playerObject.position.y = 0.075;
        this.scene.add(this.playerObject);
    }

    onKeyDown(event) {
        switch (event.code) {
            case "KeyW":
            case "ArrowUp":
                this.keysState.up = true;
                break;
            case "KeyS":
            case "ArrowDown":
                this.keysState.down = true;
                break;
            case "KeyA":
            case "ArrowLeft":
                this.keysState.left = true;
                break;
            case "KeyD":
            case "ArrowRight":
                this.keysState.right = true;
                break;
        }
    }

    onKeyUp(event) {
        switch (event.code) {
            case "KeyW":
            case "ArrowUp":
                this.keysState.up = false;
                break;
            case "KeyS":
            case "ArrowDown":
                this.keysState.down = false;
                break;
            case "KeyA":
            case "ArrowLeft":
                this.keysState.left = false;
                break;
            case "KeyD":
            case "ArrowRight":
                this.keysState.right = false;
                break;
        }
    }

    update() {
        this.direction.set(0, 0, 0);
        if (this.keysState.up)
            this.direction.x -= 1;
        if (this.keysState.down)
            this.direction.x += 1;
        if (this.keysState.left)
            this.direction.z += 1;
        if (this.keysState.right)
            this.direction.z -= 1;
        this.direction.normalize();

        const moveX = this.direction.x * this.speed * this.time.delta;
        const moveZ = this.direction.z * this.speed * this.time.delta;
        this.playerObject.position.x += moveX;
        this.playerObject.position.z += moveZ;

        this.collider.updateCollider(moveZ, moveX);
    }
}
