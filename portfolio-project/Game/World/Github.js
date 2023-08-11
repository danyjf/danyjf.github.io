import * as THREE from "three";

import Game from "../Game";

export default class Github {
    constructor() {
        this.game = new Game();
        this.scene = this.game.scene;
        this.resources = this.game.resources;
    }

    start() {
        this.githubObject = this.resources.items.Github.scene;
        this.outlineEffect = this.game.world.outlineEffect;

        // interactable variables
        this.interactPosition = new THREE.Vector3(-0.01718, 0, -19.04251);
        this.interactRadius = 0.9;
        this.interactable = this.githubObject;
        this.interactableName = "Github";
        this.outlineEffect.addSelectable(this);

        this.setModel();
    }

    setModel() {
        this.githubObject.traverse((child) => {
            if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;
            }
        });

        this.scene.add(this.githubObject);
    }
}
