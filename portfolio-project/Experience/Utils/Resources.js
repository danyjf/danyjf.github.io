import * as THREE from "three";

import { EventEmitter } from "events";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

import Experience from "../Experience";

export default class Resources extends EventEmitter {
    constructor(assets) {
        super();
        this.experience = new Experience();
        this.renderer = this.experience.renderer;
        
        this.assets = assets;

        this.items = {};
        this.queue = this.assets.length;
        this.loaded = 0;

        this.setLoaders();
        this.startLoading();
    }

    setLoaders() {
        this.loaders = {};
        this.loaders.gltfLoader = new GLTFLoader();
        this.loaders.dracoLoader = new DRACOLoader();
        this.loaders.dracoLoader.setDecoderPath("/draco/");
        this.loaders.gltfLoader.setDRACOLoader(this.loaders.dracoLoader);
    }

    startLoading() {
        for (const asset of this.assets) {
            switch (asset.type) {
                case "glbModel":
                    this.loaders.gltfLoader.load(asset.path, (file) => {
                        this.singleAssetLoaded(asset, file);
                    });

                    break;
                case "videoTexture":
                    let video = document.createElement("video");
                    video.src = asset.path;
                    video.muted = true;
                    video.playsInline = true;
                    video.autoplay = true;
                    video.loop = true;
                    video.play();

                    let videoTexture = new THREE.VideoTexture(video);
                    videoTexture.flipY = true;
                    videoTexture.minFilter = THREE.NearestFilter;
                    videoTexture.magFilter = THREE.NearestFilter;
                    videoTexture.generateMipmaps = false;
                    videoTexture.colorSpace = THREE.SRGBColorSpace;

                    this.singleAssetLoaded(asset, videoTexture);

                    break;
            }
        }
    }

    singleAssetLoaded(asset, file) {
        this.items[asset.name] = file;
        this.loaded++;

        if (this.loaded === this.queue) {
            this.emit("ready");
        }
    }
}
