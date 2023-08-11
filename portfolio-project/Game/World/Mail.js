import * as THREE from "three";

import Game from "../Game";

export default class Mail {
    constructor() {
        this.game = new Game();
        this.scene = this.game.scene;
        this.resources = this.game.resources;
    }

    start() {
        this.mailObject = this.resources.items.Mail.scene;
        this.outlineEffect = this.game.world.outlineEffect;

        // interactable variables
        this.interactPosition = new THREE.Vector3(1.04001, 0, -18.89086);
        this.interactRadius = 0.9;
        this.interactable = this.mailObject;
        this.interactableName = "Mail";
        this.outlineEffect.addSelectable(this);

        this.setModel();
    }

    setModel() {
        this.mailObject.traverse((child) => {
            if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;
            }
        });

        this.scene.add(this.mailObject);
    }
}
