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
            new SquareCollider(this, -13.36, -21.12, -5, -0.5),      // top wall collider
            new SquareCollider(this, -13.36, -21.12, 0.5, 5),    // bottom wall collider
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
