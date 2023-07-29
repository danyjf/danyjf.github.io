import * as THREE from "three";

import Game from "../Game";

export default class Room {
    constructor() {
        this.game = new Game();
        this.scene = this.game.scene;
        this.outlines = this.game.outlines;
        this.resources = this.game.resources;
        this.room = this.resources.items.Room.scene;
        
        this.setModel();
    }

    setModel() {
        this.room.traverse((child) => {
            if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;
            }

            if (child.name === "ComputerCaseGlass") {
                child.material = new THREE.MeshPhysicalMaterial();
                child.material.roughness = 0;
                child.material.color.set(0xffffff);
                child.material.ior = 1;
                child.material.transmission = 1;
                child.material.opacity = 1;
            }

            if (child.name === "Screen") {
                child.material = new THREE.MeshBasicMaterial({
                    map: this.resources.items.ScreenVideo
                });

                // write to the stencil buffer
                child.material.stencilWrite = true;
                child.material.stencilZPass = THREE.ReplaceStencilOp;
                child.material.stencilFunc = THREE.AlwaysStencilFunc;
                child.material.stencilRef = 1;
                child.material.stencilFuncMask = 0xff;

                // check stencil buffer and add scaled clone to the outline list
                let outline = child.clone();
                outline.material = new THREE.MeshBasicMaterial();
                outline.material.color.set(0xffffff);
                outline.material.stencilWrite = true;
                outline.material.stencilFunc = THREE.NotEqualStencilFunc;
                outline.material.stencilRef = 1;
                // outline.material.stencilFuncMask = 0x00;
                outline.material.depthTest = false
                outline.scale.set(0.2, 0.2, 0.2);
                this.outlines.add(outline);
            }

            if (child.name === "Monitor") {
                // write to the stencil buffer
                child.material.stencilWrite = true;
                child.material.stencilZPass = THREE.ReplaceStencilOp;
                child.material.stencilFunc = THREE.AlwaysStencilFunc;
                child.material.stencilRef = 1;
                child.material.stencilFuncMask = 0xff;

                // add scaled clone to the outline list
                let outline = child.clone();
                outline.material = new THREE.MeshBasicMaterial();
                outline.material.color.set(0xffffff);
                outline.material.stencilWrite = true;
                outline.material.stencilFunc = THREE.NotEqualStencilFunc;
                outline.material.stencilRef = 1;
                // outline.material.stencilFuncMask = 0x00;
                outline.material.depthTest = false
                outline.scale.set(0.25, 0.25, 0.25);
                this.outlines.add(outline);
            };
        });

        this.scene.add(this.room);
    }

    resize() {}

    update() {}
}
