import SquareCollider from "../Utils/SquareCollider";

import Game from "../Game";

export default class Skate {
    constructor() {
        this.game = new Game();
        this.scene = this.game.scene;
        this.resources = this.game.resources;
    }

    start() {
        this.skateObject = this.resources.items.Skate.scene;
        this.collider = new SquareCollider(this, -0.82, -1, 0.56, 0.75);
        this.setModel();
    }

    setModel() {
        this.skateObject.traverse((child) => {
            if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;
            }
        });

        this.scene.add(this.skateObject);
    }
}
