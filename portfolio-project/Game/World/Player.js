import * as THREE from "three";

import Game from "../Game";
import SquareCollider from "../Utils/SquareCollider";

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
        this.collider = new SquareCollider(this, 0.075, -0.075, -0.075, 0.075);
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

    update() {
        if (this.isBlocked)
            return;

        if (this.inputHandler.keys.interact) {
            this.isBlocked = true;

            const selectedObject = this.outlineEffect.getSelectedObject();
            switch (selectedObject.name) {
                case "VerticalMonitor":
                    this.camera.moveToComputer();
                    break;
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
