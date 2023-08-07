import * as THREE from "three";
import { CSS3DRenderer } from 'three/examples/jsm/renderers/CSS3DRenderer.js';
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
        this.cssScene = this.game.cssScene;
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

        this.cssRenderer = new CSS3DRenderer();
        this.cssRenderer.setSize(this.sizes.width, this.sizes.height);
        document.body.appendChild(this.cssRenderer.domElement);
    }

    setComposer() {
        this.composer = new EffectComposer(this.renderer);
        
        let renderPass = new RenderPass(this.scene, this.camera.gameCamera);
        this.composer.addPass(renderPass);
        
        this.outlinePass = new OutlinePass(new THREE.Vector2(this.sizes.width, this.sizes.height), this.scene, this.camera.gameCamera);
        this.composer.addPass(this.outlinePass);

        this.fxaaPass = new ShaderPass(FXAAShader);
        this.fxaaPass.material.uniforms['resolution'].value.x = 1 / (this.sizes.width * this.sizes.pixelRatio);
		this.fxaaPass.material.uniforms['resolution'].value.y = 1 / (this.sizes.height * this.sizes.pixelRatio);
        this.composer.addPass(this.fxaaPass);

        let outputPass = new OutputPass();
        this.composer.addPass(outputPass);
    }

    resize() {
        this.renderer.setSize(this.sizes.width, this.sizes.height);
        this.renderer.setPixelRatio(this.sizes.pixelRatio);

        this.composer.setSize(this.sizes.width, this.sizes.height);
        this.composer.setPixelRatio(this.sizes.pixelRatio);

        this.fxaaPass.material.uniforms['resolution'].value.x = 1 / (this.sizes.width * this.sizes.pixelRatio);
		this.fxaaPass.material.uniforms['resolution'].value.y = 1 / (this.sizes.height * this.sizes.pixelRatio);

        this.cssRenderer.setSize(this.sizes.width, this.sizes.height);
        this.cssRenderer.setPixelRatio(this.sizes.pixelRatio);
    }

    update() {
        // render the scene with the debug camera that has the orbit controls
        // this.renderer.setViewport(0, 0, this.sizes.width, this.sizes.height);
        // this.renderer.render(this.scene, this.camera.debugCamera)
        this.composer.render();
        this.cssRenderer.render(this.cssScene, this.camera.gameCamera);
        
        // render the scene with the game camera on the top right corner 
        // occupying 1/3 of the screen 
        // this.renderer.setScissorTest(true);
        // this.renderer.setViewport(
        //     this.sizes.width - this.sizes.width / 3, 
        //     this.sizes.height - this.sizes.height / 3, 
        //     this.sizes.width / 3, 
        //     this.sizes.height / 3
        // );
        // this.renderer.setScissor(
        //     this.sizes.width - this.sizes.width / 3, 
        //     this.sizes.height - this.sizes.height / 3, 
        //     this.sizes.width / 3, 
        //     this.sizes.height / 3
        // );
        // this.composer.render();
        // this.renderer.setScissorTest(false);
    }
}
