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
        this.defaultPosition = new THREE.Vector3(1.983, 2.581, 0);
        this.defaultRotation = new THREE.Quaternion(-0.27138118759377144, 0.6530118167804394, 0.27138118759377144, 0.6529012706263468);
        this.isFollowingPlayer = false;

        // animation variables
        this.isAnimating = false;
        this.startPosition = new THREE.Vector3();
        this.startRotation = new THREE.Quaternion();
        this.targetPosition = new THREE.Vector3();
        this.targetRotation = new THREE.Quaternion();
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

        this.gameCamera.position.copy(this.defaultPosition);
        this.gameCamera.quaternion.copy(this.defaultRotation);
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

    setupAnimationSettings(duration) {
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
        this.elapsedAnimationTime = 0;
        this.animationDuration = 1;
    }

    moveToDefault() {
        this.setupAnimationSettings(1);
        this.targetPosition.copy(this.defaultPosition);
        this.targetRotation.copy(this.defaultRotation);
    }

    moveToComputer() {
        this.setupAnimationSettings(1);

        // transform for horizontal monitor
        // this.targetPosition.set(-0.32, 0.524, 0);
        // this.targetRotation.set(0, 0.7071067811865476, 0, 0.7071067811865476);

        // transform for vertical monitor
        this.targetPosition.set(-0.495, 0.593, 0.066);
        this.targetRotation.set(0, 0.8829479983710051, 0, 0.4694708001277986);
    }

    moveToSkate() {
        this.setupAnimationSettings(1);
        this.targetPosition.set(0.592, 0.7558, -0.67);
        this.targetRotation.set(0, 0, 0, 1);
    }

    moveToOutside() {
        this.isFollowingPlayer = true;
        this.gameCamera.position.z = -15;
    }

    animateTransformToTarget(t) {
        // manipulate the value of percentage to make it smooth in and out
        // maybe something like this:
        // float t = time / duration;
        // t = t * t * (3f - 2f * t);

        if (t >= 1) {
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
            return;
        }

        this.gameCamera.position.lerpVectors(this.startPosition, this.targetPosition, t);
        this.gameCamera.quaternion.slerpQuaternions(this.startRotation, this.targetRotation, t);
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
            const percentage = this.elapsedAnimationTime / this.animationDuration;
            this.elapsedAnimationTime += this.time.delta;
            this.animateTransformToTarget(percentage);
        }

        if (this.isFollowingPlayer) {
            const smoothing = 3;
            this.gameCamera.position.z = THREE.MathUtils.damp(
                this.gameCamera.position.z, 
                this.game.world.player.playerObject.position.z, 
                smoothing, 
                this.time.delta
            );
        }

        this.controls.update();
    }
}
