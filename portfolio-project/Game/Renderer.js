import * as THREE from "three";

import Game from "./Game";

export default class Renderer {
    constructor() {
        this.game = new Game();
        this.sizes = this.game.sizes;
        this.scene = this.game.scene;
        this.canvas = this.game.canvas;
        this.camera = this.game.camera;

        this.setRenderer();
    }

    setRenderer() {
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true
        });

        this.renderer.useLegacyLights = false;
        this.renderer.outputColorSpace = THREE.SRGBColorSpace;
        this.renderer.toneMapping = THREE.CineonToneMapping;
        this.renderer.toneMappingExposure = 1.75;
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

        this.renderer.setSize(this.sizes.width, this.sizes.height);
        this.renderer.setPixelRatio(this.sizes.pixelRatio);
    }

    resize() {
        this.renderer.setSize(this.sizes.width, this.sizes.height);
        this.renderer.setPixelRatio(this.sizes.pixelRatio);
    }

    update() {
        // render the scene with the debug camera that has the orbit controls
        this.renderer.setViewport(0, 0, this.sizes.width, this.sizes.height);
        this.renderer.render(this.scene, this.camera.debugCamera);
        
        // render the scene with the game camera on the top right corner 
        // occupying 1/3 of the screen 
        this.renderer.setScissorTest(true);
        this.renderer.setViewport(
            this.sizes.width - this.sizes.width / 3, 
            this.sizes.height - this.sizes.height / 3, 
            this.sizes.width / 3, 
            this.sizes.height / 3
        );
        this.renderer.setScissor(
            this.sizes.width - this.sizes.width / 3, 
            this.sizes.height - this.sizes.height / 3, 
            this.sizes.width / 3, 
            this.sizes.height / 3
        );
        this.renderer.render(this.scene, this.camera.gameCamera)
        this.renderer.setScissorTest(false);
    }
}
