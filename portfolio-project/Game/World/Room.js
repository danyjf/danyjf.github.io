import SquareCollider from "../Utils/SquareCollider";

import Game from "../Game";

export default class Room {
    constructor() {
        this.game = new Game();
        this.scene = this.game.scene;
        this.resources = this.game.resources;
    }
    
    start() {
        this.outlineEffect = this.game.world.outlineEffect;
        this.roomObject = this.resources.items.Room.scene;
        this.colliders = [
            new SquareCollider(this, 1.2, 1, -1.5, 1.5),            // left wall collider
            new SquareCollider(this, -1, -2, -1.5, -0.26),          // right top wall collider
            new SquareCollider(this, -1, -2, 0.26, 1.5),            // right bottom wall collider
            new SquareCollider(this, 1, -1, -1.2, -1),              // top wall collider
            new SquareCollider(this, 1, -1, 1, 1.2),                // bottom wall collider
            new SquareCollider(this, 0.4, -0.4, -1, -0.6),          // desk collider
            new SquareCollider(this, -1.4, -2, -0.26, 0.26, true)   // door trigger
        ];
        this.setModel();
    }

    setModel() {
        this.roomObject.traverse((child) => {
            if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;
            }
        });

        this.scene.add(this.roomObject);
    }

    resize() {}

    update() {}
}
