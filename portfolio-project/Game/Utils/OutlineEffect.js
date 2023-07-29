import * as THREE from "three";

import Game from "../Game";

export default class OutlineEffect {
    constructor() {
        this.game = new Game();
        this.outlinedObjects = this.game.renderer.outlinePass.selectedObjects;
    }

    addOutline(obj) {
        if (this.outlinedObjects.length === 0) {
            this.outlinedObjects.push(obj);
        }
        else {
            console.error("Outlined objects list has more than one element");
        }
    }

    removeOutline(obj) {
        if (this.outlinedObjects.length === 1) {
            this.outlinedObjects.pop();
        }
        else if (this.outlinedObjects.length === 0) {
            console.error("Removing object from empty outlined objects list");
        }
        else {
            console.error("Outlined objects list has more than one element");
        }
    }
}
