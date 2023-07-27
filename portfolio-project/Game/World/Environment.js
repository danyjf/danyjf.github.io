import * as THREE from "three";

import Game from "../Game";

export default class Environment {
    constructor() {
        this.game = new Game();
        this.scene = this.game.scene;
        this.resources = this.game.resources;
        
        this.setAmbientLight();
        this.setSunLight();
    }

    setAmbientLight() {
        this.ambientLight = new THREE.AmbientLight("#ffffff", 1);
        this.scene.add(this.ambientLight);
    }

    setSunLight() {
        this.sunLight = new THREE.DirectionalLight("#ffffff", 3);
        this.sunLight.castShadow = true;
        this.sunLight.shadow.camera.far = 20;
        this.sunLight.shadow.mapSize.set(2048, 2048);
        this.sunLight.shadow.normalBias = 0.05;
        this.sunLight.position.set(1.5, 7, 3);
        this.scene.add(this.sunLight);
    }

    resize() {}

    update() {}
}
