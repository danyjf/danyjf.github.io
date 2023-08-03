import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

import Game from "./Game";

export default class Camera {
    constructor() {
        this.game = new Game();
        this.sizes = this.game.sizes;
        this.scene = this.game.scene;
        this.canvas = this.game.canvas;

        this.createGameCamera();
        this.createDebugCamera();
        this.setOrbitControls();
        
        this.setHelpers();
    }

    createGameCamera() {
        this.gameCamera = new THREE.PerspectiveCamera(
            50, 
            this.sizes.aspect, 
            0.1, 
            1000
        );
        this.scene.add(this.gameCamera);

        this.gameCamera.position.set(1.983, 2.581, 0);
        this.gameCamera.rotation.set(-1.571, 0.783, 1.571);
    }

    createDebugCamera() {
        this.debugCamera = new THREE.PerspectiveCamera(
            50, 
            this.sizes.aspect, 
            0.1, 
            1000
        );
        this.scene.add(this.debugCamera);

        this.debugCamera.position.set(1.983, 2.581, 0);
    }

    setOrbitControls() {
        this.controls = new OrbitControls(this.debugCamera, this.canvas);
        this.controls.enableDamping = true;
        this.controls.enableZoom = true;
    }

    moveToComputer() {
        this.gameCamera.position.set(-0.32, 0.524, 0);
        this.gameCamera.rotation.set(0, Math.PI / 2, 0);
    }

    setHelpers() {
        const size = 10;
        const divisions = 10;

        const gridHelper = new THREE.GridHelper(size, divisions);
        this.scene.add(gridHelper);

        const axesHelper = new THREE.AxesHelper(10);
        this.scene.add(axesHelper);
    }

    resize() {
        this.gameCamera.aspect = this.sizes.aspect;
        this.gameCamera.updateProjectionMatrix();

        this.debugCamera.aspect = this.sizes.aspect;
        this.debugCamera.updateProjectionMatrix();
    }

    update() {
        this.controls.update();
    }
}
