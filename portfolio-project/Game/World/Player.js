import * as THREE from "three";

import Game from "../Game";

export default class Player {
    constructor() {
        this.game = new Game();
        this.scene = this.game.scene;
        this.speed = 0.1;
    
        document.addEventListener("keydown", this.onDocumentKeyDown.bind(this), false);

        this.setModel();
    }

    setModel() {
        const geometry = new THREE.BoxGeometry(0.15, 0.15, 0.15); 
        const material = new THREE.MeshStandardMaterial({color: 0xcccccc}); 
        this.player = new THREE.Mesh(geometry, material); 
        this.player.position.y = 0.075;
        this.scene.add(this.player);
    }

    onDocumentKeyDown(event) {
        switch (event.code) {
            case "KeyW":
            case "ArrowUp":
                this.player.position.x -= this.speed;
                break;
            case "KeyS":
            case "ArrowDown":
                this.player.position.x += this.speed;
                break;
            case "KeyA":
            case "ArrowLeft":
                this.player.position.z += this.speed;
                break;
            case "KeyD":
            case "ArrowRight":
                this.player.position.z -= this.speed;
                break;
        }
    }

    update() {
        
    }
}
