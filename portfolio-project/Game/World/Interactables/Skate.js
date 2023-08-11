import * as THREE from "three";

import Skills from "../../Configs/Skills";

import Game from "../../Game";
import SkateDisplay from "../Displays/SkateDisplay";

export default class Skate {
    constructor() {
        this.game = new Game();
        this.scene = this.game.scene;
        this.resources = this.game.resources;
    }

    start() {
        this.skateObject = this.resources.items.Skate.scene;
        this.outlineEffect = this.game.world.outlineEffect;
        this.skateDisplay = new SkateDisplay(Skills);

        // interactable variables
        this.interactPosition = new THREE.Vector3(0.592, 0, -0.966);
        this.interactRadius = 0.4;
        this.interactable = this.skateObject;
        this.interactableName = "Skate";
        this.outlineEffect.addSelectable(this);

        this.setModel();
    }

    setModel() {
        this.skateObject.traverse((child) => {
            if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;
            }

            if (child.name === "SkateBoard") {
                this.skateDisplay.createDisplay(child);
            }
        });

        this.scene.add(this.skateObject);
    }

    update() {
        this.skateDisplay.update();
    }
}
