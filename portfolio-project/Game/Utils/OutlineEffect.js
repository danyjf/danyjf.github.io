import * as THREE from "three";

import Game from "../Game";

export default class OutlineEffect {
    constructor() {
        this.game = new Game();
    }
    
    start() {
        this.outlinedObjects = this.game.renderer.outlinePass.selectedObjects;
        this.player = this.game.world.player;
        this.selectableObjects = [];
        this.distancesToPlayer = [];
        this.currentlySelectedIndex = null;
    }

    addSelectable(obj) {
        this.selectableObjects.push(obj);
        if (this.player) {
            this.distancesToPlayer.push(this.getDistanceToPlayer(obj));
        }
    }

    addPlayer(player) {
        this.player = player;
        for (const obj of this.selectableObjects) {
            this.distancesToPlayer.push(this.getDistanceToPlayer(obj));
        }
    }

    getDistanceToPlayer(obj) {
        return this.player.playerObject.position.distanceTo(obj.position);
    }

    outlineObject(obj) {
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

    update() {
        // update distances of the selectable objects
        for (let i = 0; i < this.selectableObjects.length; i++) {
            this.distancesToPlayer[i] = this.getDistanceToPlayer(this.selectableObjects[i]);
        }

        // if one of the distances is less than a minimum value outline that object
        if (this.currentlySelectedIndex == null)
            for (let i = 0; i < this.distancesToPlayer.length; i++) {
                if (this.distancesToPlayer[i] < 0.6) {
                    this.outlineObject(this.selectableObjects[i]);
                    this.currentlySelectedIndex = i;
                    break;
                }
            }
        else
            if (this.distancesToPlayer[this.currentlySelectedIndex] > 0.6) {
                this.removeOutline(this.selectableObjects[this.currentlySelectedIndex]);
                this.currentlySelectedIndex = null;
            }
    }
}
