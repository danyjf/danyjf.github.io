import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

import Game from "./Game";

export default class Camera {
    constructor() {
        this.game = new Game();
        this.sizes = this.game.sizes;
        this.scene = this.game.scene;
        this.canvas = this.game.canvas;
        this.time = this.game.time;

        // animation variables
        this.isAnimating = false;
        this.startPosition = new THREE.Vector3();
        this.startRotation = new THREE.Quaternion();
        this.targetPosition = new THREE.Vector3();
        this.targetRotation = new THREE.Quaternion();
        this.startAnimationTime = 0;
        this.elapsedAnimationTime = 0;
        this.animationDuration = 0;

        // setup cameras
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
        if (this.isAnimating)
            return;
        this.isAnimating = true;
        this.startPosition.set(
            this.gameCamera.position.x, 
            this.gameCamera.position.y, 
            this.gameCamera.position.z
        );
        this.startRotation.set(
            this.gameCamera.quaternion.x, 
            this.gameCamera.quaternion.y, 
            this.gameCamera.quaternion.z, 
            this.gameCamera.quaternion.w
        );
        // this.targetPosition.set(-0.32, 0.524, 0);
        // this.targetRotation.set(0, 0.7071067811865476, 0, 0.7071067811865476);
        this.targetPosition.set(-0.495, 0.5925, 0.066);
        this.targetRotation.set(0, 0.8829479983710051, 0, 0.4694708001277986);

        this.startAnimationTime = this.time.current;
        this.elapsedAnimationTime = 0;
        this.animationDuration = 1;
    }

    animateTransformToTarget(percentage) {
        if (percentage >= 1) {
            this.isAnimating = false;
            this.gameCamera.position.set(
                this.targetPosition.x, 
                this.targetPosition.y, 
                this.targetPosition.z
            );
            this.gameCamera.quaternion.set(
                this.targetRotation.x, 
                this.targetRotation.y, 
                this.targetRotation.z, 
                this.targetRotation.w
            );
        }

        this.gameCamera.position.lerpVectors(this.startPosition, this.targetPosition, percentage);
        this.gameCamera.quaternion.slerpQuaternions(this.startRotation, this.targetRotation, percentage);
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
        if (this.isAnimating) {
            this.elapsedAnimationTime = this.time.current - this.startAnimationTime;
            const percentage = this.elapsedAnimationTime / this.animationDuration;
            this.animateTransformToTarget(percentage);
        }

        this.controls.update();
    }
}
