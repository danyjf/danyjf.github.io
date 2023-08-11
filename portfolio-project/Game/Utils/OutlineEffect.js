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
        this.distancesToPlayer.push(this.distanceToPlayer(obj));
    }

    distanceToPlayer(obj) {
        return this.player.playerObject.position.distanceTo(obj.interactPosition);
    }

    outlineObject(obj) {
        if (this.outlinedObjects.length === 0) {
            this.outlinedObjects.push(obj.interactable);
        }
        else {
            console.error("Outlined objects list has more than one element");
        }
    }

    removeOutline() {
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

    updateDistances() {
        for (let i = 0; i < this.selectableObjects.length; i++) {
            this.distancesToPlayer[i] = this.distanceToPlayer(this.selectableObjects[i]);
        }
    }

    objectsInRadius() {
        let objectsInRadius = [];
        for (let i = 0; i < this.distancesToPlayer.length; i++) {
            if (this.distancesToPlayer[i] < this.selectableObjects[i].interactRadius) {
                objectsInRadius.push(i)
            }
        }
        return objectsInRadius;
    }

    closestObjectIndex(objects) {
        let closestObject = objects[0];
        for (const objectIndex of objects) {
            if (this.distancesToPlayer[objectIndex] < this.distancesToPlayer[closestObject]) {
                closestObject = objectIndex;
            }
        }
        return closestObject;
    }

    getSelectedObject() {
        if (this.currentlySelectedIndex == null)
            return null;
        return this.selectableObjects[this.currentlySelectedIndex];
    }

    update() {
        this.updateDistances();

        const objectsInRadius = this.objectsInRadius();
        if (objectsInRadius.length > 0) {
            let closestObject = this.closestObjectIndex(objectsInRadius);

            if (closestObject != this.currentlySelectedIndex) {
                if (this.currentlySelectedIndex != null)
                    this.removeOutline();

                this.outlineObject(this.selectableObjects[closestObject]);
                this.currentlySelectedIndex = closestObject;
            }
        }
        else {
            if (this.currentlySelectedIndex != null) {
                this.removeOutline();
                this.currentlySelectedIndex = null;
            }
        }
    }
}
