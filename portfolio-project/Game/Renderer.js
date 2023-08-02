import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer"
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { OutlinePass } from "three/examples/jsm/postprocessing/OutlinePass";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass";
import { FXAAShader } from "three/examples/jsm/shaders/FXAAShader";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass";

import Game from "./Game";

export default class Renderer {
    constructor() {
        this.game = new Game();
        this.sizes = this.game.sizes;
        this.scene = this.game.scene;
        this.canvas = this.game.canvas;
        this.camera = this.game.camera;

        this.setRenderer();
        this.setComposer();
    }

    setRenderer() {
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas
        });

        this.renderer.outputColorSpace = THREE.SRGBColorSpace;
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.renderer.setSize(this.sizes.width, this.sizes.height);
        this.renderer.setPixelRatio(this.sizes.pixelRatio);
    }

    setComposer() {
        this.composer = new EffectComposer(this.renderer);
        
        let renderPass = new RenderPass(this.scene, this.camera.gameCamera);
        this.composer.addPass(renderPass);
        
        this.outlinePass = new OutlinePass(new THREE.Vector2(this.sizes.width, this.sizes.height), this.scene, this.camera.gameCamera);
        this.composer.addPass(this.outlinePass);

        let fxaaPass = new ShaderPass(FXAAShader);
        fxaaPass.material.uniforms['resolution'].value.x = 1 / (this.sizes.width * this.sizes.pixelRatio);
		fxaaPass.material.uniforms['resolution'].value.y = 1 / (this.sizes.height * this.sizes.pixelRatio);
        this.composer.addPass(fxaaPass);

        let outputPass = new OutputPass();
        this.composer.addPass(outputPass);
    }

    resize() {
        this.renderer.setSize(this.sizes.width, this.sizes.height);
        this.renderer.setPixelRatio(this.sizes.pixelRatio);
    }

    update() {
        // render the scene with the debug camera that has the orbit controls
        this.renderer.setViewport(0, 0, this.sizes.width, this.sizes.height);
        this.renderer.render(this.scene, this.camera.debugCamera)
        
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
        this.composer.render();
        this.renderer.setScissorTest(false);
    }
}
