import SquareCollider from "../Utils/SquareCollider";

import Game from "../Game";

export default class Outside {
    constructor() {
        this.game = new Game();
        this.scene = this.game.scene;
        this.resources = this.game.resources;
    }

    start() {
        this.outlineEffect = this.game.world.outlineEffect;
        this.outsideObject = this.resources.items.Outside.scene;
        this.colliders = [
            new SquareCollider(this, -13.36, -21.12, -5, -0.5),     // top wall collider
            new SquareCollider(this, -13.36, -17.62, 0.5, 5),       // bottom wall collider
            new SquareCollider(this, -18.612, -25, -0.5, 5),       // right wall collider
            new SquareCollider(this, -10, -13.36, -0.5, 0.5, true)  // door trigger
        ];
        this.setModel();
    }

    setModel() {
        this.outsideObject.traverse((child) => {
            if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;
            }
        });

        this.scene.add(this.outsideObject);
    }
}
