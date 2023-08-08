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
        // TODO: add colliders in the future
        // this.colliders = [
        //     new SquareCollider(this, 1.2, 1, -1.5, 1.5),      // left wall collider
        //     new SquareCollider(this, -1, -2, -1.5, -0.26),    // right top wall collider
        // ];
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
