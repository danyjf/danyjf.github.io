import * as THREE from "three";

import Game from "../Game";

export default class Player {
    constructor() {
        this.game = new Game();
        this.scene = this.game.scene;
    
        this.setModel();
    }

    setModel() {
        const geometry = new THREE.BoxGeometry(0.15, 0.15, 0.15); 
        const material = new THREE.MeshStandardMaterial({color: 0xcccccc}); 
        const player = new THREE.Mesh(geometry, material); 
        player.position.y = 0.075;
        this.scene.add(player);
    }

    update() {
        // take care of the controls
    }
}
